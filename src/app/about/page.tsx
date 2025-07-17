import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MembersGrid from "@/components/sections/MembersGrid";
import CompanyFacts from "@/components/sections/CompanyFacts";

export const metadata = {
  title: "About - Agency",
  description:
    "株式会社Agencyのメンバーと企業情報をご紹介します。私たちは誠実で親しみやすいデジタルソリューションを提供しています。",
  keywords: ["Agency", "メンバー", "企業情報", "会社概要", "チーム"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-agency-blue/5 to-agency-orange/5">
        <div className="max-w-content mx-auto px-xxl text-center">
          <h1 className="text-4xl md:text-6xl font-rounded font-bold text-agency-blue mb-6">
            About Agency
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            私たちは誠実で親しみやすいデジタルソリューションを提供する企業です。
            優秀なメンバーとプロフェッショナルなサービスで、お客様の成功をサポートします。
          </p>
        </div>
      </section>

      <MembersGrid />
      <CompanyFacts />

      <Footer />
    </main>
  );
}
