# 会社用ウェブサイト

React、TypeScript、Next.js、Firebase を使用した会社用ウェブサイトです。

## 技術スタック

- **フロントエンド**: React 18, TypeScript, Next.js 15 (App Router)
- **スタイリング**: Tailwind CSS
- **ホスティング**: Firebase Hosting
- **バックエンド**: Firebase (Firestore, Auth)

## セットアップ

### 前提条件

- Node.js (18.0.0 以上)
- npm または yarn
- Firebase アカウント

### インストール

1. リポジトリをクローン

```bash
git clone <repository-url>
cd agency-web-v1
```

2. 依存関係をインストール

```bash
npm install
```

3. Firebase プロジェクトのセットアップ

   - [Firebase Console](https://console.firebase.google.com/) でプロジェクトを作成
   - Hosting を有効化
   - 必要に応じて Firestore、Authentication を設定

4. 環境変数を設定
   - `.env.local` ファイルを作成
   - Firebase の設定情報を追加:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 開発

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### リント

```bash
npm run lint
```

## デプロイ

### Firebase Hosting へのデプロイ

1. Firebase CLI をインストール

```bash
npm install -g firebase-tools
```

2. Firebase にログイン

```bash
firebase login
```

3. Firebase プロジェクトを初期化（既に設定済みの場合はスキップ）

```bash
firebase init hosting
```

4. ビルドとデプロイ

```bash
npm run build
firebase deploy
```

## プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # アバウトページ
│   ├── contact/           # コンタクトページ
│   ├── services/          # サービスページ
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx          # ホームページ
├── components/            # Reactコンポーネント
│   ├── Header.tsx         # ヘッダー
│   ├── Footer.tsx         # フッター
│   ├── Hero.tsx           # ヒーローセクション
│   ├── About.tsx          # アバウトセクション
│   ├── Services.tsx       # サービスセクション
│   └── Contact.tsx        # コンタクトセクション
└── lib/
    └── firebase.ts        # Firebase設定
```

## 主な機能

- **レスポンシブデザイン**: モバイルファーストでデザイン
- **モダンな UI**: Tailwind CSS を使用した美しいデザイン
- **お問い合わせフォーム**: フォーム送信機能
- **SEO 最適化**: メタデータとセマンティック HTML
- **TypeScript**: 型安全性とコード品質の向上
- **Firebase 統合**: ホスティングとバックエンドサービス

## カスタマイズ

### ブランディング

1. `src/components/Header.tsx` と `src/components/Footer.tsx` で会社名を変更
2. `tailwind.config.ts` でカラーテーマを調整
3. `src/app/layout.tsx` でメタデータを更新

### コンテンツ

各コンポーネントファイルでテキストや画像を編集してください。

## サポート

問題が発生した場合は、イシューを作成するか、開発チームにお問い合わせください。

## ライセンス

このプロジェクトはプライベートプロジェクトです。
