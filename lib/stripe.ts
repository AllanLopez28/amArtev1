// lib/stripe.ts
import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Missing STRIPE_SECRET_KEY (.env.local)");
  return new Stripe(key, { apiVersion: "2024-06-20" } as any);
}
