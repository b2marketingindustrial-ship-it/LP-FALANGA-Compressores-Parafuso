/**
 * Logos do carrossel de marcas — primitivo opcional.
 *
 * Vazio por decisão da ficha (`marcas.usarLogos: false`): as marcas atendidas
 * entram só por extenso, na copy. O carrossel não renderiza com menos de 4 logos,
 * e o arquivo fica porque `linhas` importa o primitivo `BrandCarousel`.
 */
import type { ImageMetadata } from 'astro'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = []
