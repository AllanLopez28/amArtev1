import Image from "next/image";
import { t, type Lang } from "@/lib/strings";

export default async function ProgramsPage(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  const programs = [
    {
      id: "art",
      img: "/p1.png",
      imgAlt: lang === "es" ? "Niños con kits de arte" : "Kids with art kits",
      title: lang === "es" ? "Clases de Arte" : "Art Classes",
      desc: lang === "es"
        ? "Organizamos clases en las comunidades donde los niños participan en actividades artísticas diseñadas para fomentar la creatividad y la autoexpresión. En cada clase, los niños trabajan en un proyecto artístico específico, como crear autorretratos, tableros de visión y otras piezas creativas. Estas actividades permiten a los niños explorar su creatividad, reflexionar sobre sus experiencias y desarrollar confianza a través de la expresión artística. Asimismo, organizamos recolecciones de materiales de arte para asegurar que los niños que no tienen acceso a materiales artísticos debido a barreras económicas, aún tengan la oportunidad de explorar su creatividad."
        : "We host classes in the community where children participate in guided, hands-on art activities designed to encourage creativity and self-expression. In each class, children work on a specific art project, such as creating self-portraits, vision boards, and other creative pieces. These activities allow children to explore their creativity, reflect on their experiences, and build confidence through artistic expression. We also organize art supply drives to ensure that children who may not have access to art materials due to financial barriers still have the opportunity to explore their creativity.",
    },
    {
      id: "scholarships",
      img: "/p2.png",
      imgAlt: lang === "es" ? "Niños recibiendo becas" : "Children receiving scholarships",
      title: lang === "es" ? "Becas y Mentorías" : "Scholarships & Mentorships",
      desc: lang === "es"
        ? "Ofrecemos pequeñas becas a un número limitado de niños que enfrentan desafíos significativos. Este programa apoya a estudiantes que demuestran dedicación y un fuerte compromiso con su educación. Al proporcionar asistencia financiera, nuestro objetivo es ayudar a los niños a superar obstáculos y alcanzar sus metas educativas. Los beneficiarios de las becas también son emparejados con un mentor que brinda orientación y ánimo a lo largo de su trayectoria educativa."
        : "We offer small scholarships to a limited number of children who face significant challenges. This program supports students who demonstrate dedication and a strong commitment to their education. By providing financial assistance, we aim to help children overcome obstacles and pursue their educational goals. Scholarship recipients are also paired with a mentor who provides guidance and encouragement throughout their educational journey.",
    },
    {
      id: "wellbeing",
      img: "/p3.png",
      imgAlt: lang === "es" ? "Eventos comunitarios" : "Community events",
      title: lang === "es" ? "Conexión Comunitaria" : "Community Engagement",
      desc: lang === "es"
        ? "Organizamos eventos comunitarios que celebran y fomentan el continuo crecimiento y éxito de los niños. Estos eventos reúnen a familias y miembros de la comunidad para reconocer los logros de los niños y promover un ambiente de apoyo."
        : "We host special community events that celebrate and encourage children's continued growth and success. These events bring families and community members together to recognize children's achievements and foster a supportive environment.",
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/back3.png')" }}
    >
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container-responsive py-16">

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {dict.programsTitle}
        </h1>

        {/* Separador decorativo */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-1 w-12 rounded-full bg-amPink" />
          <div className="h-1 w-6 rounded-full bg-white/40" />
          <div className="h-1 w-3 rounded-full bg-white/20" />
        </div>

        {/* Lista de programas */}
        <div className="mt-12 flex flex-col gap-8">
          {programs.map((program, i) => (
            <div
              key={program.id}
              className="flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-soft bg-white/10 backdrop-blur-sm"
            >
              {/* Foto con alto fijo igual en todas las cards */}
              <div className="relative shrink-0 w-full h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/10">
                <Image
                  src={program.img}
                  alt={program.imgAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 320px, 384px"
                />
              </div>

              {/* Texto */}
              <div className="flex flex-col justify-center px-8 py-8 text-center sm:text-left">
                <span className="text-xs font-bold tracking-widest uppercase text-amPink mb-1">
                  {lang === "es" ? `Programa ${i + 1}` : `Program ${i + 1}`}
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {program.title}
                </h2>

                <p className="mt-4 text-white/90 text-sm md:text-base leading-relaxed max-w-2xl">
                  {program.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}