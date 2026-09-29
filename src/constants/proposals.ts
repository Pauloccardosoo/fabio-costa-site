import {
  HeartPulse,
  GraduationCap,
  ShieldCheck,
  Bus,
  Briefcase,
  Cpu,
  Trophy,
  Palette,
  Wheat,
  Leaf,
  Users,
  Rocket,
} from "lucide-react";
import type { Proposal } from "@/types";

export const PROPOSALS: Proposal[] = [
  {
    slug: "saude",
    category: "Saúde",
    icon: HeartPulse,
    title: "Saúde pública com atendimento digno",
    description:
      "Ampliação de UPAs, redução de filas e telemedicina para regiões afastadas dos grandes centros.",
  },
  {
    slug: "educacao",
    category: "Educação",
    icon: GraduationCap,
    title: "Educação pública de qualidade",
    description:
      "Valorização de professores, reforma de escolas e bolsas de tecnologia para estudantes da rede pública.",
  },
  {
    slug: "seguranca",
    category: "Segurança",
    icon: ShieldCheck,
    title: "Segurança com inteligência e presença",
    description:
      "Investimento em policiamento comunitário, monitoramento por câmeras e apoio às famílias das vítimas.",
  },
  {
    slug: "mobilidade",
    category: "Mobilidade",
    icon: Bus,
    title: "Mobilidade urbana eficiente",
    description:
      "Modernização do transporte público, ciclovias integradas e tarifas mais justas para o trabalhador.",
  },
  {
    slug: "emprego",
    category: "Emprego",
    icon: Briefcase,
    title: "Geração de emprego e renda",
    description:
      "Parcerias com empresas locais, qualificação profissional gratuita e incentivo a pequenos negócios.",
  },
  {
    slug: "tecnologia",
    category: "Tecnologia",
    icon: Cpu,
    title: "Estado digital e transparente",
    description:
      "Serviços públicos 100% online, dados abertos e capacitação em tecnologia para jovens e servidores.",
  },
  {
    slug: "esporte",
    category: "Esporte",
    icon: Trophy,
    title: "Esporte como ferramenta social",
    description:
      "Revitalização de quadras e centros esportivos, com projetos sociais voltados para crianças e jovens.",
  },
  {
    slug: "cultura",
    category: "Cultura",
    icon: Palette,
    title: "Incentivo à cultura local",
    description:
      "Editais de fomento, revitalização de espaços culturais e apoio a artistas e produtores independentes.",
  },
  {
    slug: "agricultura",
    category: "Agricultura",
    icon: Wheat,
    title: "Apoio ao produtor rural",
    description:
      "Crédito facilitado, escoamento da produção e assistência técnica para pequenos e médios produtores.",
  },
  {
    slug: "meio-ambiente",
    category: "Meio Ambiente",
    icon: Leaf,
    title: "Sustentabilidade e preservação",
    description:
      "Programas de recuperação ambiental, incentivo à energia limpa e fiscalização contra o desmatamento.",
  },
  {
    slug: "juventude",
    category: "Juventude",
    icon: Users,
    title: "Oportunidades para a juventude",
    description:
      "Primeiro emprego, bolsas de estudo e espaços de convivência e cultura para os jovens do estado.",
  },
  {
    slug: "empreendedorismo",
    category: "Empreendedorismo",
    icon: Rocket,
    title: "Empreendedorismo sem burocracia",
    description:
      "Simplificação de processos, linhas de crédito acessíveis e apoio à formalização de negócios locais.",
  },
];
