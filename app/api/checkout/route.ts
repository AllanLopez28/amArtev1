// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs"; // Stripe no soporta Edge runtime

export async function POST(req: NextRequest) {
  try {
    const { amount, currency = "usd", lang = "es" } = await req.json();

    // amount en dólares (puede venir como string o number)
    const parsed =
      typeof amount === "string" ? Number(amount.replace(",", ".")) : Number(amount);

    if (!Number.isFinite(parsed) || parsed <= 0) {
      return NextResponse.json({ error: "Monto inválido" }, { status: 400 });
    }

    const unitAmount = Math.round(parsed * 100); // a centavos
    if (unitAmount < 50) {
      return NextResponse.json({ error: "El monto mínimo es $0.50" }, { status: 400 });
    }

    const origin = req.nextUrl.origin;
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "donate",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            unit_amount: unitAmount,
            product_data: {
              name:
                lang === "es"
                  ? "Donación única a Fundación AMARTE"
                  : "One-time donation to AMARTE Foundation",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/${lang}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${lang}/donate?cancelled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
