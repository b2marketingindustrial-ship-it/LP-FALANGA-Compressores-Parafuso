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
  /** Vira o CTA `linhas-{id}` do card. */
  id: string
  name: string
  speed: string
  power: string
  highlight: string
  /** Foto da linha. Sem ela, o card mostra o espaço reservado para a imagem. */
  photo?: Photo
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

/** Um par de barras do gráfico de energia: altura relativa (0–100) de cada velocidade. */
export interface EnergyGroup {
  label: string
  fixed: number
  variable: number
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
   * Linhas do catálogo Schulz publicadas na LP antiga do cliente. Desde 23/10/2026 entram
   * na mesma grade dos produtos (pedido do usuário: "uma tabela única"), como cards; as que
   * ainda não têm `photo` mostram o espaço reservado da imagem. Os percentuais são os dos
   * catálogos da Schulz, e a nota abaixo da grade os atribui ao fabricante.
   */
  range: {
    note: 'Faixas de potência e reduções de consumo informadas pela Schulz nos catálogos de cada linha.',
    items: [
      {
        id: 'srp-4000',
        name: 'SRP 4000',
        speed: 'Velocidade fixa',
        power: '5 a 250 hp',
        highlight: 'Filtro e secador integrados',
      },
      {
        id: 'srp-4000-dynamic',
        name: 'SRP 4000 Dynamic',
        speed: 'Velocidade fixa',
        power: '5 a 30 hp',
        highlight: 'Para espaços reduzidos',
      },
      {
        id: 'srp-4000-flex',
        name: 'SRP 4000 Flex',
        speed: 'Velocidade variável',
        power: '5 a 250 hp',
        highlight: 'Até 38% menos energia',
      },
      {
        id: 'srp-5000-flex',
        name: 'SRP 5000 Flex',
        speed: 'Velocidade variável',
        power: '30 a 100 hp',
        highlight: 'Até 50% menos energia',
      },
    ],
  },
  /**
   * Gráfico velocidade constante × variável, refeito do gráfico da LP antiga do cliente
   * (23/10/2026), sem a frase "o retorno de investimento é garantido" (docs/BRIEFING.md).
   * Os valores são as alturas relativas das barras medidas na imagem original, que não
   * traz números: a tela mostra só as barras, sem eixo, e o "até 50%" atribuído à Schulz
   * como no comparativo acima. CTA `linhas-energia`.
   */
  energy: {
    eyebrow: 'Eficiência energética',
    title: 'Mais desempenho com até 50% menos energia.',
    /** Trecho do título com o marcador amarelo. */
    highlight: 'até 50%',
    text: 'Nos compressores Schulz de velocidade variável, o motor acompanha a demanda de ar da planta: produz só o ar que a operação usa e reduz o consumo de energia em até 50%, segundo a Schulz.',
    cta: 'Falar com especialista',
    /** Ao lado do CTA: o texto da antiga faixa "Não sabe qual modelo escolher?". */
    ctaNote: 'Nossa equipe indica o compressor certo para a sua demanda de ar.',
    /** As duas reduções do comparativo acima (catálogos Schulz), em destaque. */
    stats: [
      { value: '50%', label: 'menos energia', line: 'SRP 5000 Flex' },
      { value: '38%', label: 'menos energia', line: 'SRP 4000 Flex' },
    ],
    saving: { prefix: 'em até', value: 50, label: ['em economia', 'de energia'] },
    legend: { fixed: 'Velocidade constante', variable: 'Velocidade variável' },
    groups: [
      { label: 'Consumo de energia', fixed: 100, variable: 50 },
      { label: 'Investimento', fixed: 30, variable: 36 },
      { label: 'Manutenção', fixed: 20, variable: 16 },
      { label: 'Instalação', fixed: 10, variable: 12 },
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
  range: { note: string; items: readonly RangeLine[] }
  energy: {
    eyebrow: string
    title: string
    highlight: string
    text: string
    cta: string
    ctaNote: string
    stats: readonly { value: string; label: string; line: string }[]
    saving: { prefix: string; value: number; label: readonly [string, string] }
    legend: { fixed: string; variable: string }
    groups: readonly EnergyGroup[]
  }
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
