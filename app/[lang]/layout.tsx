import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { t, type Lang } from "@/lib/strings";

export default async function LangLayout(
  { children, params }: { children: React.ReactNode; params: Promise<{ lang: Lang }> }
) {
  const { lang } = await params;

  // Normaliza el idioma para evitar dict undefined
  const safeLang: Lang = (lang === "en" || lang === "es") ? lang : "es";
  const dict = t(safeLang);
  const other = (safeLang === "es" ? "en" : "es") as Lang;

  return (
    <>
      <SiteHeader lang={safeLang} dict={dict} />

      {/* Spacer por header fijo */}
      <div className="h-16 md:h-[72px]" />
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="mt-16 border-t bg-white">
        <div className="container-responsive py-10 grid gap-10 md:grid-cols-3">
          {/* Col 1: Logo mini + mensaje institucional */}
          <div>
            <Image
              src="/logo-amarte.png"
              alt="AMARTE"
              width={100}
              height={32}
              className="h-auto w-[100px]"
            />
            <p className="mt-3 text-sm leading-relaxed max-w-md">
              AMARTE International Inc. is a 501(c)(3) not-for-profit organization,
              incorporated in the State of New York on May 23, 2025. Our purpose is
              to promote the rights and well-being of underserved children and their
              families, impacting and equipping our communities through art and love.
            </p>
          </div>

          {/* Col 2: Menú resumido */}
          <div>
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${safeLang}/about`} className="hover:underline">{dict.nav.about}</Link></li>
              <li><Link href={`/${safeLang}/programs`} className="hover:underline">{dict.nav.programs}</Link></li>
              <li><Link href={`/${safeLang}/donate`} className="hover:underline">{dict.nav.donate}</Link></li>
              <li><Link href={`/${safeLang}/get-involved`} className="hover:underline">{dict.nav.getInvolved}</Link></li>
              <li><Link href={`/${safeLang}/contact`} className="hover:underline">{dict.nav.contact}</Link></li>
              <li><Link href={`/${safeLang}/faq`} className="hover:underline">{dict.nav.faq}</Link></li>
            


              {/* TODO: Agregar dirección cuando la tengas */}
              {/* <li className="text-xs opacity-70">123 Example St, City, State</li> */}
              {/* TODO: Aviso legal / Privacidad / Cookies */}
              {/* <li><Link href={`/${safeLang}/legal`} className="hover:underline">Aviso legal</Link></li>
              <li><Link href={`/${safeLang}/privacy`} className="hover:underline">Privacidad</Link></li>
              <li><Link href={`/${safeLang}/cookies`} className="hover:underline">Cookies</Link></li> */}
            </ul>
          </div>

          {/* Col 3: Contacto + redes */}
          <div>
            <h4 className="font-semibold mb-3">{dict.nav.contact}</h4>
            <p className="text-sm">
              <a href="mailto:amarteproject@gmail.com" className="hover:underline">
                amarteproject@gmail.com
              </a>
            </p>
            {/* Tel opcional si aplica */}
            {/* <p className="text-sm mt-1">+1 (555) 000-0000</p> */}

            <div className="mt-4 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-neutral-50"
                title="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 22v-8h2.7l.3-3h-3v-1.9c0-.9.2-1.5 1.6-1.5H16V4.1c-.8-.1-1.5-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H7v3h2.9v8h3.6z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#" //poner link real despues
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-neutral-50"
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 16.8 2.8 2.8 0 0 0 12 9.2zM17.8 6.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </a>


            </div>

            <p className="text-xs mt-6 opacity-70">
              {dict.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
