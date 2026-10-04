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
  Building2,
  ChevronRight,
  CheckCircle2,
  Users2,
  Languages,
  Target,
  Presentation,
  ShieldCheck,
} from "lucide-react";

export default function CorporateTrainingPage() {
  const modules = [
    {
      title: "Cross-Cultural Communication & Business Etiquette",
      icon: Languages,
      desc: "Bridging East-West corporate communication gaps, meeting protocols, hierarchy navigation, and international negotiation styles.",
    },
    {
      title: "Business Japanese & Professional English Fluency",
      icon: Presentation,
      desc: "Tailored intensive language modules focusing on email composition, formal client presentations, and industry terminology.",
    },
    {
      title: "Global Leadership & Remote Team Management",
      icon: Users2,
      desc: "Empowering department leads and managers to lead distributed, culturally diverse engineering and operational teams.",
    },
    {
      title: "Compliance, Work Visa Regulations & Relocation HR",
      icon: ShieldCheck,
      desc: "Equipping HR teams with legal best practices for hiring foreign nationals, visa compliance, and cultural onboarding.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-100/60 via-white to-slate-50 border-b border-slate-200/80 pt-12 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-emerald-700">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <Link href="/services" className="hover:text-emerald-700">Services</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">Corporate Training</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="slate">Enterprise Upskilling</Badge>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Empowering Organizations to Thrive in Global Markets
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Polaris Green partners with multinational corporations, SMEs, and government agencies to upskill workforces in language fluency, cross-cultural competence, and executive leadership.
                </p>
                <div className="pt-2">
                  <Button href="#contact" variant="primary" size="lg">
                    Request Corporate Training Proposal
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">Delivery Formats</h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span><strong>On-Site Executive Workshops:</strong> Immersive bootcamps delivered at your headquarters.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span><strong>Virtual Live Masterclasses:</strong> Interactive cohorts across multiple international branch offices.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span><strong>Custom LMS E-Learning:</strong> Self-paced digital modules tailored with company-specific scenarios.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <Badge variant="emerald">Curriculum Highlights</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Core Training Programs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <Card key={idx} className="p-8 bg-slate-50 border-slate-200/90 flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                    </div>
                  </Card>
                );
              })}
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
