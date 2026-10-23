/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu compressor',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
  /** Rótulo do CTA do header no desktop, do mockup do cliente (21/10/2026). */
  cta: 'Fale com um especialista',
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  /** Frase de efeito na pílula acima do título (pedido do usuário, 23/10/2026). */
  pill: 'Mais ar. Menos custo.',
  /**
   * H1 da página, agora a manchete grande: o produto em destaque (pedido do usuário,
   * 23/10/2026). É o que o check:lp confere contra a palavra-chave da campanha.
   * `highlight` é o trecho final em amarelo; `tail` completa a frase comercial, também em amarelo.
   */
  title: 'Compressores de parafuso Schulz',
  highlight: 'Schulz',
  tail: 'para a sua indústria.',
  text: 'Mais ar comprimido com menos custo na sua operação: a Falanga é distribuidora autorizada Schulz, com tecnologia de ponta e suporte técnico especializado.',
  banner: {
    src: heroBg,
    alt: 'Compressores de parafuso Schulz SRP 4025, SRP 4050 e SRP 5100 lado a lado',
  },
  points: [
    { icon: 'badge-check', line1: 'Distribuidor', line2: 'autorizado' },
    { icon: 'truck', line1: 'Fornecimento', line2: 'no Nordeste' },
    { icon: 'gear', line1: 'Suporte técnico', line2: 'especializado' },
    { icon: 'shield-check', line1: '40 anos de', line2: 'experiência' },
  ],
} as const satisfies {
  title: string
  pill: string
  highlight: string
  tail: string
  text: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de compressores de parafuso.',
  text: 'Conte a demanda de ar da sua planta e receba uma proposta Schulz sob medida. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [{ icon: 'shield', label: 'Mais de 40 anos de mercado' }],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly TrustItem[]
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
