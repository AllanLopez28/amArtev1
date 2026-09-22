import { t, type Lang } from "@/lib/strings";
import ProgramsList, { type ProgramItem } from "@/components/ProgramsList";

export default async function ProgramsPage(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  const programs: ProgramItem[] = [
    {
      id: "art",
      img: "/p1.png",
      imgAlt: lang === "es" ? "Niños con kits de arte" : "Kids with art kits",
      title: lang === "es" ? "Clases de Arte" : "Art Classes",
      desc: lang === "es"
        ? "Organizamos clases en las comunidades donde los niños participan en actividades artísticas diseñadas para fomentar la creatividad y la autoexpresión. En cada clase, los niños trabajan en un proyecto artístico específico, como crear autorretratos, tableros de visión y otras piezas creativas. Estas actividades permiten a los niños explorar su creatividad, reflexionar sobre sus experiencias y desarrollar confianza a través de la expresión artística. Asimismo, organizamos recolecciones de materiales de arte para asegurar que los niños que no tienen acceso a materiales artísticos debido a barreras económicas, aún tengan la oportunidad de explorar su creatividad."
        : "We host classes in the community where children participate in guided, hands-on art activities designed to encourage creativity and self-expression. In each class, children work on a specific art project, such as creating self-portraits, vision boards, and other creative pieces. These activities allow children to explore their creativity, reflect on their experiences, and build confidence through artistic expression. We also organize art supply drives to ensure that children who may not have access to art materials due to financial barriers still have the opportunity to explore their creativity.",
      country: "SV",
    },
    {
      id: "scholarships",
      img: "/p2.png",
      imgAlt: lang === "es" ? "Niños recibiendo becas" : "Children receiving scholarships",
      title: lang === "es" ? "Becas y Mentorías" : "Scholarships & Mentorships",
      desc: lang === "es"
        ? "Ofrecemos pequeñas becas a un número limitado de niños que enfrentan desafíos significativos. Este programa apoya a estudiantes que demuestran dedicación y un fuerte compromiso con su educación. Al proporcionar asistencia financiera, nuestro objetivo es ayudar a los niños a superar obstáculos y alcanzar sus metas educativas. Los beneficiarios de las becas también son emparejados con un mentor que brinda orientación y ánimo a lo largo de su trayectoria educativa."
        : "We offer small scholarships to a limited number of children who face significant challenges. This program supports students who demonstrate dedication and a strong commitment to their education. By providing financial assistance, we aim to help children overcome obstacles and pursue their educational goals. Scholarship recipients are also paired with a mentor who provides guidance and encouragement throughout their educational journey.",
      country: "SV",
    },
    {
      id: "wellbeing",
      img: "/p3.png",
      imgAlt: lang === "es" ? "Eventos comunitarios" : "Community events",
      title: lang === "es" ? "Conexión Comunitaria" : "Community Engagement",
      desc: lang === "es"
        ? "Organizamos eventos comunitarios que celebran y fomentan el continuo crecimiento y éxito de los niños. Estos eventos reúnen a familias y miembros de la comunidad para reconocer los logros de los niños y promover un ambiente de apoyo."
        : "We host special community events that celebrate and encourage children's continued growth and success. These events bring families and community members together to recognize children's achievements and foster a supportive environment.",
      country: "SV",
    },
    {
      id: "us-art-program",
      img: "/art-us1.jpeg",
      imgAlt: lang === "es" ? "Programa de Arte en USA" : "Art Program in USA",
      title: "Art Program",
      desc: lang === "es"
        ? "Nuestro programa de arte en Estados Unidos promueve el desarrollo creativo y emocional mediante talleres interactivos. Brindamos a los niños los materiales y el espacio seguro necesario para explorar su imaginación y expresarse libremente."
        : "Our art program in the United States promotes creative and emotional development through interactive workshops. We provide children with the materials and safe space needed to explore their imagination and express themselves freely.",
      country: "US",
    },
    {
      id: "do-art-program",
      img: "/art-rd1.jpeg",
      imgAlt: lang === "es" ? "Programa de Arte en RD" : "Art Program in DR",
      title: "Art Program",
      desc: lang === "es"
        ? "En República Dominicana, el programa de arte busca inspirar a la juventud a través de la pintura y la expresión visual. Ofrecemos herramientas, orientación y una comunidad de apoyo donde cada niño puede descubrir su potencial artístico."
        : "In the Dominican Republic, the art program seeks to inspire youth through painting and visual expression. We offer tools, guidance, and a supportive community where every child can discover their artistic potential.",
      country: "DO",
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

        {/* Client Component con los filtros y la lista */}
        <ProgramsList programs={programs} lang={lang} />

      </div>
    </section>
  );
}