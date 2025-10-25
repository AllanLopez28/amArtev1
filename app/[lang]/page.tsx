import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t, type Lang } from "@/lib/strings";
import ProgramsCarousel from "@/components/ProgramsCarousel";

export default async function Home(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;

  // idioma predeterminado español 
  const safeLang: Lang = (lang === "en" || lang === "es") ? lang : "es";
  const dict = t(safeLang);

  // IDs de los programas que quieres en portada
  const featuredPrograms = ["art", "workshops", "scholarships"];
  const featuredItems = dict.programs.filter((p: any) =>
    featuredPrograms.includes(p.id)
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <Image
          src="/banner.png"
          alt="Niños pintando"
          width={1920}
          height={1080}
          className="w-full h-[70vh] md:h-[80vh] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white max-w-3xl drop-shadow whitespace-pre-line text-left">
            {dict.hero.title}
          </h1>
          <p className="text-white/90 mt-4 max-w-2xl text-left">
            {dict.hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-6 left-6">
          <div className="backdrop-blur-md bg-white/60 shadow-soft rounded-xl px-4 md:px-6 py-3 md:py-4 inline-block">
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-2 md:gap-4">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-amBlack">120</span>
                <span className="text-xs md:text-sm opacity-80">{dict.quickImpact.kits}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-amblack">90</span>
                <span className="text-xs md:text-sm opacity-80">{dict.quickImpact.talleres}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-amblack">5</span>
                <span className="text-xs md:text-sm opacity-80">{dict.quickImpact.fondos}</span>
              </div>
              <div className="flex md:justify-end">
                <Link href={`/${safeLang}/donate`} className="w-full md:w-auto">
                  <Button className="w-full text-sm md:text-base">
                    {dict.hero.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    {/* PROGRAMAS */}
      <section
        className="py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/back1.png')" }}
      >
        <div className="container-responsive text-black">
          <h2 className="text-5xl md:text-5xl font-bold">{dict.programsTitle}</h2>

          {/* Carrusel con flechas */}
          <ProgramsCarousel items={featuredItems} />

          <div className="mt-6">
            <Link href={`/${safeLang}/programs`} className="underline">
              Ver todos / See all →
            </Link>
          </div>
        </div>
      </section>


      {/* FEATURES 
      
            <section className="relative bg-[url('/back1.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative container-responsive py-14 md:py-16">
          <h2 className="text-center text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
            {dict.featuresTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {dict.features.map((f: any, i: number) => (
              <Card key={i}>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-1 text-sm opacity-80">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}


      {/* ¿Qué hacemos? */}
      <section className="container-responsive my-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Texto (izquierda) */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amBlue">
            {dict.whatWeDoTitle}
          </h2>

          <ul className="mt-6 space-y-5 text-base md:text-lg">
            {dict.whatWeDo.bullets.map((line: string, i: number) => (
              <li key={i} className="pl-6 relative leading-relaxed">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-current" />
                {line}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-base md:text-lg font-semibold leading-relaxed">
            {dict.whatWeDo.summary}
          </p>
        </div>

        {/* Imagen de datos (derecha) */}
        <div className="w-full flex justify-center">
          <div className="rounded-2xl shadow-soft overflow-hidden max-w-[80%]">
            <Image
              src="/datos.png"
              alt={dict.whatWeDo.statsAlt}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              priority={false}
            />
          </div>
        </div>
      </section>


      

      {/* DONAR */}
      <section className="container-responsive my-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold">{dict.donateBlock.title}</h3>
          <p className="mt-2 opacity-80">{dict.donateBlock.body}</p>
          <div className="mt-4 flex gap-2">
            <Link href={`/${safeLang}/donate`}>
              <Button>{dict.hero.cta}</Button>
            </Link>
            <Link
              href="https://paypal.me/"
              target="_blank"
              className="btn btn-outline"
            >
              PayPal
            </Link>
          </div>
        </div>
        <Image
          src="/escuela11.png"
          alt="donar"
          width={640}
          height={420}
          className="rounded-2xl w-full h-72 object-cover"
        />
      </section>

      
    </div>
  );
}
