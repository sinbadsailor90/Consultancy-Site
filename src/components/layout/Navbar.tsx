"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  Compass,
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  Award,
  ChevronDown,
} from "lucide-react";

export function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceLinks = [
    {
      title: t.nav.recruitment,
      href: "/services/recruitment",
      icon: Briefcase,
      desc: "Local & international career placements",
    },
    {
      title: t.nav.studyAbroad,
      href: "/services/study-abroad",
      icon: GraduationCap,
      desc: "University admissions & visa guidance",
    },
    {
      title: t.nav.internships,
      href: "/services/internships",
      icon: Award,
      desc: "Practical placements in global firms",
    },
    {
      title: t.nav.training,
      href: "/services/corporate-training",
      icon: Building2,
      desc: "Corporate skills & executive workshops",
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform duration-200">
            <Compass className="h-6 w-6 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
              POLARIS<span className="text-emerald-600">GREEN</span>
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500">
              Consultancy & Career Pathways
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link
            href="/"
            className="hover:text-emerald-600 transition-colors py-2"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 py-2 hover:text-emerald-600 transition-colors cursor-pointer"
              aria-expanded={servicesOpen}
            >
              <span>{t.nav.services}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-emerald-600" : "text-slate-400"
                }`}
              />
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="space-y-1">
                  {serviceLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50 group"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="pt-1.5 mt-1 border-t border-slate-100">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block text-center text-xs font-semibold text-emerald-700 hover:text-emerald-800 py-1.5"
                    >
                      View All Services Overview →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/fairs"
            className="hover:text-emerald-600 transition-colors py-2"
          >
            {t.nav.fairs}
          </Link>

          <Link
            href="/contact"
            className="hover:text-emerald-600 transition-colors py-2"
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Action Controls & Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Button href="/contact" variant="primary" size="md">
            {t.nav.getStarted}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-emerald-600"
            >
              Home
            </Link>
            <div className="px-3 py-1 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span>{t.nav.services}</span>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] text-emerald-600 lowercase"
              >
                (view all)
              </Link>
            </div>
            {serviceLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
              >
                <item.icon className="h-4 w-4 text-emerald-600" />
                <span>{item.title}</span>
              </Link>
            ))}
            <Link
              href="/fairs"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-emerald-600"
            >
              {t.nav.fairs}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-emerald-600"
            >
              {t.nav.contact}
            </Link>
            <div className="pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
