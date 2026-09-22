"use client";

import React from "react";

export type Country = "ALL" | "SV" | "US" | "DO";

interface CountryFilterProps {
  selectedCountry: Country;
  onChange: (country: Country) => void;
  lang: string; // "es" | "en"
}

export default function CountryFilter({ selectedCountry, onChange, lang }: CountryFilterProps) {
  const options = [
    { id: "ALL", label: lang === "es" ? "Todos" : "All", flagCode: null },
    { id: "SV", label: "El Salvador", flagCode: "sv" },
    { id: "US", label: "United States", flagCode: "us" },
    { id: "DO", label: "República Dominicana", flagCode: "do" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      {options.map((opt) => {
        const isActive = selectedCountry === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id as Country)}
            className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 border 
              ${
                isActive
                  ? "bg-amPink text-white border-amPink shadow-md scale-105"
                  : "bg-white/10 text-white/70 border-white/20 hover:bg-white/20 hover:text-white"
              }
            `}
          >
            {opt.flagCode ? (
              <img
                src={`https://flagcdn.com/w40/${opt.flagCode}.png`}
                alt={opt.label}
                className="w-7 sm:w-8 h-auto rounded-sm object-cover shadow-sm"
              />
            ) : (
              <span className="text-2xl sm:text-3xl leading-none">🌎</span>
            )}
            <span className="font-semibold text-base sm:text-lg">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
