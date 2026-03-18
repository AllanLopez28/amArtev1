import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t, type Lang } from "@/lib/strings";
import StoriesCarousel from "@/components/StoriesCarousel";
import ProgramsCarousel from "@/components/ProgramsCarousel";

type Story = {
  id: string;
  title: string;
  desc: string;
  img: string;
};

export default async function Home(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;

  // idioma predeterminado español 
  const safeLang: Lang = (lang === "en" || lang === "es") ? lang : "es";
  const dict = t(safeLang);

  // IDs de los programas que aparecen en portada
  const featuredPrograms = ["art", "workshops", "scholarships", "wellbeing"];
  const featuredItems = dict.programs.filter((p: any) =>
    featuredPrograms.includes(p.id)
  );

  const stories: Story[] = (dict.histories || []).map(h => ({
    id: h.id,
    title: h.title,
    desc: h.desc || "",
    img: h.img || "/story-placeholder.png",
  }));

  // Íconos por índice de bullet
  const bulletIcons = ["1", "3", "2", "4"];

  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <Image
          src="/bannerr3.jpg"
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
      </section>

      {/* ¿Qué hacemos? */}
      <section className="w-full grid md:grid-cols-2 gap-0 items-stretch overflow-hidden">
        {/* Texto (izquierda) */}
        <div className="flex flex-col justify-start pt-24 px-10 pb-20 bg-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amBlue">
            {dict.whatWeDoTitle}
          </h2>

          <ul className="mt-6 space-y-5 text-base md:text-lg">
            {dict.whatWeDo.bullets.map((line: string, i: number) => (
              <li key={i} className="flex items-center gap-4 leading-relaxed">
                <Image
                  src={`/${bulletIcons[i]}.png`}
                  alt=""
                  width={90}
                  height={90}
                  className="shrink-0 object-contain"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-base md:text-lg font-semibold leading-relaxed">
            {dict.whatWeDo.summary}
          </p>
        </div>

        {/* Misión (derecha) */}
        <div className="flex items-center justify-center bg-amBlue px-6 py-10">
          <div className="w-full">
            {/* Etiqueta */}
            <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              {dict.whatWeDo.missionLabel}
            </span>

            {/* Texto de misión */}
            <p className="text-white text-base md:text-lg leading-relaxed font-light">
              {dict.whatWeDo.mission}
            </p>

            {/* Separador decorativo */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-amPink" />
              <div className="h-1 w-6 rounded-full bg-white/40" />
              <div className="h-1 w-3 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section
        className="py-4 md:py-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/back2.png')" }}
      >
        <div className="container-responsive text-white text-center">
          <h2 className="text-5xl md:text-5xl font-bold mb-4">{dict.programsTitle}</h2>

          {/* Carrusel con flechas */}
          <ProgramsCarousel items={featuredItems} />

          <div className="mt-4">
            <Link href={`/${safeLang}/programs`} className="underline">
              Ver todos / See all →
            </Link>
          </div>
        </div>
      </section>

      {/* HISTORIAS */}
      <section
        className="py-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/back11.png')" }}
      >
        <div className="rounded-2xl p-6 md:p-10">
          <StoriesCarousel items={stories} intervalMs={5000} />
        </div>
      </section>

      {/* DONAR */}
      <section
        className="relative py-12 md:py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/back1.png')" }}
      >
        <div className="container-responsive grid md:grid-cols-[420px,1fr] items-center gap-10">
          {/* Imagen del niño (cuadrada) */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/donateimg.png"
                alt="Niño sonriendo con material de arte"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Texto y botones */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-amBlack uppercase">
              {safeLang === "es" ? "¡HAZ UNA DONACIÓN!" : "Make a Donation!"}
            </h3>

            <p className="mt-3 text-lg md:text-2xl text-amBlack/70 max-w-2xl mx-auto md:mx-0">
              {dict.donateBlock.body}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link href={`/${safeLang}/donate`}>
                <Button className="px-6 py-2 text-base">{dict.hero.cta}</Button>
              </Link>

              <Link
                href="https://paypal.me/"
                target="_blank"
                className="btn btn-outline px-6 py-2 text-base"
              >
                PayPal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}