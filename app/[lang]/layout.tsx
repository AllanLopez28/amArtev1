import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { t, type Lang } from "@/lib/strings";

export default async function LangLayout(
  { children, params }: { children: React.ReactNode; params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;
  const dict = t(lang || "es");
  const other = (lang === "es" ? "en" : "es") as Lang;

  return (
    <>
      <header className="border-b">
        <div className="container-responsive flex items-center justify-between py-4 gap-4">
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <Image src="/logo-amarte.png" alt="AMARTE" width={110} height={36} priority />
          </Link>
          <nav className="hidden md:flex gap-6 font-medium">
            <Link href={`/${lang}`}>{dict.nav.home}</Link>
            <Link href={`/${lang}/about`}>{dict.nav.about}</Link>
            <Link href={`/${lang}/programs`}>{dict.nav.programs}</Link>
            <Link href={`/${lang}/impact`}>{dict.nav.impact}</Link>
            <Link href={`/${lang}/get-involved`}>{dict.nav.getInvolved}</Link>
            <Link href={`/${lang}/contact`}>{dict.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href={`/${other}`} className="text-sm underline">{other.toUpperCase()}</Link>
            <Link href={`/${lang}/donate`}><Button>{dict.nav.donate}</Button></Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t">
        <div className="container-responsive py-10 grid md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo-amarte.png" alt="AMARTE" width={120} height={40} />
            <p className="mt-3 text-sm max-w-xs">Arte y educación para transformar vidas en El Salvador.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href={`/${lang}/about`}>{dict.nav.about}</Link></li>
              <li><Link href={`/${lang}/programs`}>{dict.nav.programs}</Link></li>
              <li><Link href={`/${lang}/donate`}>{dict.nav.donate}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{dict.nav.contact}</h4>
            <p className="text-sm">contacto@amarte.org · +503 0000 0000</p>
            <p className="text-xs mt-3 opacity-70">{dict.footer.rights}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
