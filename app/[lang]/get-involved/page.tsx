
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { t, type Lang } from "@/lib/strings";

export default async function GetInvolved(
  { params }: { params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");

  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">{dict.nav.getInvolved}</h1>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Card>
          <h3 className="font-semibold">Donar</h3>
          <p className="opacity-80 text-sm">US$25 = kit de arte · US$100 = beca parcial.</p>
          <Link className="underline mt-2 inline-block" href={`/${lang}/donate`}>
            Ir a donar →
          </Link>
        </Card>

        <Card>
          <h3 className="font-semibold">Voluntariado</h3>
          <Link className="underline mt-2 inline-block" href={`/${lang}/get-involved/volunteer`}>
            Ir al formulario →
          </Link>

        </Card>

        <Card>
          <h3 className="font-semibold">Alianzas</h3>
          <p className="opacity-80 text-sm">Empresas y ONGs pueden apoyar con recursos.</p>
        </Card>
      </div>
    </div>
  );
}
