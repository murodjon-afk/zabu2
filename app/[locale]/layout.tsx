import { notFound } from "next/navigation";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["800"],
});

const locales = ["ru", "en", "tj", "uz", "fa", "it", "he"];

export const instant = false;

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const direction = ["fa", "he"].includes(locale) ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={direction} className={nunito.className}>
      {children}
    </div>
  );
}