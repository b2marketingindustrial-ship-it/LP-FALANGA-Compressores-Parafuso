/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
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
  titleLines: ['Eficiência e confiabilidade', 'garantidas.'],
  text: 'Mais de 40 anos de mercado, tecnologia Schulz e suporte técnico especializado para a sua operação industrial.',
  cta: 'Solicitar cotação',
  area: 'Fornecimento para todo o Nordeste',
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga em manutenção de um compressor de parafuso SRP 4015, com outros compressores ao fundo',
  },
  reasons: [
    {
      icon: 'badge-check',
      title: 'Tecnologia Schulz',
      description: 'Compressores de parafuso eficientes e duráveis.',
    },
    {
      icon: 'users',
      title: 'Suporte especializado',
      description: 'Equipe técnica para apoiar a sua indústria.',
    },
    {
      icon: 'map-pin',
      title: 'Cobertura regional',
      description: 'Fornecimento para todo o Nordeste.',
    },
    {
      icon: 'clock',
      title: 'Operação contínua',
      description: 'Equipamentos projetados para operar 24/7.',
    },
    {
      icon: 'shield-check',
      title: 'Experiência de mercado',
      description: 'Mais de 40 anos de atuação no setor.',
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
