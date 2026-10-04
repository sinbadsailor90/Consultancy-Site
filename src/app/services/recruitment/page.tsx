"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import {
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Users,
  Building2,
  Globe2,
  Cpu,
  HeartPulse,
  Wrench,
  Hotel,
  ArrowRight,
} from "lucide-react";

export default function RecruitmentPage() {
  const { t } = useLanguage();

  const industries = [
    { title: "IT, AI & Software Engineering", icon: Cpu, roles: "Cloud Architects, Fullstack Devs, Data Engineers" },
    { title: "Healthcare & Caregiving", icon: HeartPulse, roles: "Registered Nurses, Physical Therapists, Clinical Staff" },
    { title: "Advanced Manufacturing & Engineering", icon: Wrench, roles: "Mechanical Engineers, CAD Specialists, QA Leads" },
    { title: "Hospitality & International Tourism", icon: Hotel, roles: "Hotel Managers, Bilingual Guest Relations, F&B Executives" },
  ];

  const steps = [
    { step: "01", title: "Profile & Skill Evaluation", desc: "We review CVs, language certifications, and professional credentials." },
    { step: "02", title: "Targeted Employer Matching", desc: "Direct submission to vetted domestic and multinational corporate partners." },
    { step: "03", title: "Interview Coaching & Prep", desc: "Mock interviews, cultural orientation, and presentation guidance." },
    { step: "04", title: "Offer, Visa & Onboarding", desc: "Contract review, working visa processing, and relocation support." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-b border-slate-200/80 pt-12 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-emerald-700">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <Link href="/services" className="hover:text-emerald-700">Services</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">Employment & Recruitment</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="emerald">Talent & Workforce Solutions</Badge>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Connecting World-Class Talent With Leading Employers
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Polaris Green bridges the international talent gap. We specialize in cross-border placement for specialized technical, healthcare, and engineering professionals seeking career opportunities across Asia, Europe, and North America.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button href="#contact" variant="primary" size="lg">
                    Submit Your Resume / Hire Talent
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Why Candidates & Employers Choose Us
                  </h3>
                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Direct Corporate Partnerships:</strong> Access unadvertised positions with verified corporate sponsors.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>End-to-End Visa Processing:</strong> In-house legal specialists handle work permits and visa clearances.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Cultural & Language Readiness:</strong> Pre-departure coaching tailored to Japanese and Western work cultures.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Industries */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <Badge variant="slate">Specialized Sectors</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Core Industries We Specialize In
              </h2>
              <p className="text-slate-600 text-sm">
                Our recruitment specialists have deep sector-specific insight and established networks in these key fields:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <Card key={i} className="p-6 bg-slate-50 border-slate-200/90">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-xs mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{ind.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{ind.roles}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-slate-50 border-y border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <Badge variant="emerald">Transparent Pathway</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                The Recruitment & Placement Process
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 relative">
                  <div className="text-3xl font-black text-emerald-600/30">{s.step}</div>
                  <h4 className="text-base font-bold text-slate-900">{s.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Anchor */}
        <ConsultationForm />
      </main>

      <Footer />
    </div>
  );
}
