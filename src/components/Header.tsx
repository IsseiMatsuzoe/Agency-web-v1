"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  label: string;
  href: string;
  active: boolean;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    { label: "ホーム", href: "/", active: pathname === "/" },
    { label: "About", href: "/about", active: pathname === "/about" },
    { label: "News", href: "/news", active: pathname.startsWith("/news") },
    { label: "Contact", href: "/contact", active: pathname === "/contact" },
  ];

  // モバイルメニューを閉じる（ルート変更時）
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // エスケープキーでメニューを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="メインナビゲーション"
      >
        <div className="flex justify-between items-center h-16">
          {/* ロゴ・ブランド */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-agency-blue hover:text-agency-red transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
              aria-label="Agencyホームページ"
            >
              Agency
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex md:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-base font-medium transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue ${
                  item.active
                    ? "text-agency-blue font-semibold"
                    : "text-neutral-900 hover:text-agency-red"
                }`}
                aria-current={item.active ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-neutral-900 hover:bg-neutral-100 hover:text-agency-red transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {isMenuOpen ? (
                // Xアイコン（閉じる）
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // ハンバーガーアイコン（開く）
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-100">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-3 text-lg font-medium transition-agency focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-agency-blue min-h-touch ${
                    item.active
                      ? "text-agency-blue font-semibold bg-neutral-100"
                      : "text-neutral-900 hover:text-agency-red hover:bg-neutral-100"
                  }`}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
