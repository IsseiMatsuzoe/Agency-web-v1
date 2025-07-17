export default function Services() {
  const services = [
    {
      title: "Webサイト開発",
      description:
        "レスポンシブデザインと最新技術を活用した高品質なWebサイトを開発します。",
      icon: "🌐",
      features: ["レスポンシブデザイン", "SEO最適化", "高速パフォーマンス"],
    },
    {
      title: "Webアプリケーション",
      description:
        "スケーラブルで安全なWebアプリケーションの設計・開発を行います。",
      icon: "💻",
      features: ["カスタム開発", "データベース設計", "API統合"],
    },
    {
      title: "UIデザイン",
      description:
        "ユーザーエクスペリエンスを重視した直感的なデザインを提供します。",
      icon: "🎨",
      features: ["UI/UXデザイン", "プロトタイプ", "ブランディング"],
    },
    {
      title: "コンサルティング",
      description:
        "技術戦略からプロジェクト管理まで、包括的なコンサルティングサービス。",
      icon: "💡",
      features: ["技術戦略", "プロジェクト管理", "デジタル変革"],
    },
    {
      title: "保守・運用",
      description:
        "継続的なサポートとメンテナンスでシステムの安定稼働を保証します。",
      icon: "🔧",
      features: ["24/7監視", "定期更新", "バックアップ"],
    },
    {
      title: "クラウドソリューション",
      description:
        "AWS、Azure、GCPなどのクラウドプラットフォームを活用したソリューション。",
      icon: "☁️",
      features: ["クラウド移行", "スケーリング", "コスト最適化"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            私たちのサービス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お客様のビジネスニーズに合わせた幅広いサービスを提供しています。
            最新の技術と豊富な経験で、確実な成果をお届けします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300 inline-block"
          >
            お見積もりを依頼する
          </a>
        </div>
      </div>
    </section>
  );
}
