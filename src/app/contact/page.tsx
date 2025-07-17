import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact - Agency",
  description:
    "株式会社Agencyへのお問い合わせはこちらから。プロジェクトのご相談から簡単な質問まで、お気軽にご連絡ください。",
  keywords: ["Agency", "お問い合わせ", "連絡", "コンタクト", "相談"],
};

// 企業連絡先情報（後でFirestoreから取得予定）
const contactInfo = {
  company: "株式会社Agency",
  address: "東京都渋谷区神宮前1-2-3 Agencyビル5F",
  phone: "03-1234-5678",
  email: "contact@agency.co.jp",
  businessHours: "平日 9:00 - 18:00",
  mapUrl: "https://maps.google.com/embed?...", // 実際のGoogle Maps URL
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-agency-blue/5 to-agency-orange/5">
        <div className="max-w-content mx-auto px-xxl text-center">
          <h1 className="text-4xl md:text-6xl font-rounded font-bold text-agency-blue mb-6">
            Contact
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            プロジェクトのご相談から簡単な質問まで、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-mega bg-white">
        <div className="max-w-content mx-auto px-xxl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* お問い合わせフォーム */}
            <div>
              <h2 className="text-2xl font-bold text-agency-blue mb-8">
                お問い合わせフォーム
              </h2>
              <ContactForm />
            </div>

            {/* 企業情報・連絡先 */}
            <div>
              <h2 className="text-2xl font-bold text-agency-blue mb-8">
                その他のお問い合わせ方法
              </h2>

              <div className="space-y-8">
                {/* 直接連絡先 */}
                <div className="bg-neutral-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    直接ご連絡
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 text-agency-red flex-shrink-0 mt-1">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">電話</p>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-agency-red hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                        >
                          {contactInfo.phone}
                        </a>
                        <p className="text-neutral-600 text-sm mt-1">
                          {contactInfo.businessHours}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 text-agency-red flex-shrink-0 mt-1">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">メール</p>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-agency-red hover:text-agency-orange transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
                        >
                          {contactInfo.email}
                        </a>
                        <p className="text-neutral-600 text-sm mt-1">
                          24時間以内に返信いたします
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 text-agency-red flex-shrink-0 mt-1">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">所在地</p>
                        <p className="text-neutral-600">
                          {contactInfo.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    よくあるご質問
                  </h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-agency-blue pl-4">
                      <h4 className="font-medium text-neutral-900 mb-2">
                        Q. プロジェクトの相談は無料ですか？
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        A.
                        はい、初回のご相談は無料です。お気軽にお問い合わせください。
                      </p>
                    </div>

                    <div className="border-l-4 border-agency-blue pl-4">
                      <h4 className="font-medium text-neutral-900 mb-2">
                        Q. どのような規模のプロジェクトに対応していますか？
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        A.
                        小規模なWebサイトから大規模なシステム開発まで幅広く対応しています。
                      </p>
                    </div>

                    <div className="border-l-4 border-agency-blue pl-4">
                      <h4 className="font-medium text-neutral-900 mb-2">
                        Q. サポート体制はどのようになっていますか？
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        A.
                        プロジェクト完了後も継続的なサポートを提供いたします。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 地図（プレースホルダー） */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    アクセス
                  </h3>
                  <div className="w-full h-64 bg-neutral-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-neutral-600">
                      <div className="w-12 h-12 mx-auto mb-3">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm">Google Maps</p>
                      <p className="text-xs">（実装時に埋め込み）</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm mt-2">
                    最寄駅: 表参道駅より徒歩5分
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
