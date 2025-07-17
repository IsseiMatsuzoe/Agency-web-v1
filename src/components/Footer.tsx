import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">会社名</h3>
            <p className="text-gray-300 mb-4">
              私たちは、お客様のビジネス成長をサポートする優れたソリューションを提供します。
              革新的な技術とプロフェッショナルなサービスで、お客様の目標達成をお手伝いします。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Webデベロップメント
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  コンサルティング
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  デザイン
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 会社名. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
