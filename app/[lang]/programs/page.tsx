import Image from "next/image";
import { t, type Lang } from "@/lib/strings";
import ProgramsCarousel from "@/components/ProgramsCarousel";

export default async function ProgramsPage(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  // Mostrar TODOS los programas en el carrusel
const allPrograms = [...dict.programs] as {
  id: string; title: string; desc: string; img: string; imgAlt: string;
}[];


  return (
    <section
      className="py-12 min-h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/back3.png')" }}
    >
      <div className="container-responsive text-white">
        <h1 className="text-3xl md:text-4xl font-bold">
          {dict.programsTitle}
        </h1>

        {/* Carrusel reutilizado mostrando TODOS los programas */}
        <ProgramsCarousel items={allPrograms} />

        {/* Espacio para futuras acciones (CTA, filtros, etc.) */}
        <div className="mt-10" />
      </div>
    </section>
  );
}
