import Link from "next/link";

export const dynamic = "force-static"; // sitio estático

export default function VolunteerForm() {
  // 👇 Reemplaza con tu accessKey de StaticForms
  const ACCESS_KEY = "sf_822h8l1n97ng3dlkh0987k67";

  return (
    <section
      className="
        relative min-h-[85vh]
        bg-[url('/form.png')] bg-cover bg-center bg-no-repeat
      "
    >
      {/* Contenedor general */}
      <div className="container-responsive py-12 md:py-16">
        {/* Título estilo etiqueta */}
        <div className="mx-auto w-fit bg-amSky px-6 py-3 rounded-md shadow-soft">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide">
            VOLUNTARIO
          </h1>
        </div>

        {/* Card tipo “glass” con los campos (como en la imagen) */}
        <form
          action="https://api.staticforms.xyz/submit"
          method="POST"
          className="
            mt-8 md:mt-10 max-w-3xl mx-auto
            backdrop-blur-md bg-white/75 rounded-2xl shadow-soft
            p-6 md:p-8
          "
        >
          {/* StaticForms */}
          <input type="hidden" name="accessKey" value={ACCESS_KEY} />
          {/* Redirección opcional (ajústala o bórrala) */}
          <input type="hidden" name="redirectTo" value="/gracias" />
          {/* Anti-spam */}
          <input type="text" name="honeypot" className="hidden" />

          {/* CATEGORY */}
          <label className="block text-xs font-semibold tracking-wide opacity-70 mb-2">
            TIPO DE VOLUNTARIADO
          </label>
          <select
            name="category"
            required
            className="
              w-full rounded-xl border border-neutral-300 bg-white/95
              px-4 py-3 text-base
              focus:outline-none focus:ring-2 focus:ring-amPurple
              shadow-sm
            "
          >
            <option value="">Selecciona un área</option>
            <option value="arte">Arte / Talleres</option>
            <option value="musica">Música</option>
            <option value="logistica">Logística</option>
            <option value="fundraising">Fundraising</option>
            <option value="mentoria">Mentoría</option>
          </select>

          {/* NAME */}
          <div className="mt-6">
            <label className="block text-xs font-semibold tracking-wide opacity-70 mb-2">
              NAME
            </label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              required
              className="
                w-full rounded-xl border border-neutral-300 bg-white/95
                px-4 py-3 text-base
                focus:outline-none focus:ring-2 focus:ring-amPurple
                shadow-sm
              "
            />
          </div>

          {/* EMAIL */}
          <div className="mt-6">
            <label className="block text-xs font-semibold tracking-wide opacity-70 mb-2">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              required
              className="
                w-full rounded-xl border border-neutral-300 bg-white/95
                px-4 py-3 text-base
                focus:outline-none focus:ring-2 focus:ring-amPurple
                shadow-sm
              "
            />
          </div>

          {/* CTA grande como en el mock */}
          <div className="mt-8">
            <button
              type="submit"
              className="
                w-full md:w-auto
                bg-amPink text-white font-bold
                rounded-xl px-8 py-4
                shadow-soft hover:opacity-90 transition
              "
            >
                ENVIAR
            </button>
          </div>

          {/* Texto auxiliar (puedes reemplazarlo) */}
          <p className="mt-6 text-sm opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          {/* Consentimiento */}
          <label className="flex items-start gap-3 mt-6 text-sm">
            <input type="checkbox" required className="mt-1 size-4" />
            Acepto ser contactad@ por AMARTE para oportunidades de voluntariado.
          </label>
        </form>

        {/* Volver */}
        <div className="mt-6 text-center">
          <Link href="../" className="underline">← Volver</Link>
        </div>
      </div>
    </section>
  );
}
