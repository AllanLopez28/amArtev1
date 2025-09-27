import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { t, type Lang } from "@/lib/strings";

export default async function Home(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  return (
    <div>
      {/* HERO con estadísticas sobre la imagen */}
      <section className="relative">
        <Image
          src="/banner.png"
          alt="Niños pintando"
          width={1920}
          height={1080}
          className="w-full h-[70vh] md:h-[80vh] object-cover"
          priority
        />

        {/* oscurecedor */}
        <div className="absolute inset-0 bg-black/30" />


        {/* copy principal */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white max-w-3xl drop-shadow whitespace-pre-line text-left">
            {dict.hero.title}
          </h1>
          <p className="text-white/90 mt-4 max-w-2xl text-left">
            {dict.hero.subtitle}
          </p>
        </div>

        {/* panel translúcido con estadísticas + CTA (sobre la imagen) */}
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
                <Link href={`/${lang}/donate`} className="w-full md:w-auto">
                  <Button className="w-full text-sm md:text-base">
                    {dict.hero.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


        {/* WRAPPER CON FONDO: solo FEATURES ahora */}
        <section
          className="
          relative
          bg-[url('/back1.png')] bg-cover bg-center bg-no-repeat
        "
        >
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

        {/* PROGRAMAS */}
        <section className="bg-amSky/10 py-12">
          <div className="container-responsive">
            <h2 className="text-2xl font-bold">{dict.programsTitle}</h2>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              {dict.programs.map((p: any, i: number) => (
                <Card key={i}>
                  <Image
                    src="/escuela11.png"
                    alt={p.imgAlt}
                    width={400}
                    height={280}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <h3 className="mt-3 font-semibold">{p.title}</h3>
                  <p className="text-sm opacity-80">{p.desc}</p>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Link href={`/${lang}/programs`} className="underline">
                Ver todos / See all →
              </Link>
            </div>
          </div>
        </section>

        {/* DONAR */}
        <section className="container-responsive my-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">{dict.donateBlock.title}</h3>
            <p className="mt-2 opacity-80">{dict.donateBlock.body}</p>
            <div className="mt-4 flex gap-2">
              <Link href={`/${lang}/donate`}>
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
