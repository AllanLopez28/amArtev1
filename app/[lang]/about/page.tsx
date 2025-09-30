import Image from "next/image";
import { t, type Lang } from "@/lib/strings";

export default async function About(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  // Info del equipo (imagen, nombre, rol)
  const team = [
    { src: "/vol1.png", name: "Virgina Barrow", role: "Presidente" },
    { src: "/vol2.png", name: "Carlos Pérez", role: "Contador" },
    { src: "/vol2.png", name: "Carla Velez", role: "Administración" },
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
        <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={member.src}
                alt={member.name}
                width={400}
                height={400}
                className="object-contain"
              />
              <h3 className="mt-6 text-3xl font-semibold text-amWhite">{member.name}</h3>
              <p className="text-2xl text-amWhite">{member.role}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
