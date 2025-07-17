import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-agency-red to-agency-orange">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-hero mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-rounded font-bold mb-6 leading-tight">
          誠実で親しみやすい
          <span className="block text-white/90">デジタルソリューション</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          株式会社Agencyは革新的な技術とプロフェッショナルなサービスで、
          お客様のビジネス成長をサポートします。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-agency-red hover:shadow-lg"
            aria-label="お問い合わせページに移動"
          >
            お問い合わせを開始する
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-agency-red"
            aria-label="サービス詳細を確認"
          >
            サービスを発見する
          </Button>
        </div>

        {/* スクロール指示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">スクロール</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
