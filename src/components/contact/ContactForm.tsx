"use client";

import { useMemo, useState } from "react";

import { site } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  organization: string;
  message: string;
  referral: string;
};

const emptyState: FormState = {
  name: "",
  email: "",
  organization: "",
  message: "",
  referral: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyState);
  const [submitted, setSubmitted] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const emailParts = site.contactEmail.split("@");
  const obfuscatedEmail =
    emailParts.length === 2
      ? `${emailParts[0]} [at] ${emailParts[1]}`
      : site.contactEmail;

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.email.trim()) {
      next.email = "Please add your email.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      next.email = "Please use a valid email address.";
    }
    if (!form.message.trim()) next.message = "Tell us a bit more.";
    return next;
  }, [form]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted !== "idle") {
      setSubmitted("idle");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length > 0) {
      setSubmitted("error");
      return;
    }
    setSubmitted("success");
    setForm(emptyState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700" htmlFor="name">
          <span className="flex items-center gap-2">
            Name <span className="text-rose-600">*</span>
          </span>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            required
          />
          {errors.name ? (
            <span id="name-error" className="text-xs text-rose-600">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="space-y-2 text-sm text-slate-700" htmlFor="email">
          <span className="flex items-center gap-2">
            Email <span className="text-rose-600">*</span>
          </span>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            required
          />
          {errors.email ? (
            <span id="email-error" className="text-xs text-rose-600">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-700" htmlFor="organization">
        <span>Organisation / project</span>
        <input
          id="organization"
          name="organization"
          value={form.organization}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
        />
      </label>
      <label className="space-y-2 text-sm text-slate-700" htmlFor="message">
        <span className="flex items-center gap-2">
          Message <span className="text-rose-600">*</span>
        </span>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          required
        />
        {errors.message ? (
          <span id="message-error" className="text-xs text-rose-600">
            {errors.message}
          </span>
        ) : null}
      </label>
      <label className="space-y-2 text-sm text-slate-700" htmlFor="referral">
        <span>How did you find Copilot Ventures? (optional)</span>
        <input
          id="referral"
          name="referral"
          value={form.referral}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-2.5 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Send message
        </button>
        <p
          className="text-sm text-slate-600"
          aria-live="polite"
          role="status"
        >
          {submitted === "success"
            ? `Thanks — this form does not send yet. Please email ${obfuscatedEmail}.`
            : null}
          {submitted === "error"
            ? "Please fill in the required fields before sending."
            : null}
        </p>
      </div>
    </form>
  );
}
