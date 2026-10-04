"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { InquiryFormData, ServiceCategory } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Send, AlertCircle, Phone, Mail, MapPin } from "lucide-react";

export function ConsultationForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    email: "",
    phone: "",
    serviceCategory: "study-abroad",
    destinationOrField: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);

    try {
      // Prototype submission simulation (can easily connect to Next.js API route or Server Action)
      await new Promise((resolve) => setTimeout(resolve, 900));
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceCategory: "study-abroad",
        destinationOrField: "",
        message: "",
      });
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again or reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="emerald">{t.form.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {t.form.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t.form.subtitle}
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Direct Email
                  </div>
                  <a
                    href="mailto:consult@polarisgreen.com"
                    className="text-sm font-medium text-slate-800 hover:text-emerald-600 transition-colors"
                  >
                    consult@polarisgreen.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-800">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Direct Hotline
                  </div>
                  <a
                    href="tel:+18005557652"
                    className="text-sm font-medium text-slate-800 hover:text-teal-600 transition-colors"
                  >
                    +1 (800) 555-7652
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Headquarters
                  </div>
                  <p className="text-sm font-medium text-slate-800">
                    Polaris Green International Towers, Suite 1400
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-lg shadow-slate-200/50">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t.form.successTitle}
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    {t.form.successMessage}
                  </p>
                  <div className="pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-4 text-xs font-medium text-rose-700">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        {t.form.nameLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.form.namePlaceholder}
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        {t.form.emailLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        {t.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        placeholder={t.form.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    {/* Service Category */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        {t.form.serviceLabel}
                      </label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceCategory: e.target.value as ServiceCategory,
                          })
                        }
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      >
                        <option value="recruitment">{t.nav.recruitment}</option>
                        <option value="study-abroad">{t.nav.studyAbroad}</option>
                        <option value="internships">{t.nav.internships}</option>
                        <option value="corporate-training">{t.nav.training}</option>
                        <option value="educational-fairs">{t.nav.fairs}</option>
                        <option value="consultancy">General Advisory</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Country or Industry */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      {t.form.destinationLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.form.destinationPlaceholder}
                      value={formData.destinationOrField}
                      onChange={(e) =>
                        setFormData({ ...formData, destinationOrField: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      {t.form.messageLabel} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="h-4 w-4" />}
                    className="w-full"
                  >
                    {isSubmitting ? t.form.submittingBtn : t.form.submitBtn}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
