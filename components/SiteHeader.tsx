"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type Dict = {
  nav: {
    home: string;
    about: string;
    programs: string;
    impact: string;
    getInvolved: string;
    contact: string;
    donate: string;
  };
  footer: { rights: string };
};

export default function SiteHeader({
  lang,
  dict,
}: {
  lang: string;
  dict: Dict;
}) {
  const [open, setOpen] = useState(false);

  // Idioma alternativo
  const otherLang = lang === "es" ? "en" : "es";

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Header fijo con fondo BLANCO sólido */}
      <header className="fixed top-0 inset-x-0 z-50 border-b bg-white">
        <div className="container-responsive flex items-center justify-between py-4 gap-4">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <Image
              src="/logo-amarte.png"
              alt="AMARTE"
              width={110}
              height={36}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 font-medium items-center">
            <Link href={`/${lang}`}>{dict.nav.home}</Link>
            <Link href={`/${lang}/about`}>{dict.nav.about}</Link>
            <Link href={`/${lang}/programs`}>{dict.nav.programs}</Link>
            <Link href={`/${lang}/impact`}>{dict.nav.impact}</Link>
            <Link href={`/${lang}/get-involved`}>{dict.nav.getInvolved}</Link>
            <Link href={`/${lang}/contact`}>{dict.nav.contact}</Link>

            {/* Botón de idioma */}
            <Link
              href={`/${otherLang}`}
              className="ml-4 px-3 py-1 border rounded-md text-sm hover:bg-neutral-100"
            >
              {otherLang.toUpperCase()}
            </Link>
          </nav>

          {/* Burger (mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Menú móvil */}
      {open && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/30 md:hidden z-40"
            onClick={() => setOpen(false)}
          />
          {/* panel */}
          <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl md:hidden z-50 p-5">
            <div className="flex items-center justify-between mb-6">
              <Image
                src="/logo-amarte.png"
                alt="AMARTE"
                width={100}
                height={32}
              />
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="rounded-xl border px-2 py-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6l-12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-base">
              <Link href={`/${lang}`} onClick={() => setOpen(false)}>
                {dict.nav.home}
              </Link>
              <Link href={`/${lang}/about`} onClick={() => setOpen(false)}>
                {dict.nav.about}
              </Link>
              <Link href={`/${lang}/programs`} onClick={() => setOpen(false)}>
                {dict.nav.programs}
              </Link>
              <Link href={`/${lang}/impact`} onClick={() => setOpen(false)}>
                {dict.nav.impact}
              </Link>
              <Link
                href={`/${lang}/get-involved`}
                onClick={() => setOpen(false)}
              >
                {dict.nav.getInvolved}
              </Link>
              <Link href={`/${lang}/contact`} onClick={() => setOpen(false)}>
                {dict.nav.contact}
              </Link>

              {/* Botón de idioma en mobile */}
              <Link
                href={`/${otherLang}`}
                onClick={() => setOpen(false)}
                className="mt-4 px-3 py-2 border rounded-md text-center hover:bg-neutral-100"
              >
                {otherLang.toUpperCase()}
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
