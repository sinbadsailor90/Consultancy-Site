"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-500/20">
                <Compass className="h-6 w-6 stroke-[2.2]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                POLARIS<span className="text-emerald-400">GREEN</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Accredited International Education & Career Advisory
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/fairs" className="hover:text-emerald-400 transition-colors">
                  {t.nav.fairs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.servicesHeading}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/services/recruitment" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>{t.nav.recruitment}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/study-abroad" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>{t.nav.studyAbroad}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/internships" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>{t.nav.internships}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-training" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>{t.nav.training}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contactHeading}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Global Advisory Center, Financial & Academic District</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@polarisgreen.com" className="hover:text-white transition-colors">
                  info@polarisgreen.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="tel:+18005557652" className="hover:text-white transition-colors">
                  +1 (800) 555-POLARIS
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
