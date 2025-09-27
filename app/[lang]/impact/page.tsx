
import { Card } from "@/components/ui/card";
import { t, type Lang } from "@/lib/strings";

export default async function Impact(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">{dict.nav.impact}</h1>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Card>
          <h3 className="text-4xl font-extrabold text-amBlue">50+</h3>
          <p className="opacity-80">Kits</p>
        </Card>
        <Card>
          <h3 className="text-4xl font-extrabold text-amOrange">20+</h3>
          <p className="opacity-80">Talleres</p>
        </Card>
        <Card>
          <h3 className="text-4xl font-extrabold text-amPurple">US$ 6,800</h3>
          <p className="opacity-80">Fondos</p>
        </Card>
      </div>
    </div>
  );
}
