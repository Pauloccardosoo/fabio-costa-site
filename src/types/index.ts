import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface Proposal {
  slug: string;
  category: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CampaignImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  status: "Concluído" | "Em andamento" | "Planejado";
  image: CampaignImage;
}

export interface NewsItem {
  slug: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  image: CampaignImage;
}

export interface AgendaEvent {
  date: string;
  time: string;
  city: string;
  title: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TransparencyItem {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
}
