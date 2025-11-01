"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";

export type Story = {
    id: string;
    title: string;
    desc: string;
    img?: string; // si no viene, usamos /escuela13.jpg
};

export default function StoriesCarousel({
    items,
    intervalMs = 5000,
}: {
    items: Story[];
    intervalMs?: number;
}) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [paused, setPaused] = useState(false);

    // Normaliza datos (asegura al menos 2 elementos)
    const data = useMemo(() => {
        if (!items || items.length === 0) return [];
        if (items.length === 1) return [...items, items[0]];
        return items;
    }, [items]);

    // Avance automático de 2 en 2
    useEffect(() => {
        if (data.length === 0 || paused) return;
        const id = setInterval(() => {
            setDirection(1);
            setIndex((i) => (i + 2) % data.length);
        }, intervalMs);
        return () => clearInterval(id);
    }, [data.length, intervalMs, paused]);

    if (data.length === 0) return null;

    // Índices visibles
    const i1 = index % data.length;
    const i2 = (index + 1) % data.length;
    const visible = [data[i1], data[i2]];

    // Variants tipados correctamente (usamos easing como cubic-bezier)
    const variants: Variants = {
        enter: (dir: 1 | -1) => ({
            x: dir * 40,
            opacity: 0,
            filter: "blur(4px)",
        }),
        center: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1], // fast out, slow in
            },
        },
        exit: (dir: 1 | -1) => ({
            x: -dir * 40,
            opacity: 0,
            filter: "blur(4px)",
            transition: {
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1], // standard material-ish
            },
        }),
    };

    const goPrev = () => {
        setDirection(-1);
        setIndex((i) => (i - 2 + data.length) % data.length);
    };

    const goNext = () => {
        setDirection(1);
        setIndex((i) => (i + 2) % data.length);
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <AnimatePresence custom={direction} mode="wait">
                {/* La key hace que AnimatePresence anime cada "página" de 2 tarjetas */}
                <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                >
                    {/* grid de 2 tarjetas - más pequeñas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-items-center">
                        {visible.map((story) => (
                            <article
                                key={story.id}
                                className="group w-[90%] md:w-[80%] rounded-xl md:rounded-2xl overflow-hidden border bg-white/80 backdrop-blur-sm shadow-soft transition hover:shadow-lg"
                            >
                                <div className="w-full aspect-[3/2] relative">
                                    <Image
                                        src={story.img || "/escuela13.jpg"}
                                        alt={story.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width:768px) 100vw, 45vw"
                                        priority={false}
                                    />
                                </div>
                                <div className="p-3 md:p-4">
                                    <h3 className="font-semibold text-base md:text-lg">{story.title}</h3>
                                    <p className="text-xs md:text-sm opacity-80 mt-1">{story.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                </motion.div>
            </AnimatePresence>

            {/* Controles */}
            <div className="flex justify-end gap-2 mt-4">
                <button
                    type="button"
                    onClick={goPrev}
                    className="px-3 py-1 rounded-md border hover:bg-neutral-50 text-sm"
                    aria-label="Anterior"
                >
                    ◀
                </button>
                <button
                    type="button"
                    onClick={goNext}
                    className="px-3 py-1 rounded-md border hover:bg-neutral-50 text-sm"
                    aria-label="Siguiente"
                >
                    ▶
                </button>
            </div>
        </div>
    );
}
