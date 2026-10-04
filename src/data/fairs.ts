export interface FairEventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  city: string;
  country: string;
  type: "Hybrid" | "In-Person" | "Virtual";
  partnerCount: string;
  registrationOpen: boolean;
  featured: boolean;
  description: string;
  agenda: string[];
}

export const FAIRS_DATA: FairEventItem[] = [
  {
    id: "fair-2026-japan-asia",
    title: "Japan & Asia Higher Education & Career Expo 2026",
    date: "November 14-15, 2026",
    time: "10:00 AM – 5:00 PM JST",
    location: "Metropolitan Convention Center & Global Virtual Livestream",
    city: "Tokyo",
    country: "Japan",
    type: "Hybrid",
    partnerCount: "45+ Universities & 20 Corporate Sponsors",
    registrationOpen: true,
    featured: true,
    description:
      "Our premier annual expo bringing together top universities from Japan, Singapore, and South Korea alongside multinational employers seeking bilingual graduates.",
    agenda: [
      "10:00 AM: Keynote on Global Talent Mobility & Immigration Reforms",
      "11:30 AM: University Deans Panel & Direct Q&A",
      "02:00 PM: 1-on-1 Document Review & Resume Auditing Booths",
      "04:00 PM: Live Visa Assessment Clinic with Certified Counselors",
    ],
  },
  {
    id: "fair-2026-europe-uk",
    title: "European & UK University Admissions Summit 2026",
    date: "December 05, 2026",
    time: "11:00 AM – 6:00 PM GMT",
    location: "Grand International Hall, Central Business District",
    city: "London",
    country: "United Kingdom",
    type: "In-Person",
    partnerCount: "30+ UK & EU Universities",
    registrationOpen: true,
    featured: false,
    description:
      "Exclusive summit focusing on postgraduate programs, STEM degrees, Erasmus opportunities, and post-study work visa conversion.",
    agenda: [
      "11:00 AM: Admissions Requirements & Standardized Testing Breakdown",
      "01:00 PM: Scholarship Strategies & Grant Writing Workshop",
      "03:30 PM: Embassy Visa Guidance & Graduate Route Seminar",
    ],
  },
  {
    id: "fair-2027-global-tech",
    title: "Global Tech Talent & Overseas Internship Fair 2027",
    date: "January 18, 2027",
    time: "9:00 AM – 4:00 PM EST",
    location: "Digital Innovation Auditorium & Metaverse Pavilion",
    city: "Global Online",
    country: "Virtual",
    type: "Virtual",
    partnerCount: "50+ Global Tech Companies & Startups",
    registrationOpen: true,
    featured: false,
    description:
      "Direct screening and pre-interviews for software developers, data scientists, and engineers seeking overseas internships and full-time employment.",
    agenda: [
      "09:30 AM: Tech Hiring Trends & Salary Benchmarks",
      "11:00 AM: Virtual Speed-Interview Booths with Senior Engineering Managers",
      "02:00 PM: Work Visa Sponsorship Clinics for Tech Professionals",
    ],
  },
];
