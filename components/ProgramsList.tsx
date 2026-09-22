"use client";

import React, { useState } from "react";
import Image from "next/image";
import CountryFilter, { Country } from "./CountryFilter";

export interface ProgramItem {
  id: string;
  img: string;
  imgAlt: string;
  title: string;
  desc: string;
  country: Country;
}

interface ProgramsListProps {
  programs: ProgramItem[];
  lang: string;
}

export default function ProgramsList({ programs, lang }: ProgramsListProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>("ALL");

  const filteredPrograms = programs.filter(
    (program) => selectedCountry === "ALL" || program.country === selectedCountry
  );

  const getCountryBadge = (country: Country) => {
    switch (country) {
      case "SV":
        return { label: "El Salvador", flagCode: "sv" };
      case "US":
        return { label: "Estados Unidos", flagCode: "us" };
      case "DO":
        return { label: "República Dominicana", flagCode: "do" };
      default:
        return null;
    }
  };

  return (
    <>
      <CountryFilter
        selectedCountry={selectedCountry}
        onChange={setSelectedCountry}
        lang={lang}
      />

      {/* Lista de programas filtrados */}
      <div className="mt-12 flex flex-col gap-8">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program, i) => {
            const badge = getCountryBadge(program.country);
            return (
              <div
                key={program.id}
                className="flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-soft bg-white/10 backdrop-blur-sm relative"
              >
                {/* Badge del país */}
                {badge && (
                  <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                    <img
                      src={`https://flagcdn.com/w40/${badge.flagCode}.png`}
                      alt={badge.label}
                      className="w-4 h-auto rounded-[2px]"
                    />
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {badge.label}
                    </span>
                  </div>
                )}

                {/* Foto con alto fijo igual en todas las cards */}
                <div className="relative shrink-0 w-full h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/10">
                  <Image
                    src={program.img}
                    alt={program.imgAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 320px, 384px"
                  />
                </div>

                {/* Texto */}
                <div className="flex flex-col justify-center px-8 py-8 text-center sm:text-left">
                  <span className="text-xs font-bold tracking-widest uppercase text-amPink mb-1">
                    {lang === "es" ? `Programa` : `Program`}
                  </span>

                  <h2 className="flex items-center justify-center sm:justify-start gap-3 text-2xl md:text-3xl font-bold text-white">
                    {badge && (
                      <img
                        src={`https://flagcdn.com/w40/${badge.flagCode}.png`}
                        alt={badge.label}
                        className="w-8 h-auto shadow-sm rounded-sm"
                      />
                    )}
                    {program.title}
                  </h2>

                  <p className="mt-4 text-white/90 text-sm md:text-base leading-relaxed max-w-2xl">
                    {program.desc}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-white/70">
            {lang === "es"
              ? "No hay programas disponibles para esta región."
              : "No programs available for this region."}
          </div>
        )}
      </div>
    </>
  );
}
