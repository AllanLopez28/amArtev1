import { t, type Lang } from "@/lib/strings";

export default async function FaqPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = t(lang || "es");

  // Si aún no agregaste faq en strings.ts, usamos placeholders.
  const faq = dict.faq ?? {
    title: lang === "es" ? "Preguntas frecuentes" : "FAQ",
    intro:
      lang === "es"
        ? "Aquí encontrarás respuestas a dudas comunes. Iremos ampliando esta sección."
        : "Here you’ll find answers to common questions. We will expand this section.",
    items: [
      {
        q:
          lang === "es"
            ? "¿Cómo puedo hacer una donación?"
            : "How can I make a donation?",
        a:
          lang === "es"
            ? "Puedes donar en la sección Donar. Aceptamos pagos con Stripe (tarjeta y otros métodos)."
            : "You can donate in the Donate section. We accept Stripe (cards and other methods).",
      },
      {
        q:
          lang === "es"
            ? "¿Puedo ser voluntario?"
            : "Can I volunteer?",
        a:
          lang === "es"
            ? "Sí. En la sección Involúcrate encontrarás un formulario para postularte como voluntario."
            : "Yes. In the Get Involved section you’ll find a volunteer application form.",
      },
      {
        q:
          lang === "es"
            ? "¿Recibiré comprobante de donación?"
            : "Will I receive a donation receipt?",
        a:
          lang === "es"
            ? "Sí, una vez completado el pago recibirás el comprobante por correo."
            : "Yes, once the payment is completed you’ll receive a receipt via email.",
      },
    ],
  };

  return (
    <section className="container-responsive py-12">
      <h1 className="text-3xl md:text-4xl font-bold">{faq.title}</h1>
      <p className="mt-2 max-w-2xl opacity-80">{faq.intro}</p>

      <div className="mt-8 grid gap-4">
        {faq.items.map((item: { q: string; a: string }, i: number) => (
          <details
            key={i}
            className="group rounded-2xl border bg-white/80 p-5 open:shadow-soft"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold flex items-center justify-between">
              <span>{item.q}</span>
              <span className="ml-3 select-none rounded-md border px-2 py-0.5 text-xs opacity-70 group-open:rotate-180 transition">
                ▼
              </span>
            </summary>
            <div className="mt-3 text-sm opacity-90">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
