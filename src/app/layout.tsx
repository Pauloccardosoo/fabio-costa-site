import type { Metadata } from "next";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/hooks/use-theme";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { CAMPAIGN_IMAGES } from "@/constants/images";
import { SITE } from "@/constants/site";
import "./globals.css";

const siteUrl = "https://fabiocosta.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.candidateName} — ${SITE.role}`,
    template: `%s | ${SITE.candidateName}`,
  },
  description:
    "Compromisso, transparência e trabalho por um estado melhor. Conheça as propostas, projetos e a agenda de Fabio Costa, pré-candidato a Deputado Estadual pelo Avante 70.",
  keywords: [
    "Fabio Costa",
    "Deputado Estadual",
    "Avante 70",
    "candidato",
    "eleições",
    "Rio de Janeiro",
  ],
  authors: [{ name: SITE.candidateName }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: SITE.candidateName,
    title: `${SITE.candidateName} — ${SITE.role}`,
    description: "Compromisso, transparência e trabalho por um estado melhor.",
    images: [
      {
        url: CAMPAIGN_IMAGES.hero.src,
        width: 1200,
        height: 630,
        alt: CAMPAIGN_IMAGES.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.candidateName} — ${SITE.role}`,
    description: "Compromisso, transparência e trabalho por um estado melhor.",
    images: [CAMPAIGN_IMAGES.hero.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.candidateName,
    jobTitle: SITE.role,
    memberOf: {
      "@type": "PoliticalParty",
      name: `Avante ${SITE.partyNumber}`,
    },
    url: siteUrl,
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LoadingScreen />
          <a href="#main-content" className="skip-link">
            Pular para o conteúdo
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingActions />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
