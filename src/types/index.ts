export type ServiceCategory =
  | "recruitment"
  | "internships"
  | "study-abroad"
  | "corporate-training"
  | "educational-fairs"
  | "consultancy";

export interface ServiceItem {
  id: string;
  slug: string;
  category: ServiceCategory;
  titleKey: string;
  descriptionKey: string;
  iconName: string;
  features: string[];
  badge?: string;
}

export interface FairEvent {
  id: string;
  titleKey: string;
  date: string;
  location: string;
  type: "in-person" | "virtual" | "hybrid";
  attendeesCount?: string;
  descriptionKey: string;
  registrationOpen: boolean;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: ServiceCategory;
  destinationOrField?: string;
  message: string;
}

export type SupportedLanguage = "en" | "ja" | "fr" | "de";

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
}
