"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Globe2,
  Users,
} from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { number: t.hero.stat1Number, label: t.hero.stat1Label, icon: Users },
    { number: t.hero.stat2Number, label: t.hero.stat2Label, icon: ShieldCheck },
    { number: t.hero.stat3Number, label: t.hero.stat3Label, icon: GraduationCap },
    { number: t.hero.stat4Number, label: t.hero.stat4Label, icon: Globe2 },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-emerald-50/40 via-white to-slate-50">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-200/30 via-teal-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center">
            <Badge variant="emerald" className="gap-2 px-3.5 py-1.5 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
              <span>{t.hero.badge}</span>
            </Badge>
          </div>

          {/* Semantic Single H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="#services"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              {t.hero.ctaPrimary}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-center shadow-xs backdrop-blur-xs transition-all hover:border-emerald-300 hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {stat.number}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
