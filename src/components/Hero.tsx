import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              革新的な
              <span className="block text-primary-200">ソリューション</span>
              でビジネスを
              <span className="block">成長させる</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              最新の技術とプロフェッショナルなサービスで、
              お客様のビジネス目標の達成をサポートします。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition duration-300 text-center"
              >
                お問い合わせ
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition duration-300 text-center"
              >
                サービスを見る
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
              <div className="space-y-4">
                <div className="h-4 bg-white/20 rounded"></div>
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
                <div className="h-8 bg-white/30 rounded mt-6"></div>
                <div className="flex space-x-2 mt-4">
                  <div className="h-3 w-3 bg-white/40 rounded-full"></div>
                  <div className="h-3 w-3 bg-white/40 rounded-full"></div>
                  <div className="h-3 w-3 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
