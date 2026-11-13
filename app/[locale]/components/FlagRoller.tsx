
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ROLLER_FLAGS } from "./Flags";

const REPEAT = 6;
const DURATION = 45;

const flags = Array.from(
  { length: REPEAT },
  () => ROLLER_FLAGS
).flat();

function FlagGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {flags.map(({ id, name, Flag }, index) => (
        <li
          key={`${id}-${index}`}
          title={hidden ? undefined : name}
          className="flex shrink-0 items-center justify-center"
        >
          <Flag
            className="h-10 w-[60px] rounded-md object-cover"
          />
        </li>
      ))}
    </ul>
  );
}

export default function FlagRoller() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      dir="ltr"
      className="group relative w-full min-w-0 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
    >
      <motion.div
        className="flex w-max transform-gpu"
        animate={reduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? undefined
            : {
                x: {
                  duration: DURATION,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0,
                },
              }
        }
      >
        <FlagGroup />
        <FlagGroup hidden />
      </motion.div>
    </div>
  );
}
