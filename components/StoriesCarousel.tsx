// components/ProgramsCarousel.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";

export type ProgramItem = {
    id: string;
    title: string;
    desc: string;
    img: string; // url
    cta?: string;
};

export default function ProgramsCarousel({
    items,
    intervalMs = 5000,
}: {
    items: ProgramItem[];
    intervalMs?: number;
}) {
    // Normaliza para que siempre haya al menos 3
    const data = useMemo(() => {
        if (!items || items.length === 0) return [];
        const out: ProgramItem[] = [...items];
        while (out.length < 3) out.push(...items);
        return out.slice(0, Math.max(3, out.length));
    }, [items]);

    const len = data.length;
    const [active, setActive] = useState(0);
    const [dir, setDir] = useState<1 | -1>(1);
    const [paused, setPaused] = useState(false);

    // Autoplay
    useEffect(() => {
        if (len === 0 || paused) return;
        const id = setInterval(() => {
            setDir(1);
            setActive((i) => (i + 1) % len);
        }, intervalMs);
        return () => clearInterval(id);
    }, [len, intervalMs, paused]);

    if (len === 0) return null;

    // Índices visibles: prev, active, next
    const prev = (active - 1 + len) % len;
    const next = (active + 1) % len;
    const visible = [data[prev], data[active], data[next]];

    // Variants de animación
    const slide: Variants = {
        enter: (d: 1 | -1) => ({ x: d * 60, opacity: 0, filter: "blur(4px)" }),
        center: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        },
        exit: (d: 1 | -1) => ({
            x: -d * 60,
            opacity: 0,
            filter: "blur(4px)",
            transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
        }),
    };

    const goPrev = () => {
        setDir(-1);
        setActive((i) => (i - 1 + len) % len);
    };
    const goNext = () => {
        setDir(1);
        setActive((i) => (i + 1) % len);
    };

    // Teclado
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
    };

    return (
        <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Programs"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="relative mt-8 select-none outline-none"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Flecha izquierda */}
            <button
                aria-label="Previous"
                onClick={goPrev}
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white hover:scale-110 transition"
            >
                ◀
            </button>

            {/* Flecha derecha */}
            <button
                aria-label="Next"
                onClick={goNext}
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white hover:scale-110 transition"
            >
                ▶
            </button>

            {/* Carrusel */}
            <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                    key={active}
                    custom={dir}
                    variants={slide}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex justify-center gap-10 px-6 md:px-16"
                >
                    {visible.map((card, idx) => {
                        const isCenter = idx === 1;
                        return (
                            <article
                                key={card.id}
                                className={[
                                    idx !== 1 ? "hidden md:block" : "",
                                    "group rounded-xl overflow-hidden shadow-md bg-[#6EC1E4] text-gray-900 border border-black/10 transition-transform duration-300",
                                    isCenter ? "scale-110 shadow-xl z-10" : "scale-95", // 👈 sin opacity-90
                                    "hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-indigo-500",
                                    "w-[90%] md:w-[300px] lg:w-[340px]",
                                ].join(" ")}

                            >
                                {/* Imagen */}
                                <div className="relative w-full aspect-[3/2] overflow-hidden">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width:768px) 100vw, 33vw"
                                    />
                                </div>

                                {/* Contenido */}
                                <div className="p-4 flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="font-extrabold uppercase tracking-tight text-lg md:text-xl">
                                            {card.title}
                                        </h3>
                                        <p className="mt-2 text-sm md:text-base opacity-90 line-clamp-3">
                                            {card.desc}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button className="px-5 py-2 rounded-full bg-[#0f172a] text-white text-xs md:text-sm font-semibold hover:opacity-90">
                                            {card.cta || "Learn More"}
                                        </button>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
