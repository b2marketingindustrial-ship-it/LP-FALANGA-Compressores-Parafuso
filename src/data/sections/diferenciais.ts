/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * Variante local herdada da LP de manutenção (mockup do cliente, 21/10/2026,
 * docs/BRIEFING.md): foto única de cenário, sem pessoa recortada. O CTA tem rótulo próprio
 * (`cta`) e a área atendida aparece abaixo dele (`area`). A foto vem do primeiro mockup de
 * hero da Falanga (PNG sem compressão), espelhada, em resolução que não precisa ser ampliada.
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
  titleLines: ['Eficiência e confiabilidade', 'garantidas.'],
  text: 'Há mais de 40 anos no mercado, a Falanga é distribuidora Schulz no Nordeste, com confiabilidade, qualidade e assistência técnica para a sua indústria.',
  cta: 'Solicitar cotação',
  area: 'Fornecimento para todo o Nordeste',
  scene: {
    src: cenario,
    alt: 'Compressor de parafuso industrial com tubulação de ar comprimido em sala de máquinas',
  },
  reasons: [
    {
      icon: 'trend-up',
      title: 'Ótimo custo-benefício',
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
