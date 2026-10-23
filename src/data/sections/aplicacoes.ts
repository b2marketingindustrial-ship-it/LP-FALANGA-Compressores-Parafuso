/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto e cabeçalho centrado. O card inteiro é o CTA.
 * Os quatro equipamentos são os da arte "sistema de ar comprimido Schulz" da LP antiga do
 * cliente: compressor rotativo, reservatório, filtragem e secador.
 *
 * As fotos são recortes da arte do site, sem os números da legenda.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.jpg'
import app2 from '@assets/aplicacoes/aplicacao-2.jpg'
import app3 from '@assets/aplicacoes/aplicacao-3.jpg'
import app4 from '@assets/aplicacoes/aplicacao-4.jpg'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Sistema Schulz',
  title: 'Do compressor ao tratamento do ar.',
  text: 'Conheça os equipamentos de um sistema Schulz e dimensione o seu com a Falanga.',
  items: [
    {
      id: 'compressor',
      label: 'Compressor de parafuso',
      description: 'Gera o ar comprimido da planta e foi projetado para operar 24 horas por dia.',
      photo: { src: app1, alt: 'Compressor de parafuso Schulz SRP 5100 em sala de compressores' },
    },
    {
      id: 'reservatorio',
      label: 'Reservatório',
      description:
        'Armazena o ar, estabiliza a pressão da rede e separa o condensado antes do tratamento.',
      photo: {
        src: app2,
        alt: 'Reservatório Schulz com separador de condensado ao lado do compressor',
      },
    },
    {
      id: 'filtragem',
      label: 'Filtragem',
      description:
        'Pré e pós-filtros coalescentes retêm óleo e partículas antes de o ar chegar à produção.',
      photo: {
        src: app3,
        alt: 'Filtros de linha e conjunto de tratamento de ar Schulz instalados na parede',
      },
    },
    {
      id: 'secador',
      label: 'Secador de ar',
      description:
        'Retira a umidade do ar comprimido e protege a rede e os equipamentos contra a corrosão.',
      photo: {
        src: app4,
        alt: 'Secador de ar Schulz e dreno de condensado na sala de compressores',
      },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
