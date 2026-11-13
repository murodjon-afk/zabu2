
"use client";

import { useEffect } from "react";

const SUPPORTED_LOCALES = [
  "ru",
  "en",
  "tj",
  "uz",
  "fa",
  "it",
  "he",
] as const;

export default function LanguageRedirect() {
  useEffect(() => {
    const languages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];

    const locale =
      languages
        .map((language) =>
          language.toLowerCase().split("-")[0]
        )
        .find((language) =>
          SUPPORTED_LOCALES.includes(
            language as (typeof SUPPORTED_LOCALES)[number]
          )
        ) ?? "ru";

    window.location.replace(`/${locale}`);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F6F9F7]">
      <p className="text-sm text-[#0B3D2E]">
        Определяем язык...
      </p>
    </main>
  );
}
