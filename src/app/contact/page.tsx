import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "お問い合わせ - 会社名",
  description:
    "プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
