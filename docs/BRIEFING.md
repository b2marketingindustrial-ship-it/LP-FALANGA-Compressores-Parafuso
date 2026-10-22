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
| Claims proibidos           | `autorizada`, `autorizado` — mesma regra da LP de manutenção, sem comprovação no material                            |
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

| #   | Entrada                 | Valor                                                                                          | Origem                                        |
| --- | ----------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------- |
| 1   | MARCA                   | Falanga Pneumática                                                                             | briefing                                      |
| 2   | MARCA_CURTA             | Falanga                                                                                        | briefing (inferido)                           |
| 3   | PRODUTO_PRINCIPAL       | Compressores de parafuso Schulz                                                                | briefing (inferido)                           |
| 4   | CONTEXTO_DE_USO         | operações industriais                                                                          | briefing                                      |
| 5   | PUBLICO                 | Manutenção, Engenharia, Compras                                                                | **inferido** — ausente no material            |
| 6   | HERO                    | distribuidor Schulz · fornecimento no Nordeste · suporte · 40 anos                             | briefing                                      |
| 7   | MARCAS_ATENDIDAS        | Schulz, só por extenso (sem logo)                                                              | logo de terceiro: decisão do cliente pendente |
| 8   | SELOS_DE_CONFIANCA      | Fornecimento para todo o Nordeste · Suporte técnico especializado · Mais de 40 anos de mercado | briefing                                      |
| 9   | ENDERECO                | R. Mirian Rocha, 97 - Fortaleza - CE · Rua Tomaz Gonzaga, 74 - Zumbi, Recife - PE              | briefing (sem CEP)                            |
| 10  | URL_FINAL + PRIVACIDADE | `https://lp-compressores-de-parafuso.vercel.app` · sem política                                | **provisório** — URL final é a do WordPress   |
| 11  | SHORTCODES              | padrão do plugin                                                                               | default                                       |
| 12  | WHATSAPP                | `5585996267979` — botão flutuante ligado                                                       | briefing                                      |
| 13  | STACK + PUBLICACAO      | Astro · `main` → `wp-build` · prévia na Vercel                                                 | default do padrão + Vercel                    |
| 14  | TOKENS_DE_COR + FONTE   | os da LP de manutenção da Falanga (amarelo `#FDE001` e azul `#0043A1`)                         | herdado                                       |
| 15  | CAMPANHA                | `compressor de parafuso`                                                                       | briefing                                      |

## Assets

| Asset          | Arquivo                 | Origem                                                                   | Status                                                           |
| -------------- | ----------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Logo           | `src/assets/LOGO.png`   | a da LP de manutenção (site do cliente, 341×82)                          | entregue (baixa resolução: pedir vetor ou PNG 2×)                |
| Banner do hero | `src/assets/heroBg.png` | o da LP de manutenção: técnico da Falanga num compressor Schulz SRP 4015 | **provisório** — pedir banner próprio, com o produto em destaque |

| Asset                 | Arquivo                                            | Origem                                                                                                                                                                                       | Status                                                         |
| --------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 4 fotos de produto    | `src/assets/linhas/linha-1.png` … `-4.png`         | fotos 600×600 do site, recortadas sem as faixas da marca d'água e ampliadas para 800×600                                                                                                     | entregue — fundo branco, não recortado (o card usa `multiply`) |
| Galeria de `linhas`   | `galeria-1.webp` e `galeria-2.webp`                | 1: sala com SRP 5100 (arte do catálogo no site, 586×595); 2: SRP 4030 no galpão (LP de manutenção)                                                                                           | entregue (baixa resolução)                                     |
| 4 fotos de aplicação  | `src/assets/aplicacoes/aplicacao-1.jpg` … `-4.jpg` | recortes da arte "sistema de ar comprimido Schulz" da LP antiga (2048×1972), com os números da legenda cobertos por remendos da própria imagem: compressor, reservatório, filtragem, secador | entregue (548–900px; render do fabricante, não foto real)      |
| Foto dos diferenciais | `src/assets/diferenciais/cenario.jpg`              | compressor do primeiro mockup de hero da Falanga, 1102×755, espelhado (troca de 22/10/2026 — a foto do técnico tinha 1020×482 e era ampliada 1,5×)                                           | **provisório** — imagem genérica; pedir foto real em alta      |

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

**Foto dos diferenciais (22/10/2026).** O usuário apontou a foto com má qualidade. A foto do técnico tinha 1020×482 (recortada do mockup "compressor service showcase", que não tem versão maior) e o bloco a ampliava ~1,5× para preencher a altura; o componente também nunca servia mais que 1020px. Entrou o compressor do primeiro mockup de hero da Falanga ("Premium industrial compressor website hero.png", PNG sem compressão), recortado em 1102×755 (≈3:2, sem ampliação em 1920px) à direita do texto do mockup e espelhado para o equipamento ficar longe da borda esmaecida. O `WhyBrand.astro` passou a servir até 1116px com `quality="high"`. A primeira tentativa, um recorte da arte do sistema Schulz, foi descartada: a arte já vem comprimida do site e continuava borrada nesse tamanho. O compressor do mockup é genérico (não é um Schulz); trocar por foto real da Falanga ou de um Schulz em alta (≥1600×1000) quando o cliente enviar.

A moldura das fotos de `aplicacoes` deixou de ancorar no topo (a razão era o número embutido nas fotos do mockup da manutenção) e passou a centralizar.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 21/10/2026
- [ ] Todos os assets reais entregues — nenhum placeholder resta, mas o banner do hero reaproveita o da LP de manutenção, as aplicações são recortes de um render do fabricante, a foto dos diferenciais é genérica (mockup), e as fotos de produto vêm do site em 600×600
- [x] `npm run verify` passa inteiro em: 21/10/2026 (0 erros, 13 avisos de resolução, proporção, recorte e tamanho do title)
- [x] Padrão B2 versão: `2.8.0`
