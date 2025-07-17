import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agency - 誠実で親しみやすいデジタルソリューション",
  description:
    "株式会社Agencyのコーポレートサイト。信頼性と親しみやすさを両立したデジタルソリューションを提供します。",
  keywords: ["Agency", "デジタル", "企業", "ソリューション"],
  openGraph: {
    title: "Agency - 誠実で親しみやすいデジタルソリューション",
    description:
      "株式会社Agencyのコーポレートサイト。信頼性と親しみやすさを両立したデジタルソリューションを提供します。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-primary text-neutral-900 bg-white">{children}</body>
    </html>
  );
}
