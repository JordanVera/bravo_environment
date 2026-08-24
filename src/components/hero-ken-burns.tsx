'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SLIDES = [
  {
    src: '/hero/water-extraction.jpg',
    alt: 'Technicians extracting standing water from a flooded living room',
  },
  {
    src: '/hero/water-drying.jpg',
    alt: 'Air movers and dehumidifiers drying a water-damaged hallway',
  },
  {
    src: '/hero/mold-containment.jpg',
    alt: 'Technicians in protective suits remediating mold behind containment',
  },
  {
    src: '/hero/mold-removal.jpg',
    alt: 'Mold removal from an exposed interior wall cavity',
  },
] as const;

const KEN_BURNS = [
  { scale: 1.08, endScale: 1.2, x: '0%', endX: '-3%', y: '0%', endY: '0%' },
  { scale: 1.16, endScale: 1.06, x: '2%', endX: '-2%', y: '1%', endY: '-1%' },
  { scale: 1.06, endScale: 1.18, x: '0%', endX: '2%', y: '2%', endY: '-2%' },
  { scale: 1.18, endScale: 1.08, x: '-2%', endX: '3%', y: '0%', endY: '1%' },
] as const;

const SLIDE_MS = 8500;
const FADE_S = 1.4;

export function HeroKenBurns() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  const slide = SLIDES[reduce ? 0 : index];
  const kenBurns = KEN_BURNS[reduce ? 0 : index];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {SLIDES.slice(1).map((preload) => (
        <Image
          key={preload.src}
          src={preload.src}
          alt=""
          width={16}
          height={10}
          className="hidden"
        />
      ))}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: reduce ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : FADE_S, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-[-12%]"
            initial={
              reduce
                ? { scale: 1, x: 0, y: 0 }
                : { scale: kenBurns.scale, x: kenBurns.x, y: kenBurns.y }
            }
            animate={
              reduce
                ? { scale: 1, x: 0, y: 0 }
                : { scale: kenBurns.endScale, x: kenBurns.endX, y: kenBurns.endY }
            }
            transition={{
              duration: reduce ? 0 : SLIDE_MS / 1000,
              ease: 'linear',
            }}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={slide.src === SLIDES[0].src}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/72 to-black/40" />
      <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-background/85" />
    </div>
  );
}
