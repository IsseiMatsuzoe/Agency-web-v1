import Link from "next/link";

interface CompanyMeta {
  name: string;
  description: string;
  established: string;
  address: string;
  email: string;
}

// 静的なデータ（後でFirestoreから取得予定）
const companyInfo: CompanyMeta = {
  name: "株式会社Agency",
  description:
    "誠実で親しみやすいデジタルソリューションを提供する企業です。革新的な技術とプロフェッショナルなサービスで、お客様のビジネス成長をサポートします。",
  established: "2015年",
  address: "東京都渋谷区",
  email: "contact@agency.co.jp",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 会社情報 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-agency-blue mb-4">Agency</h3>
            <p className="text-neutral-100 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="space-y-2 text-sm text-neutral-300">
              <p>設立: {companyInfo.established}</p>
              <p>所在地: {companyInfo.address}</p>
              <p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                >
                  {companyInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              サイトマップ
            </h4>
            <nav aria-label="フッターナビゲーション">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-neutral-300 hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                  >
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-neutral-300 hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-neutral-300 hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-neutral-300 hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* リーガル情報 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">法的情報</h4>
            <nav aria-label="法的情報ナビゲーション">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-neutral-300 hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-neutral-300 hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                  >
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap"
                    className="text-neutral-300 hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                  >
                    サイトマップ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-neutral-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm">
              Made with ❤️ for our clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
