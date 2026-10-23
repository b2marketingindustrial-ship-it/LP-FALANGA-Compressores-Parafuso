/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * Os quatro equipamentos Schulz da página atual do cliente: três compressores de
 * parafuso e o secador, que fecha o grid como card escuro (tratamento de ar).
 *
 * Variante local herdada da LP de manutenção da Falanga (mockup do cliente, 21/10/2026,
 * docs/BRIEFING.md): cabeçalho com duas fotos. Nesta LP cada card mostra a
 * foto do produto (`linha-N.png`, recortada da foto do site) e as três características, e
 * abaixo dos cards entra o comparativo das linhas do catálogo Schulz da LP antiga (`range`).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

export interface RangeLine {
  name: string
  speed: string
  power: string
  highlight: string
}

import galeria1 from '@assets/linhas/galeria-1.webp'
import galeria2 from '@assets/linhas/galeria-2.webp'
import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import linha4 from '@assets/linhas/linha-4.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Compressores Schulz',
  title: 'Compressores de parafuso com tecnologia de ponta.',
  text: 'Os compressores de parafuso Schulz são conhecidos pela eficiência e durabilidade: mais desempenho para as suas operações industriais.',
  area: 'Fornecimento para todo o Nordeste',
  /** Linha de apoio do destaque da área atendida (era a área do header até 23/10/2026). */
  areaNote: 'Atendimento em Fortaleza e Recife',
  gallery: [
    {
      src: galeria1,
      alt: 'Compressor de parafuso Schulz SRP 5100 instalado em sala de compressores',
    },
    {
      src: galeria2,
      alt: 'Compressores de parafuso Schulz SRP 4030 sobre paletes no galpão da Falanga',
    },
  ],
  /** Selo sobre a primeira foto da galeria. */
  badge: { icon: 'badge-check', label: 'Distribuidor Schulz' },
  /**
   * Comparativo das linhas do catálogo Schulz publicado na LP antiga do cliente. Os
   * percentuais são os dos catálogos da Schulz, e a nota os atribui ao fabricante.
   */
  range: {
    title: 'Linhas Schulz de compressores de parafuso',
    text: 'Velocidade fixa ou variável, de 5 a 250 hp.',
    note: 'Faixas de potência e reduções de consumo informadas pela Schulz nos catálogos de cada linha.',
    items: [
      {
        name: 'SRP 4000',
        speed: 'Velocidade fixa',
        power: '5 a 250 hp',
        highlight: 'Filtro e secador integrados',
      },
      {
        name: 'SRP 4000 Dynamic',
        speed: 'Velocidade fixa',
        power: '5 a 30 hp',
        highlight: 'Para espaços reduzidos',
      },
      {
        name: 'SRP 4000 Flex',
        speed: 'Velocidade variável',
        power: '5 a 250 hp',
        highlight: 'Até 38% menos energia',
      },
      {
        name: 'SRP 5000 Flex',
        speed: 'Velocidade variável',
        power: '30 a 100 hp',
        highlight: 'Até 50% menos energia',
      },
    ],
  },
  items: [
    {
      id: 'srp-3020',
      tag: '20 HP',
      title: 'Compressor SRP-3020 Compact',
      description: 'Compressor de parafuso Schulz de 20 HP, sobre reservatório de 250 litros.',
      photo: {
        src: linha1,
        alt: 'Compressor de parafuso Schulz SRP 3020 Compact montado sobre reservatório',
      },
      features: ['Parafuso rotativo', 'Potência de 20 HP', 'Linha Compact'],
      dark: false,
    },
    {
      id: 'srp-3025',
      tag: '25 HP',
      title: 'Compressor SRP-3025 Compact',
      description: 'Compressor de parafuso Schulz de 25 HP, sobre reservatório de 250 litros.',
      photo: {
        src: linha2,
        alt: 'Compressor de parafuso Schulz SRP 3025 Compact montado sobre reservatório',
      },
      features: ['Parafuso rotativo', 'Potência de 25 HP', 'Linha Compact'],
      dark: false,
    },
    {
      id: 'srp-4050-flex',
      tag: 'Flex',
      title: 'Compressor SRP 4050 AD Flex',
      description: 'Compressor de parafuso Schulz de 50 HP, com velocidade variável da linha Flex.',
      photo: { src: linha3, alt: 'Compressor de parafuso Schulz SRP 4050 em gabinete fechado' },
      features: ['Potência de 50 HP', 'Velocidade variável', 'Linha Flex'],
      dark: false,
    },
    {
      id: 'srs-60',
      tag: 'Secador',
      title: 'Secador SRS 60 Compact',
      description: 'Secador de ar por refrigeração Schulz, que retira a umidade do ar comprimido.',
      photo: { src: linha4, alt: 'Secador de ar por refrigeração Schulz SRS 60 Compact' },
      features: ['Secagem por refrigeração', 'Linha Compact', 'Painel digital'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  area: string
  areaNote: string
  gallery: readonly [Photo, Photo]
  badge: { icon: IconName; label: string }
  range: { title: string; text: string; note: string; items: readonly RangeLine[] }
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
