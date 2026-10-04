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
  Award,
  ChevronRight,
  CheckCircle2,
  Calendar,
  DollarSign,
  Building,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function InternshipsPage() {
  const benefits = [
    { title: "Paid & Stipend-Backed Placements", desc: "Gain competitive monthly stipends to offset living costs in top global business hubs.", icon: DollarSign },
    { title: "Academic Credit Accreditation", desc: "We liaise with your home university registrar to ensure all hours convert toward your degree.", icon: GraduationCap },
    { title: "High Conversion to Full-time Jobs", desc: "Over 68% of our international interns receive return job offers or company sponsorship.", icon: Briefcase },
    { title: "Housing & Relocation Assistance", desc: "Access to vetted company-arranged residences, SIM cards, and local community mentors.", icon: Building },
  ];

  const tracks = [
    {
      title: "Technology & Software Development",
      duration: "3 - 12 Months",
      locations: "Tokyo, London, Singapore, Berlin",
      skills: "Full-Stack Development, Machine Learning, Cloud DevOps, UI/UX",
    },
    {
      title: "Finance, Banking & Business Analytics",
      duration: "6 - 12 Months",
      locations: "Frankfurt, London, Dubai, Tokyo",
      skills: "Financial Modeling, Risk Analysis, Market Research, FinTech",
    },
    {
      title: "Hospitality Management & Culinary Arts",
      duration: "6 - 18 Months",
      locations: "Japan (Ryokans & 5-Star Hotels), Switzerland, Canada",
      skills: "Luxury Guest Operations, F&B Administration, Bilingual Concierge",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50/40 via-white to-slate-50 border-b border-slate-200/80 pt-12 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-emerald-700">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <Link href="/services" className="hover:text-emerald-700">Services</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">Global Internships</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="blue">Career Fast-Track</Badge>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Launch Your Career With Prestigious Multinational Internships
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Gain genuine on-the-job experience at verified international firms. Our structured internship tracks provide mentorship, cross-cultural immersion, and direct pathways to full-time overseas employment.
                </p>
                <div className="pt-2">
                  <Button href="#contact" variant="primary" size="lg">
                    Apply for Next Internship Cohort
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 space-y-5">
                  <h3 className="text-lg font-bold text-slate-900">At a Glance</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="text-2xl font-bold text-emerald-600">68%</div>
                      <div className="text-xs text-slate-500 mt-1">Full-time Offer Rate</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="text-2xl font-bold text-slate-900">3 - 12 mo</div>
                      <div className="text-xs text-slate-500 mt-1">Flexible Durations</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed text-center">
                    All partner companies provide formal letters of evaluation and professional reference verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Benefits */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <Badge variant="emerald">Program Value</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Why Complete an International Internship?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <Card key={idx} className="p-6 bg-slate-50 border-slate-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-xs mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{b.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internship Tracks */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <Badge variant="blue">Available Tracks</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Current Placement Disciplines
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {tracks.map((tr, i) => (
                <div key={i} className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-bold text-slate-900">{tr.title}</h4>
                      <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full">
                        {tr.duration}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500"><strong>Locations:</strong> {tr.locations}</p>
                    <p className="text-xs text-slate-600"><strong>Key Focus:</strong> {tr.skills}</p>
                  </div>
                  <Button href="#contact" variant="outline" size="sm" className="shrink-0">
                    Inquire for Track
                  </Button>
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
