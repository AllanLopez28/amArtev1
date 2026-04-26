import Image from "next/image";
import { t, type Lang } from "@/lib/strings";

export default async function About(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  const team = [
    {
      src: "/virginia.png",
      name: "Virginia Barrow-Coreas",
      role: "President",
      desc: lang === "es"
        ? "Virginia lidera la fundación con una visión clara de impacto social, guiando cada iniciativa con pasión y compromiso hacia los niños y familias de El Salvador."
        : "Virginia leads the foundation with a clear vision of social impact, guiding every initiative with passion and commitment toward children and families in El Salvador.",
    },
    {
      src: "/benjamin.png",
      name: "Benjamin Coreas",
      role: "Vice President",
      desc: lang === "es"
        ? "Benjamin apoya la dirección estratégica de AMARTE, coordinando esfuerzos entre los distintos programas y asegurando que cada acción esté alineada con la misión de la fundación."
        : "Benjamin supports AMARTE's strategic direction, coordinating efforts across programs and ensuring every action aligns with the foundation's mission.",
    },
    {
      src: "/karen.png",
      name: "Karen Diaz",
      role: "Treasurer",
      desc: lang === "es"
        ? "Karen gestiona los recursos financieros de la fundación con transparencia y responsabilidad, garantizando que cada donación llegue donde más se necesita."
        : "Karen manages the foundation's financial resources with transparency and accountability, ensuring every donation reaches where it is needed most.",
    },
    {
      src: "/gaby.png",
      name: "Gabriela Barrera",
      role: "Secretary",
      desc: lang === "es"
        ? "Gabriela mantiene la organización interna de AMARTE, coordinando comunicaciones y documentación para que cada programa funcione de manera eficiente."
        : "Gabriela maintains AMARTE's internal organization, coordinating communications and documentation so every program runs efficiently.",
    },
    {
      src: "/karla.png",
      name: "Karla Umanzor",
      role: "Director of Programs",
      desc: lang === "es"
        ? "Karla diseña y supervisa los programas educativos y artísticos de AMARTE, asegurando que cada actividad genere un impacto real y duradero en las comunidades."
        : "Karla designs and oversees AMARTE's educational and artistic programs, ensuring every activity creates a real and lasting impact in communities.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container-responsive py-16">

        {/* Título */}
        <h1 className="text-5xl font-bold text-neutral-800">{dict.teamTitle}</h1>

        {/* Misión */}
        <div className="mt-4 max-w-3xl">
          <span className="inline-block bg-amBlue/10 text-amBlue text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
            {dict.whatWeDo.missionLabel}
          </span>
          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            {dict.whatWeDo.mission}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-amPink" />
            <div className="h-1 w-6 rounded-full bg-amBlue/40" />
            <div className="h-1 w-3 rounded-full bg-amBlue/20" />
          </div>
        </div>

        {/* Lista de miembros */}
        <div className="mt-14 flex flex-col gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-neutral-50 rounded-2xl p-3 shadow-soft"
            >
              {/* Foto */}
              <div className="relative shrink-0 w-48 h-48 md:w-60 md:h-60">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 144px, 176px"
                />
              </div>

              {/* Texto */}
              <div className="flex flex-col justify-center text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800">
                  {member.name}
                </h3>
                <span className="mt-1 inline-block text-sm font-semibold tracking-wide uppercase text-amBlue">
                  {member.role}
                </span>
                <p className="mt-3 text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}