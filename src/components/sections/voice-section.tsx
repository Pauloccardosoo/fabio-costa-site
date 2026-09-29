"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Sparkles } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FieldLabel, FieldError, Input, Textarea, Select } from "@/components/ui/form-fields";
import { Reveal } from "@/components/ui/reveal";

const MESSAGE_MAX = 600;

const voiceSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  city: z.string().min(2, "Informe sua cidade."),
  phone: z.string().optional(),
  email: z.string().email("Informe um e-mail válido."),
  subject: z.string().min(3, "Informe o assunto."),
  category: z.enum([
    "Dúvida",
    "Sugestão",
    "Reclamação",
    "Denúncia",
    "Proposta",
    "Convite",
    "Outro",
  ]),
  message: z
    .string()
    .min(10, "Sua mensagem precisa ter pelo menos 10 caracteres.")
    .max(MESSAGE_MAX, `Sua mensagem pode ter no máximo ${MESSAGE_MAX} caracteres.`),
});

type VoiceFormValues = z.infer<typeof voiceSchema>;

export function VoiceSection() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<VoiceFormValues>({
    resolver: zodResolver(voiceSchema),
    defaultValues: { category: "Sugestão" },
  });

  const messageValue = watch("message") ?? "";

  const onSubmit = async (data: VoiceFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Voice form submission", data);
    toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    reset();
  };

  return (
    <Section id="fale-com-candidato" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Participação popular"
                title="Sua voz também faz parte da mudança"
                description="Dúvidas, sugestões, denúncias ou propostas: cada mensagem ajuda a construir um mandato mais próximo da população."
              />
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-500/20 bg-brand-50 p-5 dark:border-brand-500/30 dark:bg-brand-500/10">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                <p className="text-sm leading-relaxed text-brand-700 dark:text-brand-400">
                  Todas as mensagens são lidas pela equipe da campanha e organizadas por
                  categoria para dar a resposta mais adequada.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border border-border-subtle bg-background p-6 shadow-xl shadow-ink-950/[0.03] sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="voice-name">Nome</FieldLabel>
                  <Input
                    id="voice-name"
                    invalid={!!errors.name}
                    aria-describedby={errors.name ? "voice-name-error" : undefined}
                    {...register("name")}
                  />
                  <FieldError id="voice-name-error" message={errors.name?.message} />
                </div>
                <div>
                  <FieldLabel htmlFor="voice-city">Cidade</FieldLabel>
                  <Input
                    id="voice-city"
                    invalid={!!errors.city}
                    aria-describedby={errors.city ? "voice-city-error" : undefined}
                    {...register("city")}
                  />
                  <FieldError id="voice-city-error" message={errors.city?.message} />
                </div>
                <div>
                  <FieldLabel htmlFor="voice-phone" optional>Telefone</FieldLabel>
                  <Input id="voice-phone" type="tel" {...register("phone")} />
                </div>
                <div>
                  <FieldLabel htmlFor="voice-email">E-mail</FieldLabel>
                  <Input
                    id="voice-email"
                    type="email"
                    invalid={!!errors.email}
                    aria-describedby={errors.email ? "voice-email-error" : undefined}
                    {...register("email")}
                  />
                  <FieldError id="voice-email-error" message={errors.email?.message} />
                </div>
                <div>
                  <FieldLabel htmlFor="voice-subject">Assunto</FieldLabel>
                  <Input
                    id="voice-subject"
                    invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "voice-subject-error" : undefined}
                    {...register("subject")}
                  />
                  <FieldError id="voice-subject-error" message={errors.subject?.message} />
                </div>
                <div>
                  <FieldLabel htmlFor="voice-category">Categoria</FieldLabel>
                  <Select id="voice-category" {...register("category")}>
                    {["Dúvida", "Sugestão", "Reclamação", "Denúncia", "Proposta", "Convite", "Outro"].map(
                      (option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    )}
                  </Select>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="voice-message">Mensagem</FieldLabel>
                  <span
                    className="text-xs text-ink-500"
                    aria-live="polite"
                  >
                    {messageValue.length}/{MESSAGE_MAX}
                  </span>
                </div>
                <Textarea
                  id="voice-message"
                  maxLength={MESSAGE_MAX}
                  invalid={!!errors.message}
                  aria-describedby={errors.message ? "voice-message-error" : undefined}
                  {...register("message")}
                />
                <FieldError id="voice-message-error" message={errors.message?.message} />
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
