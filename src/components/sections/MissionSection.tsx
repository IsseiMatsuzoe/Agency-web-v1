// 静的なデータ（後でFirestoreから取得予定）
const missionData = {
  title: "私たちのミッション",
  content: `私たちは、誠実さと親しみやすさを大切にしながら、
  最新のデジタル技術を活用して、お客様のビジネス成長をサポートします。
  
  革新的なソリューションとプロフェッショナルなサービスを通じて、
  お客様の目標達成をお手伝いし、
  共に成功への道を歩んでいくことを目指しています。`,
};

export default function MissionSection() {
  return (
    <section className="py-mega bg-neutral-100" role="main">
      <div className="max-w-content mx-auto px-xxl">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-rounded font-bold text-agency-blue mb-8">
            {missionData.title}
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-neutral-900 whitespace-pre-line">
              {missionData.content}
            </p>
          </div>

          {/* 装飾的な要素 */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-4">
              <div className="w-3 h-3 bg-agency-red rounded-full"></div>
              <div className="w-3 h-3 bg-agency-orange rounded-full"></div>
              <div className="w-3 h-3 bg-agency-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
