"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, MapPin, Users, Sparkles, ArrowRight } from "lucide-react";

export function FairsSection() {
  const { t } = useLanguage();

  const upcomingFairs = [
    {
      id: "fair-1",
      title: "Japan & Asia Higher Education & Career Expo 2026",
      date: "November 14-15, 2026",
      location: "Metropolitan Convention Center & Virtual Stream",
      type: "Hybrid Event",
      universities: "45+ Universities & 20 Corporate Sponsors",
      spots: "Registration Free / RSVP Required",
    },
    {
      id: "fair-2",
      title: "European & UK University Admissions Summit",
      date: "December 05, 2026",
      location: "Grand International Hall, Central District",
      type: "In-Person",
      universities: "30+ UK & EU Academic Institutions",
      spots: "Fast-track Visa Seminars Included",
    },
    {
      id: "fair-3",
      title: "Global Tech Talent & Overseas Internship Fair",
      date: "January 18, 2027",
      location: "Digital Innovation Auditorium",
      type: "Virtual & In-Person",
      universities: "Top IT & Engineering Employers",
      spots: "Live Profile Screening & Pre-Interviews",
    },
  ];

  return (
    <section id="fairs" className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="blue">{t.fairs.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {t.fairs.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t.fairs.subtitle}
            </p>
          </div>
          <div>
            <Button href="#contact" variant="outline" size="md">
              Request Fair Hosting Info
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingFairs.map((fair) => (
            <Card key={fair.id} className="flex flex-col justify-between p-7 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Sparkles className="h-3 w-3 text-emerald-600" />
                    {fair.type}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    {fair.spots}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {fair.title}
                </h3>

                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{fair.date}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{fair.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{fair.universities}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Button
                  href="#contact"
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                  className="w-full"
                >
                  {t.fairs.registerBtn}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
