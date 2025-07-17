import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

export const metadata = {
  title: "会社概要 - 会社名",
  description:
    "会社の詳細情報、ミッション、ビジョンについて詳しくご紹介します。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}
