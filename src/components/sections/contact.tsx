"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FieldLabel, FieldError, Input, Textarea } from "@/components/ui/form-fields";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/constants/site";

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  phone: z.string().min(8, "Informe um telefone válido."),
  email: z.string().email("Informe um e-mail válido."),
  message: z.string().min(10, "Escreva uma mensagem com pelo menos 10 caracteres."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Contact form submission", data);
    toast.success("Recebemos sua mensagem! Retornaremos em breve.");
    reset();
  };

  return (
    <Section id="contato">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos construir esse projeto juntos"
            description="Fale diretamente com a equipe da campanha através dos canais abaixo ou pelo formulário."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.05} className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border-subtle">
              <div
                role="img"
                aria-label={`Mapa aproximado da região de atuação em ${SITE.city}`}
                className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,var(--color-mist-100),var(--color-mist-200))] dark:bg-[linear-gradient(135deg,#1d1f26,#101114)]"
              >
                <MapPin className="h-8 w-8 text-brand-500" aria-hidden />
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-ink-700 dark:text-mist-200/80">
                <Mail className="h-4 w-4 text-brand-500" aria-hidden />
                {SITE.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-700 dark:text-mist-200/80">
                <Phone className="h-4 w-4 text-brand-500" aria-hidden />
                {SITE.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-700 dark:text-mist-200/80">
                <MapPin className="h-4 w-4 text-brand-500" aria-hidden />
                {SITE.city}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border border-border-subtle bg-background p-6 shadow-xl shadow-ink-950/[0.03] sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="contact-name">Nome</FieldLabel>
                  <Input
                    id="contact-name"
                    invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    {...register("name")}
                  />
                  <FieldError id="contact-name-error" message={errors.name?.message} />
                </div>
                <div>
                  <FieldLabel htmlFor="contact-phone">Telefone</FieldLabel>
                  <Input
                    id="contact-phone"
                    type="tel"
                    invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    {...register("phone")}
                  />
                  <FieldError id="contact-phone-error" message={errors.phone?.message} />
                </div>
              </div>

              <div className="mt-5">
                <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                <Input
                  id="contact-email"
                  type="email"
                  invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  {...register("email")}
                />
                <FieldError id="contact-email-error" message={errors.email?.message} />
              </div>

              <div className="mt-5">
                <FieldLabel htmlFor="contact-message">Mensagem</FieldLabel>
                <Textarea
                  id="contact-message"
                  invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  {...register("message")}
                />
                <FieldError id="contact-message-error" message={errors.message?.message} />
              </div>

              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                <Send className="h-4 w-4" aria-hidden />
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
