"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import {
  Briefcase,
  GraduationCap,
  Award,
  Building,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Globe2,
  Clock,
} from "lucide-react";

export default function ServicesOverviewPage() {
  const { t } = useLanguage();

  const services = [
    {
      slug: "recruitment",
      href: "/services/recruitment",
      icon: Briefcase,
      badge: "Recruitment",
      title: t.services.recruitmentTitle,
      description: t.services.recruitmentDesc,
      highlights: [
        "Executive & professional headhunting",
        "Comprehensive screening & background checks",
        "Direct placement in Japan, EU & multinational enterprises",
      ],
    },
    {
      slug: "study-abroad",
      href: "/services/study-abroad",
      icon: GraduationCap,
      badge: "Education",
      title: t.services.studyAbroadTitle,
      description: t.services.studyAbroadDesc,
      highlights: [
        "Official university placement & application review",
        "Scholarship and financial documentation guidance",
        "Dedicated visa filing support with 98.4% success record",
      ],
    },
    {
      slug: "internships",
      href: "/services/internships",
      icon: Award,
      badge: "Practical Experience",
      title: t.services.internshipsTitle,
      description: t.services.internshipsDesc,
      highlights: [
        "Curated placements with leading industry partners",
        "Credit conversion & academic supervisor coordination",
        "Post-internship hiring & sponsored visa conversion options",
      ],
    },
    {
      slug: "corporate-training",
      href: "/services/corporate-training",
      icon: Building,
      badge: "Corporate Upskilling",
      title: t.services.trainingTitle,
      description: t.services.trainingDesc,
      highlights: [
        "Bespoke language and cross-cultural workplace fluency",
        "Executive leadership and management workshops",
        "Accredited professional certifications for staff",
      ],
    },
    {
      slug: "educational-fairs",
      href: "/fairs",
      icon: CalendarDays,
      badge: "Expos & Events",
      title: t.services.fairsTitle,
      description: t.services.fairsDesc,
      highlights: [
        "Direct access to university admissions directors",
        "On-site pre-admissions evaluations and interviews",
        "Interactive seminars on visa rules & job markets",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-white via-emerald-50/30 to-slate-50 border-b border-slate-200/80 pt-12 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-emerald-700">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">Services</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <Badge variant="emerald">Comprehensive Advisory</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Our Full Suite of Global Services
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Polaris Green delivers structured pathways for international candidates and forward-thinking corporate clients. Explore our dedicated service tracks below.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={item.slug} className="p-8 sm:p-10 bg-white border border-slate-200 shadow-sm hover:border-emerald-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-8 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                            <Icon className="h-6 w-6" />
                          </div>
                          <Badge variant="slate">{item.badge}</Badge>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                          {item.title}
                        </h2>

                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-4 flex flex-col justify-center sm:items-start lg:items-end border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
                        <Button
                          href={item.href}
                          variant="primary"
                          size="md"
                          rightIcon={<ArrowRight className="h-4 w-4" />}
                          className="w-full sm:w-auto"
                        >
                          Detailed Overview
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Need a Customized Advisory Solution?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We frequently work with institutional partners, universities, and enterprise employers on tailored international mobility programs.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="lg">
                Speak With an Advisor
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
