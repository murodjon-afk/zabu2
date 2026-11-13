
import Link from "next/link";

type FooterProps = {
  locale: string;
};

type FooterItem = {
  label: string;
  href?: string;
};

const languages = [
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
  { code: "tj", name: "Тоҷикӣ" },
  { code: "uz", name: "O‘zbekcha" },
  { code: "fa", name: "فارسی" },
  { code: "it", name: "Italiano" },
  { code: "he", name: "עברית" },
];

export default function Footer({ locale }: FooterProps) {
  const home = `/${locale}`;

  const sections: {
    title: string;
    links: FooterItem[];
  }[] = [
    {
      title: "About us",
      links: [
        { label: "Home", href: home },
        { label: "Our mission" },
        { label: "Our approach", href: `${home}#features` },
        { label: "About ZABU" },
        { label: "Contact us" },
      ],
    },
    {
      title: "Languages",
      links: [
        { label: "Tajik" },
        { label: "Persian" },
        { label: "English" },
        { label: "More languages soon" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "ZABU", href: home },
        { label: "AI-powered learning", href: `${home}#features` },
        { label: "Personalized lessons", href: `${home}#features` },
        { label: "Daily streak", href: `${home}#features` },
        { label: "Get started", href: "/" },
      ],
    },
    {
      title: "Help and support",
      links: [
        { label: "Getting started", href: "/" },
        { label: "Help center" },
        { label: "FAQs" },
        { label: "Report an issue" },
      ],
    },
    {
      title: "Privacy and terms",
      links: [
        { label: "Privacy policy" },
        { label: "Terms of use" },
        { label: "Community guidelines" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#158F66] text-white">
      {/* ───────────── MAIN FOOTER ───────────── */}

      <div className="mx-auto w-full max-w-[1120px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 xl:px-10 xl:pt-24">
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-x-7 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8"
        >
          {sections.map((section) => (
            <div key={section.title} className="min-w-0">
              <h3 className="mb-5 text-[15px] font-black leading-snug tracking-[-0.02em] text-white">
                {section.title}
              </h3>

              <ul className="flex flex-col gap-3.5">
                {section.links.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="inline-block text-[13px] font-bold leading-relaxed text-white/70 transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9F36B]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[13px] font-bold leading-relaxed text-white/70">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* ───────────── DIVIDER ───────────── */}

      <div className="h-px w-full bg-white/25" />

      {/* ───────────── LANGUAGES ───────────── */}

      <div className="mx-auto w-full max-w-[1120px] px-5 py-9 sm:px-8 sm:py-11 xl:px-10">
        <h3 className="mb-5 text-[14px] font-black text-white">
          Site language:
        </h3>

        <nav
          aria-label="Choose site language"
          className="flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          {languages.map((language) => {
            const isActive = locale === language.code;

            return (
              <Link
                key={language.code}
                href={`/${language.code}`}
                hrefLang={language.code}
                lang={language.code}
                aria-current={isActive ? "page" : undefined}
                className={`text-[13px] font-bold transition-colors duration-200 hover:text-white ${
                  isActive
                    ? "text-[#D9F36B]"
                    : "text-white/65"
                }`}
              >
                {language.name}
              </Link>
            );
          })}
        </nav>

        {/* ───────────── COPYRIGHT ───────────── */}

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] font-semibold text-white/60">
            © 2026 ZABU. All rights reserved.
          </p>

          <p className="text-[12px] font-bold tracking-[-0.01em] text-[#D9F36B]">
            Learn beyond borders.
          </p>
        </div>
      </div>
    </footer>
  );
}
