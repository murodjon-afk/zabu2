
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import ru from "@/messages/ru.json";
import en from "@/messages/en.json";
import tj from "@/messages/tj.json";
import uz from "@/messages/uz.json";
import fa from "@/messages/fa.json";
import it from "@/messages/it.json";
import he from "@/messages/he.json";
import FloatingSection from "./components/FloatingSection";
import SiteLanguageDropdown from "./components/SiteLanguageDropdown";
import FlagRoller from "./components/FlagRoller";
import Footer from "./components/Footer";
export const instant = false;

/* ───────────── TRANSLATIONS ───────────── */

const translations = { ru, en, tj, uz, fa, it, he };

const languages = [
  { code: "en", label: "ENGLISH", nativeName: "English" },
  { code: "ru", label: "РУССКИЙ", nativeName: "Русский" },
  { code: "tj", label: "ТОҶИКӢ", nativeName: "Тоҷикӣ" },
  { code: "uz", label: "O‘ZBEKCHA", nativeName: "O‘zbekcha" },
  { code: "fa", label: "فارسی", nativeName: "فارسی", dir: "rtl" },
  { code: "it", label: "ITALIANO", nativeName: "Italiano" },
  { code: "he", label: "עברית", nativeName: "עברית", dir: "rtl" },
];

/* ───────────── LAYOUT ───────────── */

const container =
  "mx-auto w-full max-w-6xl px-6 lg:px-10";

const featureGrid =
  "grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16";

const featureTitle =
  "max-w-[500px] text-[34px] font-black leading-[1.15] tracking-[-0.035em] text-[#0B3D2E] sm:text-[42px] lg:text-[48px]";

const featureDescription =
  "mt-7 max-w-[470px] text-[16px] leading-8 text-[#1B8868]";

/* ───────────── UNIFORM MASCOT SIZE ───────────── */

// Все иллюстрации имеют одинаковую область 480 × 480px.
// На маленьких экранах размер адаптируется автоматически.

const mascotWrapper =
  "flex min-w-0 w-full items-center justify-center";

const mascotImage =
  "block aspect-square h-auto w-full max-w-[480px] object-contain";

/* ───────────── PAGE ───────────── */

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!Object.hasOwn(translations, locale)) {
    notFound();
  }

  const isRTL = locale === "fa" || locale === "he";

  const currentLang =
    languages.find((lang) => lang.code === locale) ??
    languages[0];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen overflow-x-clip bg-white text-[#0B3D2E]"
    >
      {/* ───────────── HEADER ───────────── */}

      <header className="flex h-[70px] items-center bg-[#158F66]">
        <div
          className={`${container} flex items-center justify-between max-[1079px]:justify-center`}
        >
          <Link
            href={`/${locale}`}
            className="transition-opacity hover:opacity-90"
          >
            <Image
              src="/logo2.webp"
              alt="ZABU"
              width={180}
              height={180}
              priority
              className="h-[52px] w-auto object-contain"
            />
          </Link>

          <div className="hidden min-[1080px]:block">
            <SiteLanguageDropdown
              languages={languages}
              currentLocale={locale}
              currentLang={currentLang}
            />
          </div>
        </div>
      </header>

      <main>
        {/* ───────────── HERO SECTION ───────────── */}

        <section className="flex min-h-[calc(100svh-70px)] flex-col">
          <div
            className={`${container} grid flex-1 grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-16`}
          >
            {/* HERO MASCOT */}

            <div className={mascotWrapper}>
              <Image
                src="/mascot2.webp"
                alt="ZABU mascot"
                width={580}
                height={580}
                priority
                className={mascotImage}
              />
            </div>

            {/* HERO CONTENT */}

            <div className="flex min-w-0 flex-col items-center text-center">
              <h1 className="max-w-[440px] text-[30px] font-black leading-[1.2] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]">
                Learn a language.

                <span className="block text-[#1B8868]">
                  Discover a world.
                </span>
              </h1>

              <div className="mt-9 flex w-full max-w-[340px] flex-col gap-4">
                <button
                  type="button"
                  className="
                    flex h-[56px] w-full cursor-pointer
                    items-center justify-center
                    rounded-2xl
                    bg-[#D9F36B]
                    px-4
                    text-sm font-black tracking-[0.05em]
                    text-[#0B3D2E]
                    shadow-[0_5px_0_#1B8868]
                    transition-all duration-150
                    hover:brightness-95
                    active:translate-y-[5px]
                    active:shadow-none
                  "
                >
                  GET STARTED
                </button>

                <button
                  type="button"
                  className="
                    flex h-[56px] w-full cursor-pointer
                    items-center justify-center
                    rounded-2xl
                    border-2 border-[#E3EBE5]
                    bg-white
                    px-4
                    text-sm font-black tracking-[0.04em]
                    text-[#1B8868]
                    shadow-[0_5px_0_#E3EBE5]
                    transition-all duration-150
                    hover:border-[#1B8868]
                    active:translate-y-[5px]
                    active:shadow-none
                  "
                >
                  I ALREADY HAVE AN ACCOUNT
                </button>
              </div>
            </div>
          </div>

          {/* ───────────── FLAG ROLLER ───────────── */}

          <div className="w-full border-y border-[#E3EBE5]">
            <div className={`${container} py-4`}>
              <FlagRoller />
            </div>
          </div>
        </section>

      
{/* ───────────── FEATURES ───────────── */}


{/* ───────────── FEATURES ───────────── */}


{/* ───────────── FEATURES ───────────── */}

<section className="w-full bg-white py-16 sm:py-20 xl:py-28">
  <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-y-20 px-5 sm:gap-y-24 sm:px-8 xl:gap-y-32 xl:px-10">

    {/* ───────────── FEATURE 1 ───────────── */}

    <div className="grid grid-cols-1 items-center gap-y-8 xl:grid-cols-2 xl:gap-x-16">

      {/* TEXT — LEFT */}

      <div className="order-1 flex min-w-0 flex-col items-center justify-center text-center xl:items-start xl:text-left">
        <h2 className="max-w-[480px] text-[30px] leading-[1.15] font-black tracking-[-0.035em] text-[#158F66] sm:text-[36px] xl:text-[42px]">
          Absolutely free. AI-powered. Have fun.
        </h2>

        <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] font-medium text-[#777777] sm:text-[16px]">
          Learn languages with short, enjoyable lessons
          that keep you moving forward. Build confidence,
          improve every day, and discover how far ZABU
          can take you.
        </p>
      </div>

      {/* IMAGE — RIGHT */}

      <div className="order-2 flex w-full items-center justify-center">
        <Image
          src="/mascot1.webp"
          alt="ZABU learning illustration"
          width={580}
          height={580}
          sizes="(min-width: 1280px) 500px, (min-width: 640px) 460px, 100vw"
          className="h-auto w-full max-w-[420px] object-contain sm:max-w-[460px] xl:max-w-[500px]"
        />
      </div>
    </div>

    {/* ───────────── FEATURE 2 ───────────── */}

    <div className="grid grid-cols-1 items-center gap-y-8 xl:grid-cols-2 xl:gap-x-16">

      {/* TEXT — RIGHT */}

      <div className="order-1 flex min-w-0 flex-col items-center justify-center text-center xl:order-2 xl:items-start xl:text-left">
        <h2 className="max-w-[480px] text-[30px] leading-[1.15] font-black tracking-[-0.035em] text-[#158F66] sm:text-[36px] xl:text-[42px]">
          AI-Powered Testing Methods
        </h2>

        <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] font-medium text-[#777777] sm:text-[16px]">
          Test your language skills with smart,
          AI-powered exercises. Get instant feedback,
          identify your weaknesses, and improve
          your reading, writing, listening, and
          speaking skills at your own pace.
        </p>
      </div>

      {/* IMAGE — LEFT */}

      <div className="order-2 flex w-full items-center justify-center xl:order-1">
        <Image
          src="/mascot3.webp"
          alt="ZABU AI-powered testing illustration"
          width={580}
          height={580}
          sizes="(min-width: 1280px) 500px, (min-width: 640px) 460px, 100vw"
          className="h-auto w-full max-w-[420px] object-contain sm:max-w-[460px] xl:max-w-[500px]"
        />
      </div>
    </div>

    {/* ───────────── FEATURE 3 — STREAK ───────────── */}

    <div className="grid grid-cols-1 items-center gap-y-8 xl:grid-cols-2 xl:gap-x-16">

      {/* TEXT — LEFT */}

      <div className="order-1 flex min-w-0 flex-col items-center justify-center text-center xl:items-start xl:text-left">
        <h2 className="max-w-[480px] text-[30px] leading-[1.15] font-black tracking-[-0.035em] text-[#158F66] sm:text-[36px] xl:text-[42px]">
          Maintain Motivation
        </h2>

        <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] font-medium text-[#777777] sm:text-[16px]">
          Difficult roads lead to beautiful destinations.
          Stay motivated, build your daily streak,
          and celebrate every milestone.
          With ZABU, every day of learning
          brings you one step closer to your goals.
        </p>
      </div>

      {/* IMAGE — RIGHT */}

      <div className="order-2 flex w-full items-center justify-center">
        <Image
          src="/mascot4.webp"
          alt="ZABU daily streak and motivation illustration"
          width={580}
          height={580}
          sizes="(min-width: 1280px) 500px, (min-width: 640px) 460px, 100vw"
          className="h-auto w-full max-w-[420px] object-contain sm:max-w-[460px] xl:max-w-[500px]"
        />
      </div>
    </div>

    {/* ───────────── FEATURE 4 — PERSONALIZED LEARNING ───────────── */}

    <div className="grid grid-cols-1 items-center gap-y-8 xl:grid-cols-2 xl:gap-x-16">

      {/* TEXT — RIGHT */}

      <div className="order-1 flex min-w-0 flex-col items-center justify-center text-center xl:order-2 xl:items-start xl:text-left">
        <h2 className="max-w-[480px] text-[30px] leading-[1.15] font-black tracking-[-0.035em] text-[#158F66] sm:text-[36px] xl:text-[42px]">
          Learning Made for You
        </h2>

        <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] font-medium text-[#777777] sm:text-[16px]">
          Powered by smart AI and proven learning
          techniques, ZABU adapts to your skills,
          progress, and goals, making every lesson
          feel easier, more engaging, and perfectly
          paced for you.
        </p>
      </div>

      {/* IMAGE — LEFT */}

      <div className="order-2 flex w-full items-center justify-center xl:order-1">
        <Image
          src="/mascot5.webp"
          alt="ZABU personalized AI learning illustration"
          width={580}
          height={580}
          sizes="(min-width: 1280px) 500px, (min-width: 640px) 460px, 100vw"
          className="h-auto w-full max-w-[420px] object-contain sm:max-w-[460px] xl:max-w-[500px]"
        />
      </div>
    </div>

  </div>
</section>



        {/* ───────────── ZABU BOOST ───────────── */}

        <section className="relative flex min-h-[540px] w-full items-center overflow-hidden bg-[#023F31] px-5 py-16 sm:px-8 lg:py-20">
          <div
            className="
              mx-auto grid w-full max-w-6xl
              grid-cols-1 items-center
              gap-10
              md:grid-cols-2 md:gap-16
            "
          >
            {/* BOOST MASCOT */}

            <div className={mascotWrapper}>
              <Image
                src="/power-mascot.webp"
                alt="ZABU Boost mascot"
                width={580}
                height={580}
                className={mascotImage}
              />
            </div>

            {/* BOOST CONTENT */}

            <div className="flex min-w-0 flex-col items-center justify-center text-center">
              <p
                className="
                  text-[22px]
                  font-black
                  uppercase italic
                  leading-tight
                  tracking-[-0.04em]
                  text-white
                  sm:text-[28px]
                "
              >
                BOOST YOUR SKILLS WITH
              </p>

              <h2
                className="
                  mt-1
                  bg-linear-to-r
                  from-[#D9F36B]
                  via-[#158F66]
                  to-[#0B3D2E]
                  bg-clip-text
                  text-[clamp(48px,6vw,86px)]
                  font-black
                  uppercase
                  italic
                  leading-[0.9]
                  tracking-[-0.11em]
                  text-transparent
                "
                style={{
                  fontWeight: 1000,
                  WebkitTextStroke: "2px transparent",
                  paintOrder: "stroke fill",
                  filter:
                    "drop-shadow(1px 0 0 #D9F36B)",
                }}
              >
                ZABU BOOST
              </h2>

              <Link
                href="#"
                className="
                  mt-8 inline-flex min-h-[54px]
                  items-center justify-center
                  rounded-2xl
                  bg-[#D9F36B]
                  px-6
                  text-sm font-black
                  tracking-[0.05em]
                  text-[#0B3D2E]
                  shadow-[0_6px_0_#1B8868,0_12px_20px_rgba(0,0,0,0.2)]
                  transition-all duration-150
                  hover:-translate-y-[2px]
                  hover:shadow-[0_8px_0_#1B8868,0_16px_24px_rgba(0,0,0,0.25)]
                  active:translate-y-[6px]
                  active:shadow-none
                "
              >
                1 НЕДЕЛЯ БЕСПЛАТНО
              </Link>
            </div>
          </div>
        </section>
      </main>


      <FloatingSection startHref="/"></FloatingSection>

      {/* ───────────── FOOTER ───────────── */}
<Footer locale={locale} />
    </div>
  );
}
