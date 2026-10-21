/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto e cabeçalho centrado. O card inteiro é o CTA.
 * As quatro partes do sistema de ar vêm do que o material diz que a Falanga fornece e
 * atende: compressores de parafuso, secadores, tratamento do ar e suporte técnico.
 *
 * Variante local herdada da LP de manutenção da Falanga (mockup do cliente, 21/10/2026,
 * docs/BRIEFING.md): a seção fecha com uma faixa de CTA (`closing`). As quatro fotos
 * também vêm de lá e são provisórias até os originais chegarem.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Soluções para todo o sistema de ar comprimido.',
  text: 'Do compressor ao tratamento do ar, equipamentos Schulz e suporte técnico para a sua planta.',
  /** Faixa azul que fecha a seção, com o CTA `aplicacoes-atendimento`. */
  closing: {
    title: 'Precisa dimensionar o seu sistema?',
    text: 'Converse com a equipe da Falanga.',
    cta: 'Solicitar atendimento',
  },
  items: [
    {
      id: 'compressores-parafuso',
      label: 'Compressores de parafuso',
      description:
        'Linhas Schulz de velocidade fixa e variável para operação contínua na indústria.',
      photo: {
        src: app1,
        alt: 'Compressores e reservatórios em planta industrial com tubulação de ar',
      },
    },
    {
      id: 'secadores',
      label: 'Secadores de ar',
      description: 'Secadores por refrigeração que retiram a umidade do ar e protegem a sua rede.',
      photo: { src: app2, alt: 'Secador de ar comprimido industrial em sala de máquinas' },
    },
    {
      id: 'tratamento',
      label: 'Tratamento de ar',
      description: 'Filtragem e drenagem para manter a qualidade do ar que chega à sua produção.',
      photo: { src: app3, alt: 'Filtros de linha de ar comprimido com manômetros e drenos' },
    },
    {
      id: 'suporte',
      label: 'Suporte técnico',
      description:
        'Assistência técnica e manutenção preventiva e corretiva para o seu sistema de ar.',
      photo: {
        src: app4,
        alt: 'Técnico da Falanga em manutenção de um compressor de parafuso Schulz SRP 4015',
      },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  closing: { title: string; text: string; cta: string }
  items: readonly [Application, Application, Application, Application]
}
