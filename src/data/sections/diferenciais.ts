/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `xl:grid-cols-5`.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): a foto de
 * cenário já traz o técnico, então não há pessoa recortada. O CTA tem rótulo próprio
 * (`cta`).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada): a primeira em branco, a segunda em amarelo. */
  titleLines: ['Há 40 anos, referência em', 'ar comprimido no Nordeste.'],
  /** Cada `\n` é uma quebra forçada a partir de 1280px; abaixo disso o texto corre normal. */
  text: 'Distribuidora oficial Schulz, a Falanga acompanha a sua\nindústria do dimensionamento à assistência técnica,\ncom confiabilidade e qualidade em cada etapa.',
  cta: 'Solicitar cotação',
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga em manutenção de um compressor de parafuso SRP 4015, com outros compressores ao fundo',
  },
  /**
   * Revistos em 23/10/2026 para não repetir o resto da página (pedido do usuário): saíram
   * "Menos energia" (seção de economia), "40 anos de mercado" e "Todo o Nordeste" (título).
   * Os novos vêm do catálogo (linha completa) e das etapas do "Como funciona".
   */
  reasons: [
    {
      icon: 'trend-up',
      title: 'Custo-benefício',
      description: 'Operação 24/7 com baixo custo de manutenção.',
    },
    {
      icon: 'badge-check',
      title: 'Schulz desde 1963',
      description: 'Marca nacional com produtos de classe internacional.',
    },
    {
      icon: 'layers',
      title: 'Linha completa',
      description: 'Toda a linha Schulz, direto do distribuidor oficial.',
    },
    {
      icon: 'sliders',
      title: 'Dimensionamento',
      description: 'O compressor certo para a demanda da sua planta.',
    },
    {
      icon: 'wrench',
      title: 'Pós-venda',
      description: 'Manutenção preventiva e corretiva após a compra.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly [string, string]
  text: string
  cta: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
