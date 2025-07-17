"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

// 拡張されたニュースデータ（後でFirestoreから取得予定）
const allNewsData: NewsItem[] = [
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
  {
    id: "4",
    title: "セキュリティ強化に関する重要なアップデート",
    slug: "security-enhancement-update",
    excerpt:
      "お客様の大切なデータを守るため、セキュリティシステムを大幅に強化いたします。最新の暗号化技術を導入し、安全性を向上させました。",
    coverImage: "/images/news-4.jpg",
    publishedDate: "2025-01-05",
    author: "佐藤 花子",
    tags: ["セキュリティ", "技術"],
    status: "published",
  },
  {
    id: "5",
    title: "年末年始休業のお知らせ",
    slug: "year-end-holiday-notice",
    excerpt:
      "年末年始の休業期間とサポート体制についてお知らせします。休業期間中の緊急時対応についても記載しています。",
    coverImage: "/images/news-5.jpg",
    publishedDate: "2024-12-25",
    author: "田中 太郎",
    tags: ["お知らせ", "休業"],
    status: "published",
  },
  {
    id: "6",
    title: "新技術導入による開発効率の向上",
    slug: "new-technology-development-efficiency",
    excerpt:
      "最新の開発ツールと手法を導入することで、開発効率を大幅に向上させることができました。お客様へのサービス提供スピードが改善されます。",
    coverImage: "/images/news-6.jpg",
    publishedDate: "2024-12-20",
    author: "高橋 健一",
    tags: ["技術", "開発"],
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

// すべてのタグを取得
const getAllTags = (newsItems: NewsItem[]) => {
  const tagSet = new Set<string>();
  newsItems.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet);
};

export const metadata = {
  title: "News - Agency",
  description: "株式会社Agencyの最新ニュースと情報をお届けします。",
  keywords: ["Agency", "ニュース", "お知らせ", "情報"],
};

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // フィルタリング処理
  const filteredNews = allNewsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "" || item.tags.includes(selectedTag);
    return matchesSearch && matchesTag && item.status === "published";
  });

  // ページネーション計算
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // 検索・フィルター変更時はページを1に戻す
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const allTags = getAllTags(allNewsData);

  return (
    <main className="min-h-screen">
      <Header />

      {/* ページヘッダー */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-agency-blue/5 to-agency-orange/5">
        <div className="max-w-content mx-auto px-xxl text-center">
          <h1 className="text-4xl md:text-6xl font-rounded font-bold text-agency-blue mb-6">
            News
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Agencyの最新の取り組みや重要なお知らせをお届けします。
            最新技術や業界動向についての情報も発信しています。
          </p>
        </div>
      </section>

      {/* 検索・フィルター */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="max-w-content mx-auto px-xxl">
          <div className="flex flex-col md:flex-row gap-6">
            {/* 検索バー */}
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                ニュースを検索
              </label>
              <input
                id="search"
                type="text"
                placeholder="ニュースを検索..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-agency-blue focus:border-transparent transition-agency"
              />
            </div>

            {/* タグフィルター */}
            <div className="md:w-64">
              <label htmlFor="tag-filter" className="sr-only">
                タグでフィルター
              </label>
              <select
                id="tag-filter"
                value={selectedTag}
                onChange={(e) => handleTagChange(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-agency-blue focus:border-transparent transition-agency"
              >
                <option value="">全てのタグ</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 検索結果表示 */}
          <div className="mt-4 text-sm text-neutral-600">
            {filteredNews.length}件のニュースが見つかりました
            {(searchQuery || selectedTag) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("");
                  setCurrentPage(1);
                }}
                className="ml-4 text-agency-red hover:text-agency-orange transition-agency"
              >
                フィルターをクリア
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="py-mega bg-neutral-100">
        <div className="max-w-content mx-auto px-xxl">
          {paginatedNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedNews.map((news) => (
                <Card
                  key={news.id}
                  className="overflow-hidden h-full"
                  hoverable
                >
                  {/* カバー画像（プレースホルダー） */}
                  <div className="w-full h-48 bg-gradient-to-br from-agency-blue/20 to-agency-orange/20 mb-6 flex items-center justify-center">
                    <span className="text-agency-blue text-sm font-medium">
                      {news.tags[0]}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col h-full">
                    <h2 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 leading-snug">
                      {news.title}
                    </h2>

                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {news.excerpt}
                    </p>

                    <div className="flex justify-between items-center text-xs text-neutral-500 mb-3">
                      <span>{formatDate(news.publishedDate)}</span>
                      <span>{news.author}</span>
                    </div>

                    {/* タグ表示 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {news.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-agency-blue/10 text-agency-blue text-xs rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 詳細リンク */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-auto"
                      aria-label={`${news.title}の詳細を見る`}
                    >
                      詳細を見る
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-neutral-600 text-lg">
                該当するニュースが見つかりませんでした。
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("");
                  setCurrentPage(1);
                }}
              >
                フィルターをリセット
              </Button>
            </div>
          )}

          {/* ページネーション */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav aria-label="ページネーション" className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  aria-label="前のページ"
                >
                  前へ
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={page === currentPage ? "primary" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      aria-label={`ページ${page}`}
                      aria-current={page === currentPage ? "page" : undefined}
                    >
                      {page}
                    </Button>
                  )
                )}

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  aria-label="次のページ"
                >
                  次へ
                </Button>
              </nav>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
