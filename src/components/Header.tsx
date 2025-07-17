"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary-700">
            <Link href="/">会社名</Link>
          </div>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition duration-300"
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 transition duration-300"
            >
              会社概要
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-primary-600 transition duration-300"
            >
              サービス
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 transition duration-300"
            >
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition duration-300"
              >
                ホーム
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-600 transition duration-300"
              >
                会社概要
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-primary-600 transition duration-300"
              >
                サービス
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary-600 transition duration-300"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
