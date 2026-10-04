"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FAIRS_DATA, FairEventItem } from "@/data/fairs";
import {
  CalendarDays,
  MapPin,
  Clock,
  Users,
  ChevronRight,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function FairsPage() {
  const [filter, setFilter] = useState<"All" | "Hybrid" | "In-Person" | "Virtual">("All");

  const filteredFairs =
    filter === "All"
      ? FAIRS_DATA
      : FAIRS_DATA.filter((fair) => fair.type === filter);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-white via-blue-50/20 to-slate-50 border-b border-slate-200/80 pt-12 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-emerald-700">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">Educational Fairs & Expos</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <Badge variant="blue">Expos & International Summits</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Global Education & Career Expos
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Connect directly with university admissions officers, consular representatives, and international recruiters. Explore our upcoming fairs or register to exhibit.
              </p>
            </div>
          </div>
        </section>

        {/* Event List Section with Filtering */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                {(["All", "Hybrid", "In-Person", "Virtual"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      filter === tab
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {tab} Events
                  </button>
                ))}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Showing {filteredFairs.length} of {FAIRS_DATA.length} events
              </div>
            </div>

            {/* Fairs Cards */}
            <div className="space-y-8">
              {filteredFairs.map((fair) => (
                <Card key={fair.id} className="p-8 sm:p-10 bg-white border border-slate-200 shadow-sm hover:border-emerald-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <Sparkles className="h-3 w-3 text-emerald-600" />
                          {fair.type}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {fair.partnerCount}
                        </span>
                        {fair.featured && (
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                            Flagship Expo
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                        {fair.title}
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {fair.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span className="font-semibold text-slate-800">{fair.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{fair.time}</span>
                        </div>
                        <div className="flex items-start gap-2 sm:col-span-2">
                          <MapPin className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{fair.location}</span>
                        </div>
                      </div>

                      {/* Agenda */}
                      <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100 text-xs">
                        <div className="font-semibold text-slate-800 uppercase tracking-wider text-[11px]">
                          Event Agenda Highlights
                        </div>
                        {fair.agenda.map((item, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-slate-600">
                            <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                      <div className="w-full text-left lg:text-right space-y-2">
                        <div className="text-xs uppercase font-semibold text-slate-400">
                          Registration Status
                        </div>
                        <div className="text-base font-bold text-emerald-700">
                          {fair.registrationOpen ? "Open for Attendees" : "Fully Booked"}
                        </div>
                        <p className="text-xs text-slate-500">
                          Free entry. Priority seating for pre-registered students & professionals.
                        </p>
                      </div>

                      <Button
                        href="#contact"
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowRight className="h-4 w-4" />}
                        className="w-full"
                      >
                        Reserve Your Free Pass
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exhibitor Banner */}
        <section className="bg-white py-16 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl">
                <Badge variant="emerald">For Institutions & Sponsors</Badge>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Interested in Exhibiting at Our Next Fair?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We host delegations from over 50 universities and global corporate recruiters. Inquire about booth packages, sponsored stages, and direct candidate matchmaking.
                </p>
              </div>
              <Button href="#contact" variant="primary" size="lg" className="shrink-0">
                Request Exhibitor Deck
              </Button>
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
