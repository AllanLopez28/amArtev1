import Image from "next/image";
import { t, type Lang } from "@/lib/strings";

export default async function About(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  // Info del equipo (imagen, nombre, rol)
  const team = [
    {
      src: "/virginia.png",
      name: "Virginia Barrow-Coreas",
      role: "President",
    },
    {
      src: "/benjamin.png",
      name: "Benjamin Coreas",
      role: "Vice President",
    },
    {
      src: "/karen.png",
      name: "Karen \nDiaz",
      role: "Treasurer",
    },
    {
      src: "/gaby.png",
      name: "Gabriela Barrera",
      role: "Secretary",
    },
    {
      src: "/karla.png",
      name: "Karla Umanzor",
      role: "Director",
    },
  ];

  return (
    <section
      className="
        relative
        bg-[url('/back2.png')] bg-cover bg-center bg-no-repeat
      "
    >
      {/* Overlay opcional para legibilidad */}
      <div className="absolute inset-0 bg-white/70 -z-10"></div>

      {/* Contenido */}
      <div className="container-responsive py-16 relative">
        <h1 className="text-5xl font-bold">{dict.teamTitle}</h1>
        <p className="mt-3 max-w-2xl opacity-80">
          Misión, visión e historia. Texto de ejemplo acorde a la fundación,
          resaltando transparencia, arte y educación.
        </p>

        {/* Grilla de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-12 text-center">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Contenedor responsive */}
              <div
                className="
                  relative
                  w-40 h-40
                  sm:w-48 sm:h-48
                  md:w-56 md:h-56
                  lg:w-64 lg:h-64
                "
              >
                <Image
                  src={member.src}
                  alt={member.name.replace("\n", " ")}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 640px) 160px,
                         (max-width: 768px) 192px,
                         (max-width: 1024px) 224px,
                         256px"
                />
              </div>

              {/* ✅ Nombre en líneas (soporta \n) */}
              <h3 className="mt-2 text-2xl font-semibold text-amWhite leading-tight">
                {member.name.split("\n").map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              {/* ✅ Rol más cerca */}
              <p className="mt-0.5 text-lg text-amWhite/80">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
