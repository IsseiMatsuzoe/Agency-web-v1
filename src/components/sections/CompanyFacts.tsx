interface CompanyMeta {
  established: string;
  capital: string;
  address: string;
  contactEmail: string;
  mission: string;
  vision: string;
  values: string[];
}

// 静的なデータ（後でFirestoreから取得予定）
const companyData: CompanyMeta = {
  established: "2015年4月",
  capital: "1,000万円",
  address: "東京都渋谷区神宮前1-2-3 Agencyビル5F",
  contactEmail: "contact@agency.co.jp",
  mission:
    "誠実で親しみやすいデジタルソリューションを通じて、お客様のビジネス成長と社会の発展に貢献する",
  vision:
    "テクノロジーと人の温かみを融合させ、すべての人がデジタルの恩恵を受けられる社会の実現",
  values: [
    "誠実さ - お客様との信頼関係を最も大切にします",
    "親しみやすさ - 技術の専門性を分かりやすく伝えます",
    "革新性 - 常に新しいソリューションを探求します",
    "協調性 - チームワークを重視し、共に成長します",
  ],
};

export default function CompanyFacts() {
  return (
    <section
      className="py-mega bg-neutral-100"
      role="complementary"
      aria-labelledby="company-facts-heading"
    >
      <div className="max-w-content mx-auto px-xxl">
        <div className="text-center mb-16">
          <h2
            id="company-facts-heading"
            className="text-2xl md:text-4xl font-rounded font-bold text-agency-blue mb-6"
          >
            会社情報
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            株式会社Agencyの基本情報とビジョンをご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 基本情報 */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              基本情報
            </h3>

            <dl className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <dt className="font-semibold text-neutral-900 w-32 mb-2 sm:mb-0">
                  設立
                </dt>
                <dd className="text-neutral-600">{companyData.established}</dd>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start">
                <dt className="font-semibold text-neutral-900 w-32 mb-2 sm:mb-0">
                  資本金
                </dt>
                <dd className="text-neutral-600">{companyData.capital}</dd>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start">
                <dt className="font-semibold text-neutral-900 w-32 mb-2 sm:mb-0">
                  所在地
                </dt>
                <dd className="text-neutral-600">{companyData.address}</dd>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start">
                <dt className="font-semibold text-neutral-900 w-32 mb-2 sm:mb-0">
                  連絡先
                </dt>
                <dd className="text-neutral-600">
                  <a
                    href={`mailto:${companyData.contactEmail}`}
                    className="text-agency-red hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                  >
                    {companyData.contactEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* ミッション・ビジョン */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              ミッション・ビジョン
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-agency-blue mb-3">
                  ミッション
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {companyData.mission}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-agency-blue mb-3">
                  ビジョン
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {companyData.vision}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 価値観 */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <h3 className="text-xl font-bold text-neutral-900 mb-8 text-center">
            私たちの価値観
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-agency-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 統計情報 */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-agency-red mb-2">10+</div>
              <div className="text-neutral-600 text-sm">年の実績</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-agency-orange mb-2">
                100+
              </div>
              <div className="text-neutral-600 text-sm">プロジェクト</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-agency-blue mb-2">
                50+
              </div>
              <div className="text-neutral-600 text-sm">お客様</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-agency-red mb-2">
                24/7
              </div>
              <div className="text-neutral-600 text-sm">サポート</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
