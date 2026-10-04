"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { SupportedLanguage } from "@/types";
import { translations, SUPPORTED_LANGUAGES } from "@/content/translations";

interface LanguageContextType {
  locale: SupportedLanguage;
  setLocale: (lang: SupportedLanguage) => void;
  t: (typeof translations)["en"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLanguage>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("polaris_lang") as SupportedLanguage;
    if (saved && ["en", "ja", "fr", "de"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (lang: SupportedLanguage) => {
    setLocaleState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("polaris_lang", lang);
    }
  };

  const currentTranslations = translations[locale] || translations.en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
