export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            私たちについて
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お客様のビジネス成長を支援する信頼できるパートナーとして、
            革新的なソリューションを提供し続けています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              私たちのミッション
            </h3>
            <p className="text-gray-600 mb-6">
              最新の技術と創造性を組み合わせて、お客様のビジネスに真の価値をもたらすソリューションを提供することです。
              私たちは、常にお客様の立場に立って考え、最適な解決策を見つけ出します。
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary-500 text-white rounded-full p-2 mr-4 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    品質への取り組み
                  </h4>
                  <p className="text-gray-600">
                    高品質なサービスの提供を常に心がけています
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-500 text-white rounded-full p-2 mr-4 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    お客様との関係
                  </h4>
                  <p className="text-gray-600">
                    長期的なパートナーシップを重視しています
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-500 text-white rounded-full p-2 mr-4 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">継続的な学習</h4>
                  <p className="text-gray-600">
                    最新技術の習得と改善に努めています
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  10+
                </div>
                <div className="text-gray-600">年の経験</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  100+
                </div>
                <div className="text-gray-600">プロジェクト完了</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">満足したクライアント</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">サポート体制</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
