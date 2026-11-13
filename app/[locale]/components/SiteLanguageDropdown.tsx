
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";

interface Lang {
  code: string;
  label: string;
  nativeName: string;
  dir?: string;
}

interface Props {
  languages: Lang[];
  currentLocale: string;
  currentLang: Lang;
}

export default function SiteLanguageDropdown({
  languages,
  currentLocale,
  currentLang,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (code: string) => {
    setIsOpen(false);

    if (code === currentLocale) return;

    const newPathname = pathname.replace(
      `/${currentLocale}`,
      `/${code}`
    );

    router.push(newPathname);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block select-none"
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="group inline-flex items-center gap-2 rounded-xl bg-transparent px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-white transition-colors duration-200 hover:text-[#D9F36B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9F36B]"
      >
        <span>SITE LANGUAGE: {currentLang.label}</span>

        <ChevronDown
          className={`h-4 w-4 stroke-[2.5] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-2xl border border-[#E5ECE9] bg-white p-1.5 shadow-xl">
          <div className="flex max-h-64 flex-col gap-1 overflow-y-auto">
            {languages.map((lang) => {
              const isSelected = currentLocale === lang.code;

              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-bold transition-colors duration-200 ${
                    isSelected
                      ? "bg-[#158F66]/10 text-[#158F66]"
                      : "text-[#0B3D2E] hover:bg-[#F4F7F6] hover:text-[#158F66]"
                  }`}
                >
                  <span>{lang.nativeName}</span>

                  {isSelected && (
                    <Check className="h-4 w-4 stroke-[3]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
