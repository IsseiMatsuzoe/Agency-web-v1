import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  author: string;
  tags: string[];
  status: "draft" | "published" | "archived";
}

// 詳細なニュースデータ（後でFirestoreから取得予定）
const detailNewsData: NewsItem[] = [
  {
    id: "1",
    title: "新サービス「デジタル変革支援パッケージ」をリリース",
    slug: "digital-transformation-package-release",
    content: `## 新サービスについて

中小企業向けのデジタル変革を総合的にサポートする新サービス「デジタル変革支援パッケージ」をリリースしました。

### 主な特徴

- **包括的なソリューション**: システム設計から導入、運用まで一貫してサポート
- **段階的な導入**: 企業の規模や予算に応じて段階的にデジタル化を進行
- **継続的なサポート**: 導入後も継続的にサポートとアップデートを提供

### 対象となる企業

- 従業員数50〜500名の中小企業
- デジタル化に課題を感じている企業
- 効率的な業務改善を求める企業

### 導入効果

これまでの実証実験では、平均して以下の効果が確認されています：

- 業務効率の30%向上
- コスト削減効果15%
- 従業員満足度の向上

詳細なお問い合わせは、お気軽にご連絡ください。`,
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
    content: `## AI技術の活用について

最新のAI技術を活用し、24時間365日対応可能なカスタマーサポートシステムを導入しました。

### システムの特徴

- **自然言語処理**: お客様の質問を正確に理解し、適切な回答を提供
- **学習機能**: 過去の対応履歴から学習し、回答精度を継続的に向上
- **多言語対応**: 日本語、英語を含む複数言語に対応

### 導入効果

- 平均応答時間を従来の1/3に短縮
- 顧客満足度が20%向上
- サポートスタッフの負荷軽減により、より複雑な問題に集中可能

お客様により良いサービスを提供するため、今後も技術革新を続けてまいります。`,
    excerpt:
      "最新のAI技術を活用し、24時間365日対応可能なカスタマーサポートシステムを導入しました。お客様満足度の向上を目指します。",
    coverImage: "/images/news-2.jpg",
    publishedDate: "2025-01-15",
    author: "佐藤 花子",
    tags: ["AI", "カスタマーサポート"],
    status: "published",
  },
  // 他のニュース項目も同様に追加...
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

// 関連記事を取得する関数
const getRelatedNews = (currentNews: NewsItem, allNews: NewsItem[]) => {
  return allNews
    .filter(
      (news) =>
        news.id !== currentNews.id &&
        news.status === "published" &&
        news.tags.some((tag) => currentNews.tags.includes(tag))
    )
    .slice(0, 3);
};

// マークダウンを簡易的にHTMLに変換する関数（実際にはライブラリを使用推奨）
const renderMarkdown = (content: string) => {
  return content
    .replace(
      /^## (.*$)/gim,
      '<h2 class="text-2xl font-bold text-agency-blue mb-4 mt-8">$1</h2>'
    )
    .replace(
      /^### (.*$)/gim,
      '<h3 class="text-xl font-bold text-neutral-900 mb-3 mt-6">$1</h3>'
    )
    .replace(/^\- (.*$)/gim, '<li class="mb-2">$1</li>')
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-semibold text-neutral-900">$1</strong>'
    )
    .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed text-neutral-700">')
    .replace(
      /^(.+?)$/gm,
      '<p class="mb-4 leading-relaxed text-neutral-700">$1</p>'
    )
    .replace(/<li/g, '<ul class="list-disc list-inside mb-4 space-y-2"><li')
    .replace(/<\/li>(?=.*<li)/g, "</li>")
    .replace(/<\/li>$/gm, "</li></ul>");
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const news = detailNewsData.find((item) => item.slug === params.slug);

  if (!news) {
    return {
      title: "記事が見つかりません - Agency",
      description: "指定された記事は存在しません。",
    };
  }

  return {
    title: `${news.title} - Agency News`,
    description: news.excerpt,
    keywords: ["Agency", "ニュース", ...news.tags],
    openGraph: {
      title: news.title,
      description: news.excerpt,
      type: "article",
      publishedTime: news.publishedDate,
      authors: [news.author],
    },
  };
}

export default function NewsDetailPage({ params }: PageProps) {
  const news = detailNewsData.find((item) => item.slug === params.slug);

  if (!news || news.status !== "published") {
    notFound();
  }

  const relatedNews = getRelatedNews(news, detailNewsData);

  return (
    <main className="min-h-screen">
      <Header />

      {/* パンくずリスト */}
      <nav className="pt-20 pb-4 bg-neutral-100" aria-label="パンくずリスト">
        <div className="max-w-content mx-auto px-xxl">
          <ol className="flex items-center space-x-2 text-sm text-neutral-600">
            <li>
              <a href="/" className="hover:text-agency-blue transition-agency">
                ホーム
              </a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <a
                href="/news"
                className="hover:text-agency-blue transition-agency"
              >
                News
              </a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-neutral-900 font-medium truncate">
              {news.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* 記事ヘッダー */}
      <section className="py-12 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-xxl">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {news.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-agency-blue text-white text-sm rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-rounded font-bold text-agency-blue mb-6 leading-tight">
              {news.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-neutral-600 text-sm">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <span>公開日: {formatDate(news.publishedDate)}</span>
                <span>著者: {news.author}</span>
              </div>

              {/* ソーシャルシェア（将来の拡張用） */}
              <div className="flex items-center space-x-2">
                <span className="text-xs">シェア:</span>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メイン記事コンテンツ */}
      <article className="py-mega bg-white">
        <div className="max-w-4xl mx-auto px-xxl">
          {/* カバー画像（プレースホルダー） */}
          <div className="w-full h-96 bg-gradient-to-br from-agency-blue/20 to-agency-orange/20 rounded-lg mb-12 flex items-center justify-center">
            <span className="text-agency-blue text-lg font-medium">
              {news.tags[0]} 記事画像
            </span>
          </div>

          {/* 記事本文 */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(news.content) }}
          />

          {/* 記事フッター */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <p className="text-neutral-600 text-sm">この記事を書いた人</p>
                <p className="font-semibold text-neutral-900">{news.author}</p>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <a href="/news" className="block">
                    ニュース一覧に戻る
                  </a>
                </Button>
                <Button variant="primary" size="sm">
                  <a href="/contact" className="block">
                    お問い合わせ
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 関連記事 */}
      {relatedNews.length > 0 && (
        <section className="py-mega bg-neutral-100">
          <div className="max-w-content mx-auto px-xxl">
            <h2 className="text-2xl font-bold text-agency-blue mb-8 text-center">
              関連記事
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((relatedItem) => (
                <Card
                  key={relatedItem.id}
                  className="overflow-hidden"
                  hoverable
                >
                  {/* カバー画像（プレースホルダー） */}
                  <div className="w-full h-48 bg-gradient-to-br from-agency-blue/20 to-agency-orange/20 mb-4 flex items-center justify-center">
                    <span className="text-agency-blue text-sm font-medium">
                      {relatedItem.tags[0]}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2">
                      {relatedItem.title}
                    </h3>

                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {relatedItem.excerpt}
                    </p>

                    <div className="flex justify-between items-center text-xs text-neutral-500 mb-3">
                      <span>{formatDate(relatedItem.publishedDate)}</span>
                      <span>{relatedItem.author}</span>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      <a href={`/news/${relatedItem.slug}`} className="block">
                        読む
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
