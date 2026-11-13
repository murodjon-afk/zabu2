
import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = [
  "ru",
  "en",
  "tj",
  "uz",
  "fa",
  "it",
  "he",
] as const;

type Locale = (typeof SUPPORTED_LOCALES)[number];

const DEFAULT_LOCALE: Locale = "ru";
const ROOT_DOMAIN = "zabu.study";

function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

// Определение языка из HTTP Accept-Language.
function getLocaleFromHeader(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;

  const languages = header
    .split(",")
    .map((item, index) => {
      const [language, ...params] = item.trim().split(";");

      const qParam = params.find((param) =>
        param.trim().startsWith("q=")
      );

      const quality = qParam
        ? Number(qParam.trim().slice(2))
        : 1;

      return {
        language: language.toLowerCase().split("-")[0],
        quality,
        index,
      };
    })
    .filter(
      (item) =>
        item.quality > 0 &&
        item.quality <= 1
    )
    .sort(
      (a, b) =>
        b.quality - a.quality || a.index - b.index
    );

  for (const item of languages) {
    if (isLocale(item.language)) {
      return item.language;
    }
  }

  return DEFAULT_LOCALE;
}

// Определение языка по поддомену.
function getLocaleFromHost(host: string): Locale | null {
  const hostname = host.split(":")[0].toLowerCase();

  if (
    hostname === ROOT_DOMAIN ||
    hostname === `www.${ROOT_DOMAIN}` ||
    hostname === "localhost"
  ) {
    return null;
  }

  if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    const subdomain = hostname.slice(
      0,
      -(ROOT_DOMAIN.length + 1)
    );

    if (isLocale(subdomain)) {
      return subdomain;
    }
  }

  return null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const host = request.headers.get("host") ?? "localhost";

  const hostLocale = getLocaleFromHost(host);

  const firstSegment = pathname.split("/")[1];

  // Язык уже указан в URL.
  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  // Главную страницу определяет браузер через navigator.languages.
  // Не перенаправляем её по HTTP Accept-Language.
if (pathname === "/" && !hostLocale) {
  return NextResponse.next();
}
  // Приоритет: языковой поддомен → HTTP-язык → русский.
  const locale =
    hostLocale ??
    getLocaleFromHeader(
      request.headers.get("accept-language")
    );

  const url = request.nextUrl.clone();

  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
