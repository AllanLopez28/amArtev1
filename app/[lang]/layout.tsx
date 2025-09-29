import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { t, type Lang } from "@/lib/strings";

export default async function LangLayout(
  { children, params }: { children: React.ReactNode; params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;

  // ✅ Normaliza el idioma para evitar dict undefined
  const safeLang: Lang = (lang === "en" || lang === "es") ? lang : "es";
  const dict = t(safeLang);
  const other = (safeLang === "es" ? "en" : "es") as Lang;

  return (
    <>
      <SiteHeader lang={safeLang} dict={dict} />
      {/* Spacer para la altura del header fijo */}
      <div className="h-16 md:h-[72px]" />
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="mt-16 border-t">
        <div className="container-responsive py-10 grid md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo-amarte.png" alt="AMARTE" width={120} height={40} />
            <p className="mt-3 text-sm max-w-xs">
              Arte y educación para transformar vidas en El Salvador.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href={`/${safeLang}/about`}>{dict.nav.about}</Link></li>
              <li><Link href={`/${safeLang}/programs`}>{dict.nav.programs}</Link></li>
              <li><Link href={`/${safeLang}/donate`}>{dict.nav.donate}</Link></li>
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
