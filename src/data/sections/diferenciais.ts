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
import { cta } from '@data/content'

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
  text: 'Distribuidora autorizada Schulz, a Falanga acompanha\na sua indústria do dimensionamento à assistência técnica,\ncom confiabilidade e qualidade em cada etapa.',
  cta: cta.primary,
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga em manutenção de um compressor de parafuso SRP 4015, com outros compressores ao fundo',
  },
  /**
   * Revistos em 23/10/2026 para não repetir o resto da página (pedido do usuário): saíram
   * "Menos energia" (seção de economia), "40 anos de mercado" e "Todo o Nordeste" (título).
   * Revistos de novo na mesma data: "Linha completa", "Dimensionamento" e "Pós-venda"
   * repetiam o rótulo do catálogo e as etapas 02 e 05 do "Como funciona".
   */
  reasons: [
    {
      icon: 'trend-up',
      title: 'Custo-benefício',
      description: 'Operação 24/7 com baixo custo de manutenção.',
    },
    {
      icon: 'badge-check',
      // A idade da Schulz não vende a Falanga (pedido do usuário, 23/10/2026); o ano e a
      // origem vêm da página "A empresa" do site do cliente.
      title: 'Desde 1981',
      description: 'Do escritório de representação à distribuição Schulz.',
    },
    {
      // Serviço da página "A empresa" do cliente (23/10/2026), no lugar de "Equipe técnica".
      icon: 'tools',
      title: 'Rede de ar comprimido',
      description: 'Projeto e execução da rede da sua planta.',
    },
    {
      icon: 'layers',
      title: 'Um só fornecedor',
      description: 'Compressor e tratamento de ar na mesma compra.',
    },
    {
      icon: 'wrench',
      title: 'Manutenção',
      description: 'Quem vende também cuida da manutenção.',
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
