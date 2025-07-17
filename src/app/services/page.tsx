import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export const metadata = {
  title: "サービス - 会社名",
  description:
    "私たちが提供するサービスの詳細をご覧ください。Webデベロップメント、コンサルティング、デザインなど。",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
