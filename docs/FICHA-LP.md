```yaml
ficha: 1
padrao: 2.8.0
cliente: Falanga Pneumática
produto: Compressores de parafuso Schulz
data: 2026-10-21

site:
  brand: Falanga Pneumática
  brandShort: Falanga
  product: Compressores de parafuso Schulz
  context: operações industriais
  url: https://lp-compressores-de-parafuso.vercel.app
  address: R. Mirian Rocha, 97 - Fortaleza - CE · Rua Tomaz Gonzaga, 74 - Zumbi, Recife - PE
  privacyUrl: ''
  whatsapp: '5585996267979'
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: compressor de parafuso
  negatives: []
  forbidden: [autorizada, autorizado]
  areaAtendida: Nordeste, com unidades em Fortaleza/CE e Recife/PE
  onde: selo
  familias:
    - nome: produto
      termos:
        [
          compressor de parafuso,
          compressor parafuso,
          compressor de ar de parafuso,
          compressor de ar comprimido,
          compressor industrial,
          compressores industriais,
          compressores elétricos,
          compressor grande,
          compressor de ar grande,
          compressor rotativo,
        ]
      responde: linhas
    - nome: marca-schulz
      termos:
        [
          compressor Schulz,
          compressor de ar Schulz,
          compressor parafuso Schulz,
          Schulz,
          distribuidor Schulz,
          revendedor Schulz,
          distribuidor compressor Schulz,
        ]
      responde: linhas
    - nome: tratamento-de-ar
      termos: [secador de ar]
      responde: linhas
    - nome: localizacao
      termos:
        [
          compressores Fortaleza,
          compressores Recife,
          compressor Schulz em Recife,
          compressor de parafuso em Recife,
        ]
      responde: null

publico: [Manutenção, Engenharia, Compras]

marcas:
  usarLogos: false
  nomes: [Schulz]
  autorizacao: não solicitada — a Schulz aparece só por extenso

tokens:
  padrao: true

conteudo:
  title: Compressor de parafuso Schulz em Fortaleza e Recife | Falanga Pneumática
  description: Compressores de parafuso Schulz e secadores de ar em Fortaleza e Recife, com fornecimento para todo o Nordeste e suporte técnico especializado.
  hero:
    title: Compressores de parafuso Schulz
    headline: [Mais ar.]
    highlight: [Menos custo, na sua indústria.]
    text: Distribuidor Schulz com compressores de tecnologia de ponta e suporte técnico especializado para a sua indústria.
    area: [Fortaleza e Recife, Fornecimento para todo o Nordeste]
    banner: Técnico da Falanga ao lado de um compressor de parafuso Schulz SRP 4015 aberto, numa sala com outros compressores
    points:
      - icon: badge-check
        line1: Distribuidor
        line2: Schulz
      - icon: truck
        line1: Fornecimento
        line2: no Nordeste
      - icon: worker
        line1: Suporte
        line2: especializado
      - icon: shield-check
        line1: 40 anos de
        line2: experiência
  quote:
    eyebrow: Solicite sua cotação
    title: Fale com quem entende de compressores de parafuso.
    text: Nossa equipe indica o compressor Schulz certo para a sua demanda de ar. Preencha o formulário ou fale direto conosco pelo WhatsApp.
    trust:
      - icon: pin
        label: Fornecimento para todo o Nordeste
      - icon: wrench
        label: Suporte técnico especializado
      - icon: shield
        label: Mais de 40 anos de mercado
    form:
      title: Como podemos ajudar?
      text: Preencha os dados e conte qual compressor a sua operação precisa.
    lgpd: Seus dados serão utilizados apenas para responder à sua solicitação.

blocos:
  linhas:
    veredicto: completo
    responde: [produto, marca-schulz, tratamento-de-ar]
    papeis: [Engenharia, Compras]
    eyebrow: Compressores Schulz
    title: Compressores de parafuso para a sua indústria.
    text: Equipamentos Schulz eficientes e duráveis, com fornecimento para todo o Nordeste nas melhores condições.
    area: Fornecimento para todo o Nordeste
    gallery:
      - Compressor de parafuso Schulz SRP 5100 instalado em sala de compressores
      - Compressores de parafuso Schulz SRP 4030 sobre paletes no galpão da Falanga
    badge:
      icon: badge-check
      label: Distribuidor Schulz
    brands:
      label: Linhas Schulz
      names: [SRP 4000, SRP 4000 Dynamic, SRP 4000 Flex, SRP 5000 Flex]
    closing:
      title: Não sabe qual modelo escolher?
      text: Nossa equipe indica o compressor certo para a sua demanda de ar.
      cta: Solicitar cotação
    items:
      - id: srp-3020
        tag: 20 HP
        title: Compressor SRP-3020 Compact
        description: Compressor de parafuso Schulz de 20 HP, sobre reservatório de 250 litros.
        features: [Parafuso rotativo, Potência de 20 HP, Linha Compact]
        photo: Compressor de parafuso Schulz SRP 3020 Compact montado sobre reservatório
        dark: false
      - id: srp-3025
        tag: 25 HP
        title: Compressor SRP-3025 Compact
        description: Compressor de parafuso Schulz de 25 HP, sobre reservatório de 250 litros.
        features: [Parafuso rotativo, Potência de 25 HP, Linha Compact]
        photo: Compressor de parafuso Schulz SRP 3025 Compact montado sobre reservatório
        dark: false
      - id: srp-4050-flex
        tag: Flex
        title: Compressor SRP 4050 AD Flex
        description: Compressor de parafuso Schulz de 50 HP, com velocidade variável da linha Flex.
        features: [Potência de 50 HP, Velocidade variável, Linha Flex]
        photo: Compressor de parafuso Schulz SRP 4050 em gabinete fechado
        dark: false
      - id: srs-60
        tag: Secador
        title: Secador SRS 60 Compact
        description: Secador de ar por refrigeração Schulz, que retira a umidade do ar comprimido.
        features: [Secagem por refrigeração, Linha Compact, Painel digital]
        photo: Secador de ar por refrigeração Schulz SRS 60 Compact
        dark: true

  vitrine:
    veredicto: insuficiente
    falta: só há 4 produtos; a vitrine pede 6 a 24, e com 3 características por item "linhas" vende melhor

  especificacoes:
    veredicto: insuficiente
    falta: faltam 4 a 10 modelos comparáveis, com colunas técnicas (vazão, pressão, potência) e valores

  identificar:
    veredicto: insuficiente
    falta: o comercial não informou os 6 dados que pede para dimensionar ou cotar um compressor

  situacoes:
    veredicto: nao-se-aplica
    falta: a compra de compressor novo é planejada, não reativa

  processo:
    veredicto: completo
    responde: [produto, tratamento-de-ar]
    papeis: [Engenharia, Compras]
    eyebrow: Como funciona
    title: Do primeiro contato ao compressor em operação.
    highlight: compressor em operação.
    microcopy: Suporte técnico especializado
    text: Um atendimento completo para indicar o compressor certo e manter o seu sistema de ar comprimido produtivo.
    cta: Solicitar cotação
    steps:
      - id: levantamento
        icon: search
        title: Levantamento da demanda
        description: Entendemos o consumo de ar, a pressão e o regime de trabalho da sua planta.
      - id: dimensionamento
        icon: sliders
        title: Dimensionamento
        description: Indicamos o compressor Schulz e o tratamento de ar certos para a aplicação.
      - id: proposta
        icon: file-text
        title: Proposta comercial
        description: Cotação com as melhores condições para a sua empresa, em todo o Nordeste.
      - id: fornecimento
        icon: truck
        title: Fornecimento
        description: Entrega do equipamento Schulz para empresas de todo o Nordeste.
      - id: suporte
        icon: wrench
        title: Suporte técnico
        description: Assistência técnica e manutenção preventiva e corretiva após a compra.

  aplicacoes:
    veredicto: completo
    responde: [produto, tratamento-de-ar]
    papeis: [Manutenção, Engenharia]
    eyebrow: Aplicações
    title: Soluções para todo o sistema de ar comprimido.
    text: Do compressor ao tratamento do ar, equipamentos Schulz e suporte técnico para a sua planta.
    closing:
      title: Precisa dimensionar o seu sistema?
      text: Converse com a equipe da Falanga.
      cta: Solicitar atendimento
    items:
      - id: compressores-parafuso
        label: Compressores de parafuso
        description: Linhas Schulz de velocidade fixa e variável para operação contínua na indústria.
        photo: Compressores e reservatórios em planta industrial com tubulação de ar
      - id: secadores
        label: Secadores de ar
        description: Secadores por refrigeração que retiram a umidade do ar e protegem a sua rede.
        photo: Secador de ar comprimido industrial em sala de máquinas
      - id: tratamento
        label: Tratamento de ar
        description: Filtragem e drenagem para manter a qualidade do ar que chega à sua produção.
        photo: Filtros de linha de ar comprimido com manômetros e drenos
      - id: suporte
        label: Suporte técnico
        description: Assistência técnica e manutenção preventiva e corretiva para o seu sistema de ar.
        photo: Técnico da Falanga em manutenção de um compressor de parafuso Schulz SRP 4015

  segmentos:
    veredicto: insuficiente
    falta: nenhum setor industrial, equipamento ou foto de segmento foi informado

  clientes:
    veredicto: insuficiente
    falta: faltam 4 a 8 logos autorizadas e 3 números com fonte identificável

  diferenciais:
    veredicto: completo
    responde: [produto, marca-schulz, localizacao]
    papeis: [Compras, Engenharia]
    eyebrow: Por que a Falanga
    titleLines: [Eficiência e confiabilidade, garantidas.]
    text: Mais de 40 anos de mercado, tecnologia Schulz e suporte técnico especializado para a sua operação industrial.
    cta: Solicitar cotação
    area: Fornecimento para todo o Nordeste
    scene: Técnico da Falanga em manutenção de um compressor de parafuso SRP 4015, com outros compressores ao fundo
    reasons:
      - icon: badge-check
        title: Tecnologia Schulz
        description: Compressores de parafuso eficientes e duráveis.
      - icon: users
        title: Suporte especializado
        description: Equipe técnica para apoiar a sua indústria.
      - icon: map-pin
        title: Cobertura regional
        description: Fornecimento para todo o Nordeste.
      - icon: clock
        title: Operação contínua
        description: Equipamentos projetados para operar 24/7.
      - icon: shield-check
        title: Experiência de mercado
        description: Mais de 40 anos de atuação no setor.

  perguntas:
    veredicto: insuficiente
    falta: o comercial não enviou a lista de dúvidas reais

  escopo:
    veredicto: nao-se-aplica
    falta: a oferta não é consolidação de compras de itens diferentes

assets:
  pendentes: []

conflitos: []

naoAplicado:
  - e-mail falanga@falangaservice.com.br (e-mail não entra na LP pelo padrão)
  - lista de fabricantes multimarcas (não responde ao tráfego centrado em Schulz)
  - percentuais de economia de energia do catálogo Schulz (até 38% e até 50%), sem confirmação do cliente
  - imagem enviada sem identificação, image(20261021-125101).png (função não confirmada)
```

# Ficha de execução — Falanga Pneumática / Compressores de parafuso Schulz

> Montada no editor a partir de `docs/briefing-cliente/briefing-falanga-compressores-schulz.md` (briefing organizado de 21/10/2026) e da página atual do cliente, `falangapneumatica.com.br/compressores-de-parafuso/`, por pedido explícito de uma primeira versão antes da entrevista completa no chat. É o mesmo caminho da LP de manutenção da Falanga. Os pontos marcados como **inferido** precisam ser validados com o cliente; se mudarem, a ficha é regerada.

## O que foi decidido

LP de produto para a campanha de compressores de parafuso Schulz da Falanga, com a palavra-chave `compressor de parafuso` no H1 ("Compressores de parafuso Schulz") e no title. A área atendida (Nordeste, unidades em Fortaleza e Recife) aparece no hero e num selo da cotação.

A oferta abre em `linhas` com os quatro equipamentos da página atual do cliente: SRP-3020 Compact, SRP-3025 Compact, SRP 4050 AD Flex e o secador SRS 60 Compact. O secador fecha o grid como card escuro e responde à família "secador de ar", que o briefing marcava como lacuna. O apoio mostra o caminho do atendimento em `processo`. A prova mostra as partes do sistema de ar em `aplicacoes`. A autoridade fecha com os cinco diferenciais do briefing e a frase de autoridade "Eficiência e confiabilidade garantidas".

O visual é o da LP de manutenção da Falanga, aprovado pelo cliente em 21/10/2026: amarelo e azul da marca, header branco, hero com foto e as variantes locais das seções. A única mudança de layout é em `linhas`: cada card mostra a foto do produto e as três características, no lugar do ícone.

A Schulz aparece **só por extenso**. "Distribuidor Schulz" vem do próprio material do cliente ("Somos distribuidores Schulz"). `autorizada` e `autorizado` ficam proibidos, como na LP de manutenção.

## Viabilidade por fase

| Fase       | Bloco            | Veredicto     | Responde                           | Papéis                 | O que falta                                                       |
| ---------- | ---------------- | ------------- | ---------------------------------- | ---------------------- | ----------------------------------------------------------------- |
| Oferta     | `linhas`         | completo      | produto, marca Schulz, secador     | Engenharia, Compras    | descrições e características **inferidas** do site; validar       |
| Oferta     | `vitrine`        | insuficiente  | —                                  | —                      | só 4 produtos                                                     |
| Oferta     | `especificacoes` | insuficiente  | —                                  | —                      | 4 a 10 modelos com colunas técnicas                               |
| Apoio      | `processo`       | completo      | produto, secador                   | Engenharia, Compras    | sequência **inferida**; sem prazos                                |
| Apoio      | `identificar`    | insuficiente  | —                                  | —                      | os 6 dados que o comercial pede para cotar                        |
| Apoio      | `situacoes`      | não se aplica | —                                  | —                      | compra planejada                                                  |
| Prova      | `aplicacoes`     | completo      | produto, secador                   | Manutenção, Engenharia | 4 aplicações **inferidas**; fotos provisórias da LP de manutenção |
| Prova      | `segmentos`      | insuficiente  | —                                  | —                      | setores atendidos                                                 |
| Prova      | `clientes`       | insuficiente  | —                                  | —                      | logos autorizadas e números com fonte                             |
| Autoridade | `diferenciais`   | completo      | produto, marca Schulz, localização | Compras, Engenharia    | —                                                                 |
| Autoridade | `perguntas`      | insuficiente  | —                                  | —                      | lista real de dúvidas do comercial                                |
| Autoridade | `escopo`         | não se aplica | —                                  | —                      | não é consolidação de compras                                     |

## Núcleo

| #   | Entrada            | Valor                                                    | Origem                                      |
| --- | ------------------ | -------------------------------------------------------- | ------------------------------------------- |
| 1   | MARCA              | Falanga Pneumática                                       | briefing                                    |
| 2   | MARCA_CURTA        | Falanga                                                  | briefing (inferido)                         |
| 3   | PRODUTO_PRINCIPAL  | Compressores de parafuso Schulz                          | briefing (inferido)                         |
| 4   | CONTEXTO_DE_USO    | operações industriais                                    | briefing                                    |
| 5   | PUBLICO            | Manutenção, Engenharia, Compras                          | **inferido** — ausente no material          |
| 6   | HERO               | distribuidor Schulz, Nordeste, suporte, 40 anos          | briefing                                    |
| 7   | MARCAS_ATENDIDAS   | Schulz, só por extenso                                   | briefing; uso de logo não decidido          |
| 8   | SELOS_DE_CONFIANCA | Nordeste, suporte técnico especializado, mais de 40 anos | briefing                                    |
| 9   | ENDERECO           | Fortaleza/CE e Recife/PE (sem CEP)                       | briefing                                    |
| 10  | URL + PRIVACIDADE  | URL da Vercel; sem política                              | **provisório** — URL final é a do WordPress |
| 11  | SHORTCODES         | padrão do plugin                                         | default                                     |
| 12  | WHATSAPP           | 5585996267979, no botão flutuante                        | briefing                                    |
| 13  | STACK + PUBLICACAO | padrão da agência + Vercel                               | default                                     |
| 14  | TOKENS + FONTE     | os da LP de manutenção da Falanga                        | herdado (aprovado em 21/10/2026)            |
| 15  | CAMPANHA           | `compressor de parafuso`                                 | briefing                                    |

## Pendências

| O que falta                                         | Quem resolve        | Especificação                                                                                            |
| --------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| Banner próprio do hero                              | designer            | hoje é o da LP de manutenção (técnico no SRP 4015); pedir 1981×900, compressor no primeiro terço         |
| Fotos dos produtos em alta                          | cliente             | as do site têm 600×600 com marca d'água; foram recortadas para 800×600. Pedir PNG recortado sem marca    |
| Fotos das aplicações em alta                        | cliente ou designer | as quatro vêm da LP de manutenção (340–450px); pedir originais em 1200×900                               |
| Validar descrições e características dos 4 produtos | cliente             | potência do SRP 4050 (50 HP) e "velocidade variável" da linha Flex foram inferidas do nome e do catálogo |
| Validar a sequência de `processo`                   | cliente             | inferida do material (dimensionamento, fornecimento e suporte)                                           |
| Os 6 dados para cotar um compressor                 | comercial           | habilitaria `identificar` no lugar de `processo`                                                         |
| Público que pede cotação                            | cliente             | cargos reais (hoje inferido)                                                                             |
| URL final e política de privacidade                 | cliente             | `falangapneumatica.com.br/compressores-de-parafuso/` e o link da política                                |
| Fotos de aplicações e segmentos reais               | cliente             | a fase de prova é a mais fraca do briefing                                                               |

## Conflitos com o padrão

Nenhum conflito explícito no material. O visual herdado da LP de manutenção carrega os desvios registrados nela (abertura, serviços, como funciona, aplicações, diferenciais e cotação).

## Itens excedentes

| Bloco    | Itens que entraram                           | Itens guardados                                                                            |
| -------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `linhas` | SRP-3020, SRP-3025, SRP 4050 AD Flex, SRS 60 | as linhas do catálogo (SRP 4000, Dynamic, 4000 Flex, 5000 Flex) entram como faixa de nomes |

## Dados não usados pelo padrão

E-mail `falanga@falangaservice.com.br`; telefone (85) 98129-5507 da página atual; lista multimarcas; percentuais de economia de energia do catálogo Schulz; imagem sem identificação `image(20261021-125101).png`.
