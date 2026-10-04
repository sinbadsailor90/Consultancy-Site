import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Polaris Green Consultancy | Employment, Study Abroad & Education Fairs",
  description:
    "Specialized consultancy for global employment, overseas student recruitment, visa assistance, corporate training, and educational fairs.",
  keywords: [
    "employment",
    "recruitment",
    "internships",
    "student recruitment",
    "study abroad visa assistance",
    "corporate training",
    "educational fairs",
    "consultancy",
  ],
  openGraph: {
    title: "Polaris Green Consultancy | Global Education & Career Pathways",
    description:
      "Connecting ambition with global opportunity: recruitment, student visa consulting, and international educational expos.",
    siteName: "Polaris Green Consultancy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
