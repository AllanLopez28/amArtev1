
import Image from "next/image";
import { t, type Lang } from "@/lib/strings";
import { Card } from "@/components/ui/card";

export default async function Programs(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">{dict.programsTitle}</h1>

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
    </div>
  );
}
