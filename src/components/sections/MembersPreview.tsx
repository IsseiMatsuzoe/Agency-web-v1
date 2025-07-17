import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  order: number;
  active: boolean;
}

// 静的なデータ（後でFirestoreから取得予定）
const membersData: Member[] = [
  {
    id: "1",
    name: "田中 太郎",
    role: "代表取締役CEO",
    bio: "20年以上のIT業界経験を持ち、革新的なソリューションで企業の成長をサポートしています。",
    image: "/images/member-1.jpg",
    order: 1,
    active: true,
  },
  {
    id: "2",
    name: "佐藤 花子",
    role: "CTO・技術責任者",
    bio: "最新技術の研究開発と実装に長年携わり、お客様に最適なソリューションを提供します。",
    image: "/images/member-2.jpg",
    order: 2,
    active: true,
  },
  {
    id: "3",
    name: "山田 次郎",
    role: "デザイン責任者",
    bio: "ユーザーエクスペリエンスを重視したデザインで、使いやすく美しいサービスを創造します。",
    image: "/images/member-3.jpg",
    order: 3,
    active: true,
  },
];

export default function MembersPreview() {
  return (
    <section
      className="py-mega bg-white"
      role="region"
      aria-labelledby="members-heading"
    >
      <div className="max-w-content mx-auto px-xxl">
        <div className="text-center mb-12">
          <h2
            id="members-heading"
            className="text-2xl md:text-4xl font-rounded font-bold text-agency-blue mb-4"
          >
            私たちのチーム
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            経験豊富なプロフェッショナルたちが、お客様の成功をサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {membersData.map((member) => (
            <Card key={member.id} className="text-center" hoverable>
              {/* プロフィール画像（プレースホルダー） */}
              <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br from-agency-blue to-agency-orange flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {member.name}
              </h3>

              <p className="text-agency-blue font-medium mb-4">{member.role}</p>

              <p className="text-neutral-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="md" aria-label="全メンバーを見る">
            全メンバーを見る
          </Button>
        </div>
      </div>
    </section>
  );
}
