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
  GraduationCap,
  ChevronRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Compass,
  Plane,
  Building,
  Award,
} from "lucide-react";

export default function StudyAbroadPage() {
  const destinations = [
    { country: "Japan", flag: "🇯🇵", desc: "Top national & private universities with English and Japanese tracks. MEXT & JASSO scholarship guidance.", intakes: "April & October" },
    { country: "United Kingdom", flag: "🇬🇧", desc: "Russell Group universities, 1-year Master's programs, and Graduate Route post-study work visa support.", intakes: "September & January" },
    { country: "Canada", flag: "🇨🇦", desc: "High quality education, PGWP (Post-Graduation Work Permit) eligible universities and public colleges.", intakes: "Fall & Winter" },
    { country: "Germany & Europe", flag: "🇩🇪", desc: "Low-to-no tuition universities, leading STEM degrees, and Schengen mobility privileges.", intakes: "Winter & Summer" },
    { country: "United States", flag: "🇺🇸", desc: "Top Ivy League and state institutions, OPT extension support for STEM students, and merit aid.", intakes: "Fall & Spring" },
    { country: "Australia", flag: "🇦🇺", desc: "World-ranked institutions, regional post-study work rights, and industry-oriented degrees.", intakes: "February & July" },
  ];

  const visaServices = [
    { title: "University Admissions Matchmaking", desc: "Course selection matching your academic record, budget, and long-term residency or career goals." },
    { title: "SOP & Recommendation Letter Review", desc: "Professional editing by native academic advisors to ensure compelling motivation letters." },
    { title: "Financial Documentation Auditing", desc: "Thorough auditing of bank statements, sponsorship affidavits, and source of income documents." },
    { title: "Embassy Mock Interview Coaching", desc: "1-on-1 interview simulations with former visa officers and immigration specialists." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50/50 via-white to-slate-50 border-b border-slate-200/80 pt-12 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-emerald-700">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <Link href="/services" className="hover:text-emerald-700">Services</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">Study Abroad & Visa Assistance</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="emerald">Academic Placement & Visas</Badge>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Your Trusted Bridge to Prestigious Global Universities
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Navigating international university applications and student visa regulations requires precision. Polaris Green provides certified guidance from initial university selection to COE (Certificate of Eligibility) and visa approval.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button href="#contact" variant="primary" size="lg">
                    Book Free Academic Counseling
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <div className="text-3xl font-extrabold text-emerald-600">98.4%</div>
                      <div className="text-xs text-slate-500 uppercase font-semibold">Visa Success Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-slate-900">250+</div>
                      <div className="text-xs text-slate-500 uppercase font-semibold">Partner Campuses</div>
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-slate-900">$2.5M+</div>
                      <div className="text-xs text-slate-500 uppercase font-semibold">Scholarships Won</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our advisors maintain direct contact with university admissions committees and immigration authorities to guarantee seamless applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Destinations */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <Badge variant="blue">Popular Study Hubs</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Leading Destinations We Support
              </h2>
              <p className="text-slate-600 text-sm">
                From undergraduate degrees to master’s and PhD research fellowships:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((d, i) => (
                <Card key={i} className="p-6 bg-slate-50 border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{d.flag}</span>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                      Intakes: {d.intakes}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{d.country}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Full Visa Assistance Services */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <Badge variant="emerald">Comprehensive Checklist</Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                How We Protect Your Application
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visaServices.map((v, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900">{v.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
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
