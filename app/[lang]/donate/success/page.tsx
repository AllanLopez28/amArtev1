// app/[lang]/donate/success/page.tsx
import Link from "next/link";
import { t, type Lang } from "@/lib/strings";

export default async function Success({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = t(lang || "es");

  return (
    <div className="container-responsive py-16">
      <h1 className="text-3xl font-bold">¡Gracias por tu donación! 💜</h1>
      <p className="mt-3 max-w-2xl">
        Hemos recibido tu donación. En breve recibirás un correo de confirmación de Stripe.
      </p>
      <div className="mt-6">
        <Link href={`/${lang}`} className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
