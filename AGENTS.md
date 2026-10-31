# AGENTS.md

Este arquivo define as regras que você (agente de IA) deve seguir neste repositório. Leia-o por inteiro antes de qualquer tarefa e consulte-o sempre que tiver dúvida.

## 1. Contexto do projeto

Este é o portfólio pessoal do Yan Porfirio. O projeto original foi feito em front-end puro (HTML5, CSS3 e JavaScript vanilla) e está sendo migrado para **React + Tailwind CSS**.

- Os arquivos do projeto antigo ficam em `legacy/` e são **somente referência**. Nunca edite nada dentro de `legacy/`.
- O projeto novo vive na raiz do repositório.
- O objetivo da migração é modernizar a stack **preservando o design atual**. Melhorias de design só acontecem na fase de melhorias e só com aprovação.

## 2. Regras inegociáveis

1. **Somente front-end.** Não há backend, servidor, banco de dados, API, rotas de servidor, SSR, autenticação nem variáveis de ambiente com segredos. Não crie nada disso e não instale dependências para isso.
2. **Sem consumo de API.** O site é 100% estático. Todo o conteúdo (projetos, skills, links, textos) vem de arquivos locais em `src/data/`.
3. **Preserve o design.** Cores, tipografia, espaçamentos, layout, comportamento responsivo e animações devem ficar visualmente idênticos ao projeto em `legacy/`, salvo quando eu pedir explicitamente uma mudança.
4. **Preserve o conteúdo.** Não reescreva, traduza, resuma nem invente textos. Mantenha o idioma e o conteúdo originais.
5. **Um passo por vez.** Execute apenas a tarefa pedida no prompt atual. Não adiante etapas futuras, não refatore código fora do escopo e não adicione funcionalidades não pedidas.
6. **Pergunte antes de decidir.** Se houver ambiguidade ou mais de um caminho razoável, apresente as opções e aguarde minha escolha. Não assuma.
7. **Dependências mínimas.** Antes de instalar qualquer pacote além da stack definida abaixo, explique o motivo e peça aprovação.
8. **Não apague nada sem avisar.** Não remova arquivos, nem a pasta `legacy/`, até que eu autorize na fase de limpeza final.

## 3. Stack definida

| Item | Escolha |
| --- | --- |
| Build tool | Vite |
| Biblioteca de UI | React (versão estável atual) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v4 (plugin `@tailwindcss/vite`, `@import "tailwindcss";`) |
| Roteamento | Nenhum por padrão (single page com seções e âncoras). Só adicione `react-router` se eu pedir |
| Estado | Apenas `useState`, `useReducer`, `useContext` e hooks próprios. Sem Redux, Zustand etc. |
| Ícones | Mantenha os ícones já usados no projeto antigo. Se precisar de uma lib, proponha antes |
| Lint e formatação | ESLint e Prettier |

## 4. Estrutura de pastas

```text
/
├── AGENTS.md
├── README.md
├── legacy/                  # projeto antigo, somente leitura
├── public/                  # favicon, imagens estáticas, PDF do currículo
├── src/
│   ├── assets/              # imagens e fontes usadas via import
│   ├── components/
│   │   ├── layout/          # Header, Footer, Container, Section
│   │   ├── sections/        # Hero, About, Skills, Projects, Contact...
│   │   └── ui/              # Button, Card, Badge, SectionTitle...
│   ├── data/                # projects, skills, socialLinks, navLinks
│   ├── hooks/               # useTheme, useInView, useScrollSpy...
│   ├── types/               # tipos TypeScript compartilhados
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css            # @import "tailwindcss" + @theme (design tokens)
└── ...
```

Proponha ajustes na estrutura antes de aplicá-los.

## 5. Design system e Tailwind

- Todos os valores de design vivem como **tokens** no bloco `@theme` em `src/index.css`: cores, famílias de fonte, escala de tipografia, espaçamentos, raios, sombras e breakpoints.
- Nos componentes use as classes geradas pelos tokens (`bg-primary`, `text-muted`, `font-heading`, `rounded-card`). **Não** use valores arbitrários soltos como `bg-[#1a1a2e]` quando já existir um token equivalente. Se faltar um token, crie-o em `@theme` e avise.
- Prefira utilitários Tailwind. Use CSS próprio em `index.css` apenas para o que o Tailwind não resolve bem (por exemplo `@keyframes` complexos), sempre com comentário explicando o motivo.
- Mobile first. Os estilos base valem para mobile, e `sm:`, `md:`, `lg:` ampliam para telas maiores. Os breakpoints devem reproduzir o comportamento responsivo do projeto antigo.
- Suporte ao tema (claro/escuro) deve seguir o que já existe no projeto antigo. Não crie tema novo se o original não tinha.

## 6. Convenções de código

- Componentes funcionais com hooks. Sem class components.
- Um componente por arquivo, nome em `PascalCase`, arquivo com o mesmo nome (`ProjectCard.tsx`).
- Hooks em `camelCase` começando com `use` (`useInView.ts`).
- Nomes de variáveis, funções, componentes e arquivos em **inglês**. O conteúdo exibido na tela mantém o idioma original do site.
- Props tipadas com `interface` ou `type`. Proibido usar `any`; se for inevitável, justifique em comentário.
- Dados repetitivos (lista de projetos, skills, links) ficam em `src/data/` e são renderizados com `.map()` usando `key` estável. Nunca duplique JSX para itens repetidos.
- Componentes pequenos e focados. Se um arquivo passar de aproximadamente 150 linhas, avalie dividir.
- Sem `dangerouslySetInnerHTML`, sem manipulação direta do DOM (`document.querySelector`, `addEventListener`) dentro de componentes. Todo comportamento que era JavaScript vanilla deve virar estado, efeitos (`useEffect`) ou hooks próprios, com limpeza de listeners e observers.
- Comentários apenas onde o motivo não é óbvio. Nada de comentários que repetem o código.
- Sem `console.log` esquecido no código final.

## 7. Acessibilidade e qualidade

- Use HTML semântico (`header`, `nav`, `main`, `section`, `footer`, `article`, `button`, `a`). Não use `div` clicável no lugar de `button` ou `a`.
- Toda imagem precisa de `alt` adequado (vazio apenas para imagens decorativas).
- Hierarquia de títulos coerente (um único `h1`).
- Elementos interativos devem ser acessíveis por teclado e ter estado de foco visível.
- Respeite `prefers-reduced-motion` nas animações.
- Mantenha contraste de cor adequado (WCAG AA) ao propor melhorias.
- Imagens com dimensões definidas e `loading="lazy"` quando fora da primeira dobra.

## 8. Fluxo de trabalho

Para cada tarefa:

1. Leia este arquivo e consulte o código relevante em `legacy/`.
2. Se a tarefa for grande ou ambígua, **apresente um plano curto e espere aprovação** antes de escrever código.
3. Implemente somente o que foi pedido.
4. Rode `npm run lint` e `npm run build` e corrija os erros que você introduziu.
5. Ao terminar, responda com este relatório:
   - **O que foi feito:** resumo curto.
   - **Arquivos criados/alterados.**
   - **Equivalência com o original:** o que veio de onde em `legacy/`.
   - **Diferenças visuais ou de comportamento conhecidas** (se houver).
   - **Decisões que tomei e dúvidas pendentes.**
   - **Como validar:** o que eu devo abrir ou testar no navegador.
6. Pare e aguarde meu próximo prompt.

Sugira mensagens de commit no padrão Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`), mas **não faça commit nem push** a menos que eu peça.

## 9. Comandos

```bash
npm install        # instalar dependências
npm run dev        # servidor de desenvolvimento (Vite)
npm run build      # build de produção
npm run preview    # servir o build localmente
npm run lint       # ESLint
```

## 10. Definição de pronto

Uma tarefa só está pronta quando:

- O resultado é visualmente equivalente ao original (desktop, tablet e mobile).
- `npm run lint` e `npm run build` passam sem erros.
- Não há erros nem avisos no console do navegador.
- Os dados estão em `src/data/` e os estilos usam os tokens do `@theme`.
- Nenhuma regra da seção 2 foi violada.

## 11. O que nunca fazer

- Criar backend, chamadas `fetch`/`axios` para APIs ou qualquer lógica server-side.
- Alterar o design ou o conteúdo sem pedido explícito.
- Editar a pasta `legacy/`.
- Instalar bibliotecas pesadas ou desnecessárias (UI kits completos, bibliotecas de animação, etc.) sem aprovação.
- Misturar várias etapas do plano em uma única resposta.
- Fazer commit, push ou deletar arquivos sem autorização.
