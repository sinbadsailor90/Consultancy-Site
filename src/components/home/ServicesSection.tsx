"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  Briefcase,
  GraduationCap,
  Award,
  Building,
  CalendarDays,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.recruitmentTitle,
      description: t.services.recruitmentDesc,
      icon: Briefcase,
      badge: "Careers",
      color: "emerald",
      href: "/services/recruitment",
      features: [
        "Executive & skilled labor matching",
        "Resume screening & interview coaching",
        "Direct hiring with verified global firms",
      ],
    },
    {
      title: t.services.studyAbroadTitle,
      description: t.services.studyAbroadDesc,
      icon: GraduationCap,
      badge: "Academics",
      color: "teal",
      href: "/services/study-abroad",
      features: [
        "Admissions in Japan, UK, US, Canada & EU",
        "SOP / Essay editing & scholarship support",
        "Step-by-step visa documentation guidance",
      ],
    },
    {
      title: t.services.internshipsTitle,
      description: t.services.internshipsDesc,
      icon: Award,
      badge: "Experience",
      color: "blue",
      href: "/services/internships",
      features: [
        "Paid multinational internship programs",
        "Academic credit conversion support",
        "Post-internship placement pathways",
      ],
    },
    {
      title: t.services.trainingTitle,
      description: t.services.trainingDesc,
      icon: Building,
      badge: "Corporate",
      color: "slate",
      href: "/services/corporate-training",
      features: [
        "Language & cross-cultural training",
        "Corporate workforce upskilling",
        "Leadership and technical certification",
      ],
    },
    {
      title: t.services.fairsTitle,
      description: t.services.fairsDesc,
      icon: CalendarDays,
      badge: "Expos",
      color: "amber",
      href: "/fairs",
      features: [
        "Meet university admissions deans directly",
        "Live on-the-spot profile assessments",
        "Educational & career workshop stages",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald">{t.services.headingBadge}</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t.services.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="flex flex-col justify-between group hover:border-emerald-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{t.services.learnMore}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}

          {/* Quick Consultation CTA Card */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-800 to-slate-900 p-8 text-white flex flex-col justify-between shadow-lg">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-4">
                Personalized Advice
              </span>
              <h3 className="text-2xl font-bold leading-tight">
                Not sure which pathway fits your goals?
              </h3>
              <p className="mt-3 text-sm text-emerald-100/80 leading-relaxed">
                Our certified educational and career consultants will assess your qualifications and design a customized roadmap for study or employment.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 transition-colors"
              >
                Schedule Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
