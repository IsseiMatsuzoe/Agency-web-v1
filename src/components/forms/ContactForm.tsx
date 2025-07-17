"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  general?: string;
}

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  // フォームバリデーション
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // 名前の必須チェック
    if (!formData.name.trim()) {
      newErrors.name = "お名前は必須です";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "お名前は100文字以内で入力してください";
    }

    // メッセージの必須チェック
    if (!formData.message.trim()) {
      newErrors.message = "お問い合わせ内容は必須です";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "お問い合わせ内容は10文字以上で入力してください";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "お問い合わせ内容は1000文字以内で入力してください";
    }

    // 連絡先の条件必須チェック（メールまたは電話のいずれかは必須）
    const hasEmail = formData.email.trim() !== "";
    const hasPhone = formData.phone.trim() !== "";

    if (!hasEmail && !hasPhone) {
      newErrors.email = "メールアドレスまたは電話番号のいずれかは必須です";
      newErrors.phone = "メールアドレスまたは電話番号のいずれかは必須です";
    }

    // メールアドレスの形式チェック
    if (hasEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "正しいメールアドレス形式で入力してください";
      }
    }

    // 電話番号の形式チェック
    if (hasPhone) {
      const phoneRegex = /^[\d\-\(\)\+\s]+$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "正しい電話番号形式で入力してください";
      }
    }

    return newErrors;
  };

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーション実行
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setSubmissionState("submitting");

    try {
      // 実際のAPI呼び出し（後で実装）
      await new Promise((resolve) => setTimeout(resolve, 2000)); // シミュレーション

      setSubmissionState("success");

      // フォームリセット
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setSubmissionState("error");
      setErrors({
        general: "送信中にエラーが発生しました。もう一度お試しください。",
      });
    }
  };

  // 入力値変更処理
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // エラーをクリア
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }

    // 条件必須エラーのクリア
    if ((field === "email" || field === "phone") && value.trim()) {
      setErrors((prev) => ({
        ...prev,
        email: prev.email?.includes("いずれかは必須") ? undefined : prev.email,
        phone: prev.phone?.includes("いずれかは必須") ? undefined : prev.phone,
      }));
    }
  };

  // 成功状態の表示
  if (submissionState === "success") {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="w-16 h-16 bg-success text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-agency-blue mb-4">
          お問い合わせありがとうございます
        </h2>

        <p className="text-neutral-600 mb-8 leading-relaxed">
          お問い合わせを受け付けました。
          内容を確認の上、24時間以内にご連絡いたします。
        </p>

        <Button variant="primary" onClick={() => setSubmissionState("idle")}>
          新しいお問い合わせをする
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6" noValidate>
      <div className="space-y-6">
        {/* 全般エラー */}
        {errors.general && (
          <div
            className="p-4 bg-error/10 border border-error/20 rounded-lg text-error text-sm"
            role="alert"
            aria-live="polite"
          >
            {errors.general}
          </div>
        )}

        {/* お名前 */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-900 mb-2"
          >
            お名前{" "}
            <span className="text-error" aria-label="必須">
              *
            </span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg transition-agency focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-transparent ${
              errors.name ? "border-error" : "border-neutral-300"
            }`}
            placeholder="山田 太郎"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <p id="name-error" className="text-error text-sm mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* メールアドレス */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-900 mb-2"
          >
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg transition-agency focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-transparent ${
              errors.email ? "border-error" : "border-neutral-300"
            }`}
            placeholder="example@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={
              errors.email ? "email-error email-help" : "email-help"
            }
          />
          <p id="email-help" className="text-neutral-500 text-sm mt-1">
            電話番号またはメールアドレスのいずれかは必須です
          </p>
          {errors.email && (
            <p
              id="email-error"
              className="text-error text-sm mt-1"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* 電話番号 */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-neutral-900 mb-2"
          >
            電話番号
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg transition-agency focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-transparent ${
              errors.phone ? "border-error" : "border-neutral-300"
            }`}
            placeholder="03-1234-5678"
            aria-invalid={!!errors.phone}
            aria-describedby={
              errors.phone ? "phone-error phone-help" : "phone-help"
            }
          />
          <p id="phone-help" className="text-neutral-500 text-sm mt-1">
            電話番号またはメールアドレスのいずれかは必須です
          </p>
          {errors.phone && (
            <p
              id="phone-error"
              className="text-error text-sm mt-1"
              role="alert"
            >
              {errors.phone}
            </p>
          )}
        </div>

        {/* お問い合わせ内容 */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-900 mb-2"
          >
            お問い合わせ内容{" "}
            <span className="text-error" aria-label="必須">
              *
            </span>
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg transition-agency focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-transparent resize-vertical ${
              errors.message ? "border-error" : "border-neutral-300"
            }`}
            placeholder="お問い合わせ内容をできるだけ詳しくお書きください..."
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? "message-error message-help" : "message-help"
            }
            required
          />
          <div className="flex justify-between items-center mt-1">
            <p id="message-help" className="text-neutral-500 text-sm">
              10文字以上1000文字以内で入力してください
            </p>
            <span className="text-neutral-500 text-sm">
              {formData.message.length}/1000
            </span>
          </div>
          {errors.message && (
            <p
              id="message-error"
              className="text-error text-sm mt-1"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* 送信ボタン */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={submissionState === "submitting"}
            aria-label="お問い合わせを送信"
          >
            {submissionState === "submitting" ? (
              <div className="flex items-center justify-center space-x-2">
                <LoadingSpinner size="sm" color="text-white" />
                <span>送信中...</span>
              </div>
            ) : (
              "お問い合わせを送信する"
            )}
          </Button>
        </div>

        {/* 注意事項 */}
        <div className="text-neutral-500 text-sm leading-relaxed">
          <p>
            ※ いただいたお問い合わせには、24時間以内にご回答いたします。
            お急ぎの場合は、お電話でお問い合わせください。
          </p>
        </div>
      </div>
    </form>
  );
}
