import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  author: string;
  tags: string[];
  status: "draft" | "published" | "archived";
}

// 静的なデータ（後でFirestoreから取得予定）
const newsData: NewsItem[] = [
  {
    id: "1",
    title: "新サービス「デジタル変革支援パッケージ」をリリース",
    slug: "digital-transformation-package-release",
    excerpt:
      "中小企業向けのデジタル変革を総合的にサポートする新サービスをリリースしました。従来の課題を解決し、効率的なデジタル化を実現します。",
    coverImage: "/images/news-1.jpg",
    publishedDate: "2025-01-20",
    author: "田中 太郎",
    tags: ["サービス", "デジタル変革"],
    status: "published",
  },
  {
    id: "2",
    title: "AI技術を活用したカスタマーサポートシステムを導入",
    slug: "ai-customer-support-system",
    excerpt:
      "最新のAI技術を活用し、24時間365日対応可能なカスタマーサポートシステムを導入しました。お客様満足度の向上を目指します。",
    coverImage: "/images/news-2.jpg",
    publishedDate: "2025-01-15",
    author: "佐藤 花子",
    tags: ["AI", "カスタマーサポート"],
    status: "published",
  },
  {
    id: "3",
    title: "チーム拡大に伴う新オフィス開設のお知らせ",
    slug: "new-office-opening",
    excerpt:
      "事業拡大とチーム拡大に伴い、新オフィスを開設いたします。より良いサービス提供を目指し、環境を整備してまいります。",
    coverImage: "/images/news-3.jpg",
    publishedDate: "2025-01-10",
    author: "山田 次郎",
    tags: ["企業情報", "オフィス"],
    status: "published",
  },
];

// 日付をフォーマットする関数
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function NewsPreview() {
  return (
    <section
      className="py-mega bg-neutral-100"
      role="region"
      aria-labelledby="news-heading"
    >
      <div className="max-w-content mx-auto px-xxl">
        <div className="text-center mb-12">
          <h2
            id="news-heading"
            className="text-2xl md:text-4xl font-rounded font-bold text-agency-blue mb-4"
          >
            最新ニュース
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Agencyの最新の取り組みや重要なお知らせをお届けします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsData.map((news) => (
            <Card key={news.id} className="overflow-hidden" hoverable>
              {/* カバー画像（プレースホルダー） */}
              <div className="w-full h-48 bg-gradient-to-br from-agency-blue/20 to-agency-orange/20 mb-6 flex items-center justify-center">
                <span className="text-agency-blue text-sm font-medium">
                  {news.tags[0]}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3 line-clamp-2 leading-snug">
                  {news.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                <div className="flex justify-between items-center text-xs text-neutral-500">
                  <span>{formatDate(news.publishedDate)}</span>
                  <span>{news.author}</span>
                </div>

                {/* タグ表示 */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {news.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-agency-blue/10 text-agency-blue text-xs rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="md" aria-label="全ニュースを見る">
            全ニュースを見る
          </Button>
        </div>
      </div>
    </section>
  );
}
