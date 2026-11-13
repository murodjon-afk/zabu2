
import type { ReactElement, SVGProps } from "react";

type FlagProps = SVGProps<SVGSVGElement>;

function FlagBase({ children, ...props }: FlagProps) {
  return (
    <svg
      viewBox="0 0 60 40"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IranFlag(props: FlagProps) {
  return (
    <FlagBase aria-label="Iran" {...props}>
      <rect width="60" height="40" fill="#fff" />
      <rect width="60" height="13.33" fill="#239F40" />
      <rect y="26.67" width="60" height="13.33" fill="#DA0000" />

      <path
        d="M0 13.8H60M0 26.2H60"
        stroke="#239F40"
        strokeWidth=".45"
        strokeDasharray="2 1"
      />

      <g
        fill="none"
        stroke="#DA0000"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 15.3V24.7" />
        <path d="M27.2 16.6C24.5 19 25.4 22.3 28.4 23.5" />
        <path d="M32.8 16.6C35.5 19 34.6 22.3 31.6 23.5" />
        <path d="M28.4 17.5C27 19.5 28 21.5 30 22.5" />
        <path d="M31.6 17.5C33 19.5 32 21.5 30 22.5" />
        <path d="M27.5 24.5Q30 26 32.5 24.5" />
      </g>
    </FlagBase>
  );
}

export function UKFlag(props: FlagProps) {
  return (
    <FlagBase aria-label="United Kingdom" {...props}>
      <rect width="60" height="40" fill="#012169" />

      <path
        d="M0 0L60 40M60 0L0 40"
        stroke="#fff"
        strokeWidth="9"
      />

      <path
        d="M0 0L60 40M60 0L0 40"
        stroke="#C8102E"
        strokeWidth="3"
      />

      <path
        d="M30 0V40M0 20H60"
        stroke="#fff"
        strokeWidth="12"
      />

      <path
        d="M30 0V40M0 20H60"
        stroke="#C8102E"
        strokeWidth="6"
      />
    </FlagBase>
  );
}

export function TajikistanFlag(props: FlagProps) {
  const stars = [
    [24.5, 17.4],
    [26, 15],
    [28.5, 13.8],
    [31.5, 13.8],
    [34, 15],
    [35.5, 17.4],
    [30, 12.8],
  ];

  return (
    <FlagBase aria-label="Tajikistan" {...props}>
      <rect width="60" height="40" fill="#fff" />
      <rect width="60" height="11.43" fill="#CC0000" />
      <rect y="28.57" width="60" height="11.43" fill="#006600" />

      <g fill="#F8C300">
        <path d="M24 24.5L22.5 18.5L26.7 21L30 17.8L33.3 21L37.5 18.5L36 24.5Z" />

        <path d="M24.5 25.5H35.5V26.7H24.5Z" />

        <path d="M25.5 27.1H34.5V27.7H25.5Z" />

        {stars.map(([cx, cy], index) => (
          <path
            key={index}
            d="M0-1.25L.3-.38L1.2-.38L.48.15L.75 1L0 .5L-.75 1L-.48.15L-1.2-.38L-.3-.38Z"
            transform={`translate(${cx} ${cy})`}
          />
        ))}
      </g>
    </FlagBase>
  );
}

export interface FlagItem {
  id: string;
  name: string;
  Flag: (props: FlagProps) => ReactElement;
}

export const ROLLER_FLAGS: readonly FlagItem[] = [
  { id: "fa", name: "Persian", Flag: IranFlag },
  { id: "en", name: "English", Flag: UKFlag },
  { id: "tj", name: "Tajik", Flag: TajikistanFlag },
];
