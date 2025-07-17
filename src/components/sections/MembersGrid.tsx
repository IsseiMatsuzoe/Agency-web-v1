import Card from "@/components/ui/Card";

interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  order: number;
  active: boolean;
}

// 拡張されたメンバーデータ（後でFirestoreから取得予定）
const allMembersData: Member[] = [
  {
    id: "1",
    name: "田中 太郎",
    role: "代表取締役CEO",
    bio: "20年以上のIT業界経験を持ち、革新的なソリューションで企業の成長をサポートしています。お客様の成功を第一に考え、チーム全体をリードしています。",
    image: "/images/member-1.jpg",
    order: 1,
    active: true,
  },
  {
    id: "2",
    name: "佐藤 花子",
    role: "CTO・技術責任者",
    bio: "最新技術の研究開発と実装に長年携わり、お客様に最適なソリューションを提供します。技術革新とプロダクトクオリティの向上に取り組んでいます。",
    image: "/images/member-2.jpg",
    order: 2,
    active: true,
  },
  {
    id: "3",
    name: "山田 次郎",
    role: "デザイン責任者",
    bio: "ユーザーエクスペリエンスを重視したデザインで、使いやすく美しいサービスを創造します。デザイン思考とユーザビリティの専門家です。",
    image: "/images/member-3.jpg",
    order: 3,
    active: true,
  },
  {
    id: "4",
    name: "鈴木 美咲",
    role: "プロジェクトマネージャー",
    bio: "お客様のプロジェクトを成功に導くプロジェクト管理のエキスパート。チームとお客様の橋渡し役として、円滑なコミュニケーションを実現します。",
    image: "/images/member-4.jpg",
    order: 4,
    active: true,
  },
  {
    id: "5",
    name: "高橋 健一",
    role: "シニアエンジニア",
    bio: "フルスタック開発の専門知識を活かし、スケーラブルで堅牢なシステムを構築します。新技術の導入と開発効率の向上を推進しています。",
    image: "/images/member-5.jpg",
    order: 5,
    active: true,
  },
  {
    id: "6",
    name: "伊藤 由美",
    role: "ビジネスアナリスト",
    bio: "データ分析とビジネス戦略の専門家として、お客様のビジネス課題を深く理解し、効果的なソリューションを提案します。",
    image: "/images/member-6.jpg",
    order: 6,
    active: true,
  },
];

export default function MembersGrid() {
  // 順序でソート
  const sortedMembers = [...allMembersData]
    .filter((member) => member.active)
    .sort((a, b) => a.order - b.order);

  return (
    <section
      className="py-mega bg-white"
      role="main"
      aria-labelledby="all-members-heading"
    >
      <div className="max-w-content mx-auto px-xxl">
        <div className="text-center mb-16">
          <h2
            id="all-members-heading"
            className="text-2xl md:text-4xl font-rounded font-bold text-agency-blue mb-6"
          >
            私たちのチーム
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            多様な専門分野を持つプロフェッショナルたちが一丸となって、
            お客様の課題解決とビジネス成長をサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedMembers.map((member) => (
            <Card key={member.id} className="text-center h-full" hoverable>
              {/* プロフィール画像（プレースホルダー） */}
              <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-agency-blue to-agency-orange flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  {member.name}
                </h3>

                <p className="text-agency-blue font-semibold text-lg">
                  {member.role}
                </p>

                <p className="text-neutral-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>

              {/* ソーシャルリンク（将来の拡張用） */}
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <div className="flex justify-center space-x-3">
                  <span className="text-xs text-neutral-500">
                    専門分野: {member.role.split("・")[0]}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* チーム統計 */}
        <div className="mt-16 pt-12 border-t border-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-agency-red mb-2">
                {sortedMembers.length}+
              </div>
              <div className="text-neutral-600">プロフェッショナル</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-agency-orange mb-2">
                10+
              </div>
              <div className="text-neutral-600">年の平均経験</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-agency-blue mb-2">
                100+
              </div>
              <div className="text-neutral-600">プロジェクト実績</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
