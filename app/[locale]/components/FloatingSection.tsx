
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

// ───────────── IMAGE IMPORTS ─────────────

import streakImage from "../../../public/resources/streak.webp";
import heartImage from "../../../public/resources/heart.webp";
import diamondImage from "../../../public/resources/diamond.webp";
import logoImage from "../../../public/logo.webp";

// ───────────── TYPES ─────────────

type FloatingSectionProps = {
  startHref?: string;
};

// ───────────── FLOATING ICONS ─────────────

const floatingIcons = [
  {
    id: 1,
    image: streakImage,
    position:
      "left-[3%] top-[15px] sm:left-[15%] sm:top-[35px]",
    size:
      "h-[65px] w-[65px] sm:h-[105px] sm:w-[105px]",
    rotation: -12,
    sway: 7,
    lift: 16,
    duration: 5,
    delay: -1,
  },
  {
    id: 2,
    image: diamondImage,
    position:
      "right-[3%] top-[20px] sm:right-[15%] sm:top-[45px]",
    size:
      "h-[62px] w-[62px] sm:h-[95px] sm:w-[95px]",
    rotation: 13,
    sway: -8,
    lift: 20,
    duration: 6,
    delay: -2,
  },
  {
    id: 3,
    image: heartImage,
    position:
      "left-[4%] top-[165px] sm:left-[16%] sm:top-[230px]",
    size:
      "h-[50px] w-[50px] sm:h-[77px] sm:w-[77px]",
    rotation: -16,
    sway: 8,
    lift: 12,
    duration: 4.5,
    delay: -3,
  },
  {
    id: 4,
    image: streakImage,
    position:
      "right-[4%] top-[175px] sm:right-[17%] sm:top-[240px]",
    size:
      "h-[44px] w-[44px] sm:h-[70px] sm:w-[70px]",
    rotation: 15,
    sway: -7,
    lift: 14,
    duration: 5.5,
    delay: -2.5,
  },
  {
    id: 5,
    image: diamondImage,
    position:
      "left-[4%] bottom-[48px] sm:left-[22%] sm:bottom-[60px]",
    size:
      "h-[45px] w-[45px] sm:h-[65px] sm:w-[65px]",
    rotation: -9,
    sway: 6,
    lift: 18,
    duration: 6.5,
    delay: -4,
  },
  {
    id: 6,
    image: heartImage,
    position:
      "right-[3%] bottom-[50px] sm:right-[22%] sm:bottom-[70px]",
    size:
      "h-[53px] w-[53px] sm:h-[85px] sm:w-[85px]",
    rotation: 12,
    sway: -6,
    lift: 15,
    duration: 5.8,
    delay: -1.5,
  },
  {
    id: 7,
    image: diamondImage,
    position:
      "hidden lg:block lg:left-[27%] lg:top-[70px]",
    size: "h-[52px] w-[52px]",
    rotation: 20,
    sway: -10,
    lift: 13,
    duration: 4.8,
    delay: -3.5,
  },
  {
    id: 8,
    image: heartImage,
    position:
      "hidden lg:block lg:right-[28%] lg:top-[65px]",
    size: "h-[46px] w-[46px]",
    rotation: -17,
    sway: 9,
    lift: 17,
    duration: 5.3,
    delay: -2.8,
  },
];

// ───────────── COMPONENT ─────────────

export default function FloatingSection({
  startHref = "/",
}: FloatingSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate w-full overflow-hidden bg-white">

      {/* ───────────── CONTENT ───────────── */}

      <div className="relative z-20 mx-auto flex w-full max-w-[1120px] flex-col items-center px-5 pt-20 text-center sm:px-8 sm:pt-24 xl:pt-28">

        <h2 className="max-w-[750px] text-[36px] font-black leading-[1.1] tracking-[-0.045em] text-[#0B3D2E] sm:text-[52px] lg:text-[64px]">
          Discover new languages

          <span className="mt-1 block text-[#158F66] underline decoration-[#D9F36B] decoration-[6px] underline-offset-[9px] sm:decoration-[9px] sm:underline-offset-[12px]">
            with ZABU.
          </span>
        </h2>

        {/* MAIN CTA BUTTON */}

        <Link
          href={startHref}
          className="group mt-10 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-[#D9F36B] px-9 text-[13px] font-black uppercase tracking-[0.04em] text-[#0B3D2E] shadow-[0_5px_0_#158F66] transition-all duration-200 hover:bg-[#CEE766] hover:shadow-[0_3px_0_#0F7352] active:translate-y-[3px] active:shadow-none"
        >
          GET STARTED

          <ArrowRight
            size={18}
            strokeWidth={2.5}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>

      </div>

      {/* ───────────── ILLUSTRATION ───────────── */}

      <div className="relative isolate mt-10 h-[430px] w-full sm:mt-12 sm:h-[520px] lg:h-[570px]">

        {/* ───────────── GREEN WAVE ───────────── */}

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 z-0 h-[360px] w-full sm:h-[440px] lg:h-[500px]"
        >
          {/* MAIN GREEN SHAPE */}

          <path
            d="
              M0 110
              C200 110 300 105 370 145
              C510 230 540 315 720 325
              C900 315 930 230 1070 145
              C1140 105 1240 110 1440 110
              L1440 500
              L0 500
              Z
            "
            fill="#158F66"
          />

          {/* LIME LINE ALONG WAVE */}

          <path
            d="
              M0 110
              C200 110 300 105 370 145
              C510 230 540 315 720 325
              C900 315 930 230 1070 145
              C1140 105 1240 110 1440 110
            "
            fill="none"
            stroke="#D9F36B"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>

        {/* ───────────── FLOATING ICONS ───────────── */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 mx-auto w-full max-w-[1440px]"
        >
          {floatingIcons.map((item) => (
            <motion.div
              key={item.id}
              className={`absolute ${item.position} ${item.size}`}
              initial={false}
              animate={
                reduceMotion
                  ? {
                      y: 0,
                      rotate: item.rotation,
                    }
                  : {
                      y: [0, -item.lift, 0],
                      rotate: [
                        item.rotation,
                        item.rotation + item.sway,
                        item.rotation,
                      ],
                    }
              }
              transition={
                reduceMotion
                  ? {
                      duration: 0,
                    }
                  : {
                      duration: item.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    }
              }
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 640px) 110px, 75px"
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* ───────────── PHONE ───────────── */}

        <div className="absolute bottom-[25px] left-1/2 z-20 -translate-x-1/2 rotate-[-5deg] sm:bottom-[35px]">

          {/* PHONE BODY */}

          <div className="w-[170px] rounded-[32px] border-[7px] border-[#0B3D2E] bg-white p-3 shadow-[12px_14px_0_rgba(11,61,46,0.18)] sm:w-[220px] sm:rounded-[40px] sm:p-4 lg:w-[240px]">

            {/* SPEAKER */}

            <div className="mx-auto mb-4 h-[5px] w-[48px] rounded-full bg-[#0B3D2E]" />

            {/* HEADER */}

            <div className="flex items-center justify-between">
              <span className="text-[13px] font-black tracking-[-0.03em] text-[#158F66]">
                ZABU
              </span>

              <span className="rounded-full bg-[#D9F36B] px-2 py-1 text-[10px] font-black text-[#0B3D2E]">
                4 / 10
              </span>
            </div>

            {/* PROGRESS */}

            <div className="mt-3 h-[8px] overflow-hidden rounded-full bg-[#E3EBE5]">
              <div className="h-full w-[40%] rounded-full bg-[#158F66]" />
            </div>

            {/* MASCOT */}

            <div className="relative mt-4 aspect-square overflow-hidden rounded-[22px] border-2 border-[#D9F36B] bg-[#EAF6F0]">
              <Image
                src={logoImage}
                alt="ZABU mascot"
                fill
                sizes="(min-width: 1024px) 190px, (min-width: 640px) 170px, 130px"
                className="object-contain p-3"
              />
            </div>

            {/* LESSON */}

            <div className="mt-4 text-center">
              <p className="text-[18px] font-black text-[#0B3D2E]">
                Салом!
              </p>

              <p className="mt-1 text-[11px] font-medium text-[#64746B]">
                Hello!
              </p>
            </div>

            {/* CONTINUE */}

            <div className="mt-4 flex h-[39px] items-center justify-center rounded-xl bg-[#158F66] text-[11px] font-black uppercase text-white shadow-[0_3px_0_#0B3D2E] sm:h-[43px]">
              Continue
            </div>

            <div className="h-2" />

          </div>
        </div>

      </div>
    </section>
  );
}
