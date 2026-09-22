"use client";

import React, { useState, useEffect, TouchEvent } from "react";

interface CarouselItem {
  label: string;
  text: string;
}

interface MissionVisionCarouselProps {
  items: CarouselItem[];
}

export default function MissionVisionCarousel({ items }: MissionVisionCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Distancia mínima (en píxeles) para registrar el swipe
  const minSwipeDistance = 50;

  // Auto-play cada 10 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length, currentIndex]); // resetea el timer cuando cambia el índice manualmente

  // Handlers para Swipe
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    }
  };

  return (
    <div
      className="relative flex items-center justify-center bg-amBlue px-6 py-10 overflow-hidden min-h-[300px]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      <div className="w-full relative">
        {/* Contenedor del track animado */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="w-full shrink-0 px-2 sm:px-4 flex flex-col">
              {/* Etiqueta / Pill */}
              <div className="mb-5">
                <span className="inline-block bg-white/30 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  {item.label}
                </span>
              </div>

              {/* Texto principal */}
              <p className="text-white text-base md:text-lg leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Contenedor de indicadores inferiores (líneas) */}
        <div className="mt-8 flex items-center gap-3 px-2 sm:px-4">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-amPink" : "w-4 bg-white/40 hover:bg-white/60"
                }`}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
