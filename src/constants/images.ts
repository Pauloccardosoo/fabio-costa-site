import type { CampaignImage } from "@/types";

export const CAMPAIGN_IMAGES = {
  hero: {
    src: "/images/campaign/fabio-oficial.png",
    alt: "Fabio Costa, pré-candidato a Deputado Estadual",
  },
  about: {
    src: "/images/campaign/fabio-comunidade.png",
    alt: "Fabio Costa em encontro com apoiadores",
  },
  eventoAuditorio: {
    src: "/images/campaign/evento-auditorio.png",
    alt: "Fabio Costa em evento com lideranças no auditório",
  },
  placaAvante70: {
    src: "/images/campaign/placa-avante-70.png",
    alt: "Placa iluminada Avante 70 Rio de Janeiro",
  },
  jiuJitsuComunidade: {
    src: "/images/campaign/jiu-jitsu-comunidade.png",
    alt: "Fabio Costa com equipe de jiu-jitsu comunitário",
  },
  jiuJitsuMedalhas: {
    src: "/images/campaign/jiu-jitsu-medalhas.png",
    alt: "Grupo de jiu-jitsu com medalhas após competição",
  },
  filiacaoAvante: {
    src: "/images/campaign/filiacao-avante.png",
    alt: "Fabio Costa em evento de filiação do Avante",
  },
  abracoMicrofone: {
    src: "/images/campaign/abraco-microfone.png",
    alt: "Fabio Costa em abraço com apoiador durante evento",
  },
  retratoEscritorio: {
    src: "/images/campaign/retrato-escritorio.png",
    alt: "Fabio Costa em retrato no escritório",
  },
} as const satisfies Record<string, CampaignImage>;
