# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceria no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> **Desvio desta execução:** não houve entrevista no chat. A ficha foi montada no editor a partir do briefing organizado e da página atual do cliente, por pedido explícito de uma primeira versão publicada no GitHub e na Vercel. O que foi inferido está marcado e precisa de validação com o cliente.

## Origem

| Campo                     | Valor                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                                      |
| Data da ficha             | 2026-10-21                                                                                              |
| Versão do padrão na ficha | 2.8.0                                                                                                   |
| Validada em               | 21/10/2026 por `npm run ficha`                                                                          |
| Material bruto do cliente | `docs/briefing-cliente/briefing-falanga-compressores-schulz.md` (fora do git)                           |
| Fonte complementar        | página atual do cliente, `falangapneumatica.com.br/compressores-de-parafuso/` (textos, fotos, catálogo) |
| Briefing de campanha      | não — palavras-chave por lista informada                                                                |
| Base de código            | cópia da LP de manutenção da Falanga (mesmo cliente, visual aprovado em 21/10/2026)                     |

## Campanha

| Campo                      | Valor                                                                                                                |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal    | `compressor de parafuso` — no H1 ("Compressores de parafuso Schulz") e no title                                      |
| Origem                     | lista informada                                                                                                      |
| Área atendida              | Nordeste, com unidades em Fortaleza/CE e Recife/PE — no title, no hero e num selo                                    |
| Negativas de oferta        | nenhuma informada                                                                                                    |
| Claims proibidos           | `oficial`. `autorizada`/`autorizado` liberados em 23/10/2026: o site do cliente diz "Distribuidor Autorizado" Schulz |
| Divergência de vocabulário | "compressores de parafuso industriais" (cliente) × "compressor de parafuso" (campanha): o H1 usa a forma da campanha |

### Famílias de palavra-chave

| Família          | Termos                                                                      | Bloco que responde                      | Status                           |
| ---------------- | --------------------------------------------------------------------------- | --------------------------------------- | -------------------------------- |
| produto          | compressor de parafuso; compressor industrial; compressor rotativo; …       | `linhas`, `aplicacoes`                  | coberta                          |
| marca Schulz     | compressor Schulz; distribuidor Schulz; revendedor Schulz; …                | `linhas`, hero, `diferenciais`          | coberta                          |
| tratamento de ar | secador de ar                                                               | `linhas` (card do SRS 60), `aplicacoes` | coberta — era lacuna no briefing |
| localização      | compressores Fortaleza; compressores Recife; compressor Schulz em Recife; … | title, hero, selo                       | coberta                          |

### Comitê de compra

| Papel      | Argumento de compra                               | Bloco que responde                   | Status   |
| ---------- | ------------------------------------------------- | ------------------------------------ | -------- |
| Engenharia | o compressor certo para a demanda de ar           | `linhas`, `processo`                 | inferido |
| Compras    | condições de fornecimento e cobertura no Nordeste | `linhas`, `processo`, `diferenciais` | inferido |
| Manutenção | suporte técnico depois da compra                  | `aplicacoes`, `diferenciais`         | inferido |

### Conteúdo futuro

Nenhum grupo pausado informado.

## Composição

Derivada em: 21/10/2026 por `npm run ficha` — `linhas processo aplicacoes diferenciais`.

**`npm run compose` não foi rodado.** A composição derivada é idêntica à que a base copiada já tinha montada (`lp.manifest.json` e `src/pages/index.astro` batem com ela), e o `compose` recopiaria os componentes da biblioteca, desfazendo as variantes locais herdadas. O `check:lp` confirma página, manifesto e composição.

### Seções que entraram

| Fase       | Seção          | Fundo     | Respiro         | Veredicto na ficha | Famílias que responde              |
| ---------- | -------------- | --------- | --------------- | ------------------ | ---------------------------------- |
| oferta     | `linhas`       | branco    | `open`          | completo           | produto, marca Schulz, secador     |
| apoio      | `processo`     | branco    | `panel-lead`    | completo (navy)    | produto, secador                   |
| prova      | `aplicacoes`   | cinza-100 | `centered-lead` | completo           | produto, secador                   |
| autoridade | `diferenciais` | cinza-100 | `overlap`       | completo (navy)    | produto, marca Schulz, localização |

### Blocos que ficaram fora

| Bloco            | Veredicto     | O que falta para entrar                                                 |
| ---------------- | ------------- | ----------------------------------------------------------------------- |
| `vitrine`        | insuficiente  | só 4 produtos; pede 6 a 24                                              |
| `especificacoes` | insuficiente  | 4 a 10 modelos comparáveis, com colunas técnicas e valores              |
| `identificar`    | insuficiente  | os 6 dados que o comercial pede para dimensionar ou cotar um compressor |
| `situacoes`      | não se aplica | compra planejada, não reativa                                           |
| `segmentos`      | insuficiente  | setores atendidos, com equipamentos e fotos                             |
| `clientes`       | insuficiente  | 4 a 8 logos autorizadas e 3 números com fonte                           |
| `perguntas`      | insuficiente  | lista de dúvidas reais do comercial                                     |
| `escopo`         | não se aplica | não é consolidação de compras                                           |

## Entradas do núcleo

| #   | Entrada                 | Valor                                                                                          | Origem                                                              |
| --- | ----------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1   | MARCA                   | Falanga Pneumática                                                                             | briefing                                                            |
| 2   | MARCA_CURTA             | Falanga                                                                                        | briefing (inferido)                                                 |
| 3   | PRODUTO_PRINCIPAL       | Compressores de parafuso Schulz                                                                | briefing (inferido)                                                 |
| 4   | CONTEXTO_DE_USO         | operações industriais                                                                          | briefing                                                            |
| 5   | PUBLICO                 | Manutenção, Engenharia, Compras                                                                | **inferido** — ausente no material                                  |
| 6   | HERO                    | distribuidor Schulz · fornecimento no Nordeste · suporte · 40 anos                             | briefing                                                            |
| 7   | MARCAS_ATENDIDAS        | Schulz, só por extenso (sem logo)                                                              | logo de terceiro: decisão do cliente pendente                       |
| 8   | SELOS_DE_CONFIANCA      | Fornecimento para todo o Nordeste · Suporte técnico especializado · Mais de 40 anos de mercado | briefing                                                            |
| 9   | ENDERECO                | R. Mirian Rocha, 97 - Fortaleza - CE · Rua Tomaz Gonzaga, 74 - Zumbi, Recife - PE              | briefing (sem CEP)                                                  |
| 10  | URL_FINAL + PRIVACIDADE | `https://falangapneumatica.com.br/compressores-de-parafuso/` · sem política                    | definida em 23/10/2026 — substitui a página atual do mesmo endereço |
| 11  | SHORTCODES              | padrão do plugin                                                                               | default                                                             |
| 12  | WHATSAPP                | `5585996267979` — botão flutuante ligado                                                       | briefing                                                            |
| 13  | STACK + PUBLICACAO      | Astro · `main` → `wp-build` · prévia na Vercel                                                 | default do padrão + Vercel                                          |
| 14  | TOKENS_DE_COR + FONTE   | os da LP de manutenção da Falanga (amarelo `#FDE001` e azul `#0043A1`)                         | herdado                                                             |
| 15  | CAMPANHA                | `compressor de parafuso`                                                                       | briefing                                                            |

## Assets

| Asset          | Arquivo                 | Origem                                                                                                                                                                            | Status                                                |
| -------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Logo           | `src/assets/LOGO.png`   | a da LP de manutenção (site do cliente, 341×82)                                                                                                                                   | entregue (baixa resolução: pedir vetor ou PNG 2×)     |
| Banner do hero | `src/assets/heroBg.png` | desde 23/10/2026, composição provisória (1720×1073) com os SRP 4025, 4050 e 5100 recortados das fotos de produto sobre fundo navy; substituiu o mockup com compressores de pistão | **provisório** — pedir banner com a linha SRP em alta |

| Asset                 | Arquivo                                            | Origem                                                                                                                                                                                       | Status                                                    |
| --------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 4 fotos de produto    | `src/assets/linhas/linha-1.png` … `-4.png`         | fotos 600×600 do site, recortadas sem as faixas da marca d'água e ampliadas para 800×600; fundo branco removido em 23/10/2026                                                                | entregue — fundo transparente (ampliadas de 600px)        |
| Galeria de `linhas`   | `galeria-1.webp` e `galeria-2.webp`                | 1: sala com SRP 5100 (arte do catálogo no site, 586×595); 2: SRP 4030 no galpão (LP de manutenção)                                                                                           | entregue (baixa resolução)                                |
| 4 fotos de aplicação  | `src/assets/aplicacoes/aplicacao-1.jpg` … `-4.jpg` | recortes da arte "sistema de ar comprimido Schulz" da LP antiga (2048×1972), com os números da legenda cobertos por remendos da própria imagem: compressor, reservatório, filtragem, secador | entregue (548–900px; render do fabricante, não foto real) |
| Foto dos diferenciais | `src/assets/diferenciais/cenario.jpg`              | a da LP de manutenção (técnico no SRP 4015)                                                                                                                                                  | **provisório** — pedir original                           |

## Conflitos com o padrão

| O que o material pedia | Regra do padrão | O que entrou no lugar |
| ---------------------- | --------------- | --------------------- |
| —                      | —               | —                     |

## Dados não aplicados

- E-mail `falanga@falangaservice.com.br` — e-mail não entra na LP.
- Telefone (85) 98129-5507 da página atual — o padrão não põe telefone na página; o WhatsApp do briefing vai no botão flutuante.
- Lista de fabricantes multimarcas — não responde ao tráfego centrado em Schulz.
- Frase "o retorno de investimento é garantido", do gráfico da LP antiga — promessa sem base. Os percentuais de economia ("até 38%", "até 50%") entram no comparativo de `linhas`, atribuídos à Schulz.
- Campos do formulário antigo (finalidade: consumo ou revenda) — o formulário é o shortcode do plugin.
- Imagem sem identificação `image(20261021-125101).png` — função não confirmada.

## Desvios e ajustes da execução

- **Ficha sem entrevista no chat.** Montada a partir do briefing e da página atual do cliente. Inferidos: descrições e características dos 4 produtos (o briefing as marcava como ausentes), a sequência de `processo`, as 4 `aplicacoes`, o público. Validar com o cliente e regerar a ficha se mudar.
- **SRP 4050 AD Flex.** "50 HP" vem do padrão de nome Schulz (SRP 3020 = 20 HP, SRP 3025 = 25 HP) e "velocidade variável" do catálogo da linha SRP 4000 Flex, na mesma página. Confirmar com o cliente.
- **"Distribuidor Schulz"** vem do texto do cliente ("Somos distribuidores Schulz"). "Oficial", que aparece na página atual, não entrou.
- **Base copiada da LP de manutenção.** Valem para esta LP os desvios registrados lá em 21/10/2026: header branco com a logo na barra, hero com foto a partir do fim da coluna 1, 4 pontos no hero, um único CTA no hero, variantes locais de `linhas`, `processo`, `aplicacoes` e `diferenciais`, card de cotação e divisórias arredondadas. Os scripts levam as mesmas exceções (`ficha.mjs` aceita 4 pontos no hero; `check-lp.mjs` com as assinaturas do header e do hero repinadas; `contract.mjs` com limite de 100 caracteres em `aplicacoes`).
- **`linhas` com foto de produto.** A variante herdada mostrava um ícone por card. Nesta LP de produto, cada card mostra chip, foto do equipamento, descrição e as três características. A exceção que aceitava `icon` nos itens de `linhas` saiu do `scripts/ficha.mjs`.
- **Comparativo das linhas Schulz em `linhas`**, no lugar da faixa de marcas atendidas: SRP 4000, SRP 4000 Dynamic, SRP 4000 Flex e SRP 5000 Flex, com velocidade, faixa de potência e um destaque de cada (campo `range` em `linhas.ts`).
- **`processo` no apoio.** O manifesto prefere `identificar` para produto, mas não há os 6 dados de cotação. Como compressor industrial passa por dimensionamento, o caminho do atendimento (levantamento → dimensionamento → proposta → fornecimento → suporte) entra como cadeia de capacidade, sem prazos.

## Revisão com o conteúdo da LP antiga (21/10/2026)

Pedido do usuário: melhorar a LP usando como referência a página atual do cliente, `falangapneumatica.com.br/compressores-de-parafuso/`. A composição não mudou (a regra deriva uma seção por fase); o conteúdo de cada seção passou a vir da LP antiga.

| Onde           | Antes                                                 | Depois (fonte na LP antiga)                                                                                                            |
| -------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Hero           | texto próprio; ponto "Suporte especializado"          | "Somos distribuidores Schulz…" (abertura da LP antiga); ponto "Linhas de 5 a 250 hp" (catálogo)                                        |
| `linhas`       | título genérico; faixa só com os nomes das linhas     | "Compressores com tecnologia de ponta" e o texto de eficiência e durabilidade; comparativo das 4 linhas do catálogo Schulz             |
| `aplicacoes`   | partes do sistema com fotos provisórias da manutenção | o sistema Schulz da arte da LP antiga (compressor rotativo, reservatório com separador de condensado, filtros coalescentes, secador)   |
| `diferenciais` | 5 motivos do briefing                                 | os blocos "Custo-benefício", "Falanga Pneumática — 40 anos" e "Schulz — confiabilidade e produto nacional" (desde 1963), mais Nordeste |
| Cotação        | texto próprio                                         | acrescenta "com as melhores condições para todo o Nordeste" (fecho da LP antiga)                                                       |

A moldura das fotos de `aplicacoes` deixou de ancorar no topo (a razão era o número embutido nas fotos do mockup da manutenção) e passou a centralizar.

## Desvios do padrão — abertura no mockup "Compressores Schulz" (22/10/2026)

O usuário enviou um mockup da abertura e pediu "deixe essa parte do meu site assim". O hero foi refeito sobre ele, mantendo os dois slots de shortcode e o H1 com a palavra-chave.

| O que o mockup pedia                                                                          | Como entrou                                                                                                                                                            | Regra do padrão afetada                                                  |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Compressores Schulz CSA 7,5 Twister, Bravo CSL 20 BR e MSV 20 Max no centro                   | o próprio mockup virou o banner: texto, card e botão do WhatsApp apagados por interpolação do fundo, recorte a partir do compressor amarelo                            | 4.1.3 — banner de 1981×900 (o mockup tem 1832×859)                       |
| Texto encostado à esquerda e card na margem direita                                           | conteúdo do hero até 1680px (como "Como funciona" e diferenciais); coluna de texto fixa (540px, 560px a partir de 1536px), janela do banner com o resto, card de 340px | 4.1.2 — grid `1fr 270px 300px`; assinatura A8 do `check-lp.mjs` repinada |
| Malha de blueprint no fundo à esquerda                                                        | camada `hero-blueprint` em CSS, com brilho azul no alto                                                                                                                | —                                                                        |
| "COMPRESSORES SCHULZ" como linha de abertura                                                  | **mantido** "Compressores de parafuso Schulz"                                                                                                                          | regra 17 — a palavra-chave fica no H1                                    |
| Pontos: Distribuidor Schulz, Fornecimento no Nordeste, Suporte técnico especializado, 40 anos | igual (o ponto "Linhas de 5 a 250 hp" saiu)                                                                                                                            | —                                                                        |
| Sem a linha "Fortaleza e Recife" abaixo do CTA                                                | removida do hero; a área atendida passou para o header                                                                                                                 | —                                                                        |
| Card "Solicite sua cotação / Fale com nossa equipe." com campos                               | cabeçalho no card, e o shortcode do chat logo abaixo — os campos são do plugin no WordPress; na prévia da Vercel aparece o texto do shortcode                          | regra 4 — slot de shortcode, nunca formulário próprio                    |

Em 1920px os três compressores aparecem entre o texto e o card. Abaixo de ~1500px não cabem: aparecem o Twister e o Bravo, e o card cobre o MSV 20. No mobile o banner é a faixa no rodapé do hero, como antes.

**Atenção de conteúdo (resolvida em 23/10/2026):** os três compressores do mockup eram de **pistão** (CSA 7,5 Twister, Bravo CSL 20 BR, MSV 20 Max), numa campanha de **compressor de parafuso**. O banner foi trocado por uma composição provisória com os SRP — ver "Revisão visual".

## Header (22/10/2026)

Pedido do usuário: "deixe esse header mais bonito". Filete amarelo-azul no topo, largura de 1680px (a logo alinha com o texto do hero), tagline com selo, área atendida "Fortaleza e Recife · Todo o Nordeste" com pin, CTA com leve elevação no hover, fundo branco translúcido com desfoque e sombra só depois que a página rola. Sem menu e sem telefone (regra 1 e 4.1.1).

## Elementos amarelos de fundo (22/10/2026)

Pedido do usuário: "nas partes brancas, alguns elementos de fundo na cor amarela, bem bonitos mas minimalistas, meio transparentes". Em `src/styles/global.css`, como pseudo-elementos atrás do conteúdo de `#linhas`, `#aplicacoes` e `#cotacao`: anéis finos com halo, malhas de pontos esmaecidas, um brilho atrás do card da cotação e listras diagonais. As seções ganharam `overflow: clip` para os elementos não vazarem.

## Revisão visual (23/10/2026)

Checagem completa da página (360, 768, 1024, 1440 e 1920px) e decisões do usuário, ponto a ponto:

| Ponto                                    | Decisão / o que mudou                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Hero com compressores de pistão          | banner provisório com SRP 4025, 4050 e 5100 recortados; no celular a faixa ancora em `0% 75%` para não cortar a base   |
| Overflow horizontal em 360 e 1024px      | cards de número da economia quebram linha e empilham; endereço do footer quebra até 1280px                             |
| "Oficial" (decisão do briefing)          | removido do texto e bloqueado em `campaign.forbidden`                                                                  |
| Vão de 340px do chat no celular          | reserva de altura só a partir de 1024px                                                                                |
| Gráfico de economia no celular           | texto antes do gráfico; rótulos menores com hifenização                                                                |
| 8 cards de produto empilhados no celular | trilho com setas abaixo de 1024px                                                                                      |
| Card escuro (`dark: true` do secador)    | mantidos todos claros; o flag fica só pelo contrato da biblioteca                                                      |
| Repetições de texto                      | Nordeste, "até 50%", compressor certo, tecnologia de ponta e "para a sua indústria" reduzidos; diferenciais reescritos |
| Vocabulário de CTA                       | "Solicite sua cotação" em todos os botões de cotação; header mantém "Fale com um especialista" (mockup)                |
| Nomenclatura                             | potência em hp, modelos sem hífen, tags por potência, características sem "Parafuso rotativo"/"Compressor de parafuso" |
| Card 02 do Sistema (reservatório)        | na legenda da Schulz o tanque é o reservatório de baixa pressão; recorte reenquadrado no tanque                        |
| Card 01 do Sistema × galeria             | mantido: a galeria é foto real do SRP 5100, o card é o render da arte — único compressor da cena                       |
| Mantidos sem alteração                   | tagline do header, valores do gráfico (medidos da arte antiga, sem fonte numérica), title com 72 caracteres            |

A arte do sistema Schulz no site do cliente tem no máximo 2482px; os recortes de aplicação já estão na escala máxima dela.

### Fotos a pedir ao cliente

- Banner do hero com a linha SRP (parafuso), em alta — substitui a composição provisória.
- Fotos dos produtos SRP 3020, SRP 3025, SRP 4050 e SRP 60 em pelo menos 800×600, de preferência já recortadas.
- Fotos reais do sistema de ar (compressor, reservatório, filtros, secador) em pelo menos 1200px de largura.
- Original da foto do técnico (`cenario.jpg`) em pelo menos 1600px.
- Logo em vetor ou PNG 2×.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 21/10/2026
- [ ] Todos os assets reais entregues — nenhum placeholder resta, mas o banner do hero é uma composição provisória, os diferenciais reaproveitam a foto da LP de manutenção, as aplicações são recortes de um render do fabricante, e as fotos de produto vêm do site em 600×600
- [x] `npm run verify` passa inteiro em: 21/10/2026 (0 erros, 13 avisos de resolução, proporção, recorte e tamanho do title)
- [x] Padrão B2 versão: `2.8.0`
