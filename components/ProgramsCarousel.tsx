"use client";

import { useRef } from "react";
import Image from "next/image";

type Program = {
  id: string;
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
};

export default function ProgramsCarousel({ items }: { items: Program[] }) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dx: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dx, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-6">
      {/* Flecha Izquierda */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => scroll(-320)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full z-10"
      >
        ◀
      </button>

      {/* Pista del carrusel */}
      <div
        ref={carouselRef}
        className="flex flex-nowrap gap-6 overflow-hidden scroll-smooth"
      >
        {items.map((p) => (
          <div key={p.id} className="shrink-0 w-72">
            <Image
              src={p.img}
              alt={p.imgAlt}
              width={400}
              height={300}
              className="w-full aspect-[1/1] object-cover rounded-xl"
            />
            <h3 className="mt-3 md:text-2xl font-semibold">{p.title}</h3>
            <p className="text-sm opacity-80">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Flecha Derecha */}
      <button
        type="button"
        aria-label="Siguiente"
        onClick={() => scroll(320)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full z-10"
      >
        ▶
      </button>
    </div>
  );
}
