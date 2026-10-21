/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * As etapas seguem o caminho de compra de um compressor na Falanga, inferido do material:
 * levantamento, dimensionamento, proposta, fornecimento e suporte técnico.
 *
 * Sem `when`: o cliente ainda não confirmou prazos que assuma publicamente
 * (docs/BRIEFING.md, pendências). Prazo inventado não entra.
 *
 * Copy do mockup do cliente (21/10/2026): o fim do título vai em amarelo
 * (`highlight`), e o CTA da seção tem rótulo próprio (`cta`).
 */
import type { IconName } from '@data/icons'

export interface ProcessStep {
  id: string
  icon: IconName
  title: string
  description: string
  /** Prazo ou marco da etapa, 2–4 palavras. Opcional. */
  when?: string
}

/**
 * Tipo anotado, e não `as const satisfies`: sem nenhum `when` nos itens, o tipo
 * literal não teria a propriedade e o componente deixaria de tipar.
 */
export interface Process {
  eyebrow: string
  title: string
  /** Trecho final de `title` que vai em amarelo, em linha própria. */
  highlight: string
  text: string
  microcopy: string
  /** Rótulo do botão da seção. */
  cta: string
  steps: readonly ProcessStep[]
}

export const process: Process = {
  eyebrow: 'Como funciona',
  title: 'Do primeiro contato ao compressor em operação.',
  highlight: 'compressor em operação.',
  text: 'Um atendimento completo para indicar o compressor certo e manter o seu sistema de ar comprimido produtivo.',
  microcopy: 'Suporte técnico especializado',
  cta: 'Solicitar cotação',
  steps: [
    {
      id: 'levantamento',
      icon: 'search',
      title: 'Levantamento da demanda',
      description: 'Entendemos o consumo de ar, a pressão e o regime de trabalho da sua planta.',
    },
    {
      id: 'dimensionamento',
      icon: 'sliders',
      title: 'Dimensionamento',
      description: 'Indicamos o compressor Schulz e o tratamento de ar certos para a aplicação.',
    },
    {
      id: 'proposta',
      icon: 'file-text',
      title: 'Proposta comercial',
      description: 'Cotação com as melhores condições para a sua empresa, em todo o Nordeste.',
    },
    {
      id: 'fornecimento',
      icon: 'truck',
      title: 'Fornecimento',
      description: 'Entrega do equipamento Schulz para empresas de todo o Nordeste.',
    },
    {
      id: 'suporte',
      icon: 'wrench',
      title: 'Suporte técnico',
      description: 'Assistência técnica e manutenção preventiva e corretiva após a compra.',
    },
  ],
}
