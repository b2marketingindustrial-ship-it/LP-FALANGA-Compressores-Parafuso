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
  /** Área atendida ao lado da tagline (desktop): o hero do mockup de 22/10/2026 não a traz mais. */
  area: 'Fortaleza e Recife · Todo o Nordeste',
  /** Rótulo do CTA do header no desktop, do mockup do cliente (21/10/2026). */
  cta: 'Fale com um especialista',
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  /**
   * H1 da página, exibido como a linha de abertura acima da manchete (mockup do cliente,
   * 22/10/2026). É o que o check:lp confere contra a palavra-chave da campanha: o mockup
   * diz "Compressores Schulz", e o "de parafuso" fica porque é a palavra-chave.
   */
  title: 'Compressores de parafuso Schulz',
  /** Manchete visual, uma linha por item: primeiro em branco, depois em amarelo. */
  headline: ['Mais ar.'],
  highlight: ['Menos custo', 'na sua indústria.'],
  text: 'Somos distribuidores Schulz: compressores com tecnologia de ponta e suporte técnico especializado para a sua indústria.',
  banner: {
    src: heroBg,
    alt: 'Compressores Schulz CSA 7,5 Twister, Bravo CSL 20 BR e MSV 20 Max em galpão industrial',
  },
  points: [
    { icon: 'badge-check', line1: 'Distribuidor', line2: 'Schulz' },
    { icon: 'truck', line1: 'Fornecimento', line2: 'no Nordeste' },
    { icon: 'gear', line1: 'Suporte técnico', line2: 'especializado' },
    { icon: 'shield-check', line1: '40 anos de', line2: 'experiência' },
  ],
  /** Cabeçalho do card do chat, acima do shortcode (mockup do cliente, 22/10/2026). */
  card: {
    title: 'Solicite sua cotação',
    text: 'Fale com nossa equipe.',
  },
} as const satisfies {
  title: string
  headline: readonly string[]
  highlight: readonly string[]
  text: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint, HeroPoint]
  card: { title: string; text: string }
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de compressores de parafuso.',
  text: 'Nossa equipe indica o compressor Schulz certo para a sua demanda, com as melhores condições para todo o Nordeste. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'pin', label: 'Fornecimento para todo o Nordeste' },
    { icon: 'wrench', label: 'Suporte técnico especializado' },
    { icon: 'shield', label: 'Mais de 40 anos de mercado' },
  ],
  /**
   * Cabeçalho do card do formulário (mockup do cliente, 21/10/2026). O `eyebrow` acima
   * vai no card, e não mais na coluna de texto, para não aparecer duas vezes lado a lado.
   */
  form: {
    title: 'Como podemos ajudar?',
    text: 'Preencha os dados e conte qual compressor a sua operação precisa.',
  },
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados serão utilizados apenas para responder à sua solicitação.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  form: { title: string; text: string }
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
