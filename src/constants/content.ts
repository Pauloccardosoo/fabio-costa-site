import {
  FileText,
  FolderOpen,
  CalendarCheck2,
  HandHeart,
  ClipboardList,
  HelpCircle,
  Download,
} from "lucide-react";
import { CAMPAIGN_IMAGES } from "@/constants/images";
import type {
  Project,
  NewsItem,
  AgendaEvent,
  Testimonial,
  FaqItem,
  TransparencyItem,
  StatItem,
} from "@/types";

export const STATS: StatItem[] = [
  { label: "anos de experiência pública", value: 20, suffix: "+" },
  { label: "projetos apoiados", value: 50, suffix: "+" },
  { label: "comunidades visitadas", value: 100, suffix: "+" },
  { label: "compromisso com o mandato", value: 100, suffix: "%" },
];

export const PROJECTS: Project[] = [
  {
    slug: "requalificacao-upas",
    title: "Requalificação de UPAs regionais",
    description:
      "Reforma estrutural e novos equipamentos em unidades de pronto atendimento na Baixada Fluminense.",
    status: "Em andamento",
    image: CAMPAIGN_IMAGES.eventoAuditorio,
  },
  {
    slug: "internet-nas-escolas",
    title: "Internet de qualidade nas escolas",
    description:
      "Instalação de fibra óptica e laboratórios de informática em 40 escolas estaduais.",
    status: "Concluído",
    image: CAMPAIGN_IMAGES.jiuJitsuMedalhas,
  },
  {
    slug: "corredor-ciclovias",
    title: "Corredor de ciclovias integradas",
    description:
      "Novo trajeto cicloviário conectando bairros periféricos ao centro, com estações de bicicletas.",
    status: "Planejado",
    image: CAMPAIGN_IMAGES.abracoMicrofone,
  },
  {
    slug: "qualifica-jovem",
    title: "Programa Qualifica Jovem",
    description:
      "Cursos profissionalizantes gratuitos com garantia de estágio para jovens de 16 a 24 anos.",
    status: "Em andamento",
    image: CAMPAIGN_IMAGES.jiuJitsuComunidade,
  },
];

export const NEWS: NewsItem[] = [
  {
    slug: "visita-baixada-fluminense",
    category: "Campanha",
    title: "Fabio Costa visita comunidades da Baixada Fluminense",
    summary:
      "Agenda incluiu reuniões com moradores e lideranças locais para ouvir demandas prioritárias da região.",
    date: "24 jun 2026",
    readTime: "4 min",
    image: CAMPAIGN_IMAGES.abracoMicrofone,
  },
  {
    slug: "filiacao-avante",
    category: "Partido",
    title: "Avante confirma pré-candidatura de Fabio Costa",
    summary:
      "Convenção estadual do partido oficializa apoio à candidatura para as eleições deste ano.",
    date: "15 jun 2026",
    readTime: "3 min",
    image: CAMPAIGN_IMAGES.filiacaoAvante,
  },
  {
    slug: "audiencia-mobilidade",
    category: "Política Estadual",
    title: "Audiência pública debate mobilidade urbana no estado",
    summary:
      "Especialistas e população discutiram propostas para melhorar o transporte público metropolitano.",
    date: "02 jun 2026",
    readTime: "5 min",
    image: CAMPAIGN_IMAGES.eventoAuditorio,
  },
  {
    slug: "entrevista-radio",
    category: "Entrevistas",
    title: "Em entrevista, candidato detalha plano para educação",
    summary:
      "Fabio Costa apresentou metas para valorização de professores e infraestrutura escolar.",
    date: "28 mai 2026",
    readTime: "6 min",
    image: CAMPAIGN_IMAGES.placaAvante70,
  },
  {
    slug: "evento-empreendedores",
    category: "Eventos",
    title: "Encontro reúne pequenos empreendedores da região",
    summary:
      "Evento discutiu crédito facilitado e simplificação de processos para novos negócios.",
    date: "20 mai 2026",
    readTime: "3 min",
    image: CAMPAIGN_IMAGES.jiuJitsuMedalhas,
  },
];

export const AGENDA: AgendaEvent[] = [
  {
    date: "08 jul 2026",
    time: "09h00",
    city: "Nova Iguaçu, RJ",
    title: "Café com lideranças comunitárias",
  },
  {
    date: "12 jul 2026",
    time: "14h00",
    city: "Duque de Caxias, RJ",
    title: "Visita técnica à UPA regional",
  },
  {
    date: "19 jul 2026",
    time: "10h00",
    city: "São Gonçalo, RJ",
    title: "Roda de conversa com jovens empreendedores",
  },
  {
    date: "25 jul 2026",
    time: "16h00",
    city: "Niterói, RJ",
    title: "Audiência pública sobre mobilidade urbana",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marina Alves",
    role: "Liderança comunitária, Nova Iguaçu",
    quote:
      "Fabio esteve presente nos momentos mais difíceis da nossa comunidade e sempre ouviu antes de agir.",
  },
  {
    name: "Carlos Eduardo",
    role: "Pequeno empresário",
    quote:
      "O apoio que recebi para formalizar meu negócio mudou a realidade da minha família.",
  },
  {
    name: "Beatriz Santos",
    role: "Professora da rede estadual",
    quote:
      "É raro ver um candidato que realmente entende os desafios de quem está na sala de aula todos os dias.",
  },
];

export const FAQ: FaqItem[] = [
  {
    question: "Como posso apoiar a campanha?",
    answer:
      "Você pode se filiar ao Avante, participar dos eventos da agenda ou compartilhar nossas propostas nas redes sociais.",
  },
  {
    question: "Onde posso acompanhar as propostas completas?",
    answer:
      "Todas as propostas estão detalhadas na seção Propostas, organizadas por tema e atualizadas periodicamente.",
  },
  {
    question: "Como envio uma sugestão ou denúncia?",
    answer:
      "Utilize o formulário na seção 'Sua voz também faz parte da mudança', escolhendo a categoria correspondente.",
  },
  {
    question: "A campanha presta contas publicamente?",
    answer:
      "Sim. Todos os documentos de prestação de contas ficam disponíveis na seção de Transparência deste site.",
  },
];

export const TRANSPARENCY_ITEMS: TransparencyItem[] = [
  {
    icon: FileText,
    title: "Prestação de Contas",
    description: "Relatórios financeiros da campanha atualizados mensalmente.",
    cta: "Ver documentos",
  },
  {
    icon: FolderOpen,
    title: "Documentos Oficiais",
    description: "Registros, certidões e documentação institucional da candidatura.",
    cta: "Acessar arquivos",
  },
  {
    icon: CalendarCheck2,
    title: "Agenda Pública",
    description: "Compromissos oficiais e visitas realizadas em todo o estado.",
    cta: "Ver agenda",
  },
  {
    icon: HandHeart,
    title: "Projetos Apoiados",
    description: "Lista de projetos comunitários que já receberam apoio direto.",
    cta: "Conhecer projetos",
  },
  {
    icon: ClipboardList,
    title: "Compromissos Assumidos",
    description: "Metas públicas assumidas com a população para o mandato.",
    cta: "Ver compromissos",
  },
  {
    icon: HelpCircle,
    title: "Perguntas Frequentes",
    description: "Respostas claras sobre a candidatura e a atuação do mandato.",
    cta: "Tirar dúvidas",
  },
  {
    icon: Download,
    title: "Materiais para Download",
    description: "Folders, currículo e materiais oficiais de apoio à campanha.",
    cta: "Baixar materiais",
  },
];
