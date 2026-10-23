/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `xl:grid-cols-5`.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): a foto de
 * cenário já traz o técnico, então não há pessoa recortada. O CTA tem rótulo próprio
 * (`cta`) e a área atendida aparece abaixo dele (`area`).
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
  titleLines: ['Eficiência Schulz,', 'venda e suporte Falanga.'],
  /** Cada `\n` é uma quebra forçada a partir de 1280px; abaixo disso o texto corre normal. */
  text: 'Há mais de 40 anos no mercado, a Falanga é distribuidora\nSchulz no Nordeste, com confiabilidade, qualidade e\nassistência técnica para a sua indústria.',
  cta: 'Solicitar cotação',
  area: 'Fornecimento para todo o Nordeste',
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga em manutenção de um compressor de parafuso SRP 4015, com outros compressores ao fundo',
  },
  reasons: [
    {
      icon: 'trend-up',
      title: 'Custo-benefício',
      description: 'Operação 24/7 com baixo custo de manutenção.',
    },
    {
      icon: 'zap',
      title: 'Menos energia',
      description: 'Mais ar comprimido com menor consumo de energia.',
    },
    {
      icon: 'badge-check',
      title: 'Schulz desde 1963',
      description: 'Marca nacional com produtos de classe internacional.',
    },
    {
      icon: 'shield-check',
      title: '40 anos de mercado',
      description: 'Confiabilidade, qualidade e assistência técnica.',
    },
    {
      icon: 'map-pin',
      title: 'Todo o Nordeste',
      description: 'Fornecimento com as melhores condições.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly [string, string]
  text: string
  cta: string
  area: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
