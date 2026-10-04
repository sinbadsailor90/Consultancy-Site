"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ChevronRight, ChevronDown, Mail, Phone, MapPin, Clock, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is the initial consultation free?",
      a: "Yes. Our initial profile assessment and counseling session is 100% free of charge. We evaluate your academic or professional background and provide a clear overview of suitable pathways before you make any commitment.",
    },
    {
      q: "How long does the study abroad visa application process take?",
      a: "Processing times vary by destination. For Japan, the Certificate of Eligibility (COE) typically takes 2–3 months before university term starts. For the UK, Canada, and EU, processing generally takes 3–8 weeks from document submission.",
    },
    {
      q: "Do you offer scholarship assistance for overseas students?",
      a: "Yes. Our advisors identify government scholarships (e.g. MEXT, JASSO, Chevening, DAAD) and university-specific tuition waivers, and assist you with application essays and scholarship interviews.",
    },
    {
      q: "Can corporate training programs be customized for our industry?",
      a: "Absolutely. All our corporate training curricula are tailored to your company's vertical—whether IT, healthcare, manufacturing, or financial services—including bilingual role-play scenarios.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-white via-emerald-50/20 to-slate-50 border-b border-slate-200/80 pt-12 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-emerald-700">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">Contact Us</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <Badge variant="emerald">Inquiries & Consultations</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Connect With Our Specialist Advisors
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you have questions about study visas, job recruitment, or registering for an upcoming fair, our team is here to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Form Component */}
        <ConsultationForm />

        {/* FAQ Section */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <Badge variant="slate">Frequently Asked Questions</Badge>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Got Questions? We Have Answers.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left font-semibold text-slate-900 text-sm sm:text-base cursor-pointer"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-emerald-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
