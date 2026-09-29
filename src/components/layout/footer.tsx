import { Camera, Users, Play, Music2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { StrokeMotif } from "@/components/ui/stroke-motif";
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/constants/site";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  Instagram: Camera,
  Facebook: Users,
  YouTube: Play,
  TikTok: Music2,
};

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-ink-950 text-mist-100">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 font-display text-lg font-extrabold">
            <StrokeMotif className="h-8 w-5 text-brand-500" />
            {SITE.candidateName}
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-200/60">
            {SITE.role} pelo {SITE.party} {SITE.partyNumber}. Compromisso, transparência
            e trabalho por um estado melhor.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label] ?? Camera;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-200 transition-colors hover:border-brand-500 hover:text-brand-500"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Mapa do site">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-mist-200/50">
            Navegação
          </h3>
          <ul className="mt-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-mist-200/70 transition-colors hover:text-brand-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-mist-200/50">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-mist-200/70">
            <li>{SITE.email}</li>
            <li>{SITE.phone}</li>
            <li>{SITE.city}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-mist-200/50">
            Receba novidades
          </h3>
          <p className="mt-4 text-sm text-mist-200/70">
            Assine a newsletter e acompanhe as ações da campanha.
          </p>
          <form className="mt-4 flex gap-2" aria-label="Assinar newsletter">
            <label htmlFor="footer-newsletter" className="sr-only">
              E-mail
            </label>
            <input
              id="footer-newsletter"
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-mist-200/40 focus-visible:border-brand-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Assinar
            </button>
          </form>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-mist-200/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.candidateName}. Todos os direitos reservados.</p>
          <a href="#" className="hover:text-brand-400">Política de Privacidade</a>
        </Container>
      </div>
    </footer>
  );
}
