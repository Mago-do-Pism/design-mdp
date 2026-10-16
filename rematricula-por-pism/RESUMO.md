# Rematrícula por Pism: decisões de design

Protótipos HTML (A é interativo: troque de Pism, ligue/desligue a landing, edite o título, abra o modal; estados por hash #open #unsaved #modal #p2).
Telas: A (editor da landing), B (pop-up universal), D (visão do aluno). Prints em prints/.

- Sem aba "Visão geral". O item de menu Rematrícula do admin abre direto o editor da landing. O pop-up fica como segunda aba ("Landing por Pism" | "Pop-up").
- Sem estado vazio: cada Pism nasce com o texto padrão do design, então o toggle de ativo nunca fica travado.
- Toggle de ativo por Pism na barra de edição, ao lado do seletor. Vale na hora, independente do Salvar.
- Seletor na barra com selo colorido (Pism 1 verde-azulado, Pism 2 índigo), status e data da última edição. Faixa de 4px da cor do Pism sob a barra. A cor é só do admin.
- Mobile: barra em 2 linhas, sem overflow a 390px.
- Trocar de Pism com alteração não salva: modal de 3 saídas (Salvar e ir, Descartar e trocar, Continuar editando).
- Pop-up (B): universal, um só pros dois Pisms, um único toggle. O botão leva pra landing da matrícula mais recente do aluno.
- Aluno (D): menu, pop-up e página só pra quem tem Pism 1 ou 2 (matrícula ativa ou vencida). ENEM, Pism 3 e Pism 3 + ENEM não veem nada, e /rematricula volta pro Início.
- Aluno nos dois Pisms: um item de menu, um pop-up, e na landing um link discreto no topo pra trocar pro outro Pism (?pism=1).

Textos, números e fotos das landings são ilustrativos ([PREENCHER] onde falta dado real). Fontes Sora/AkagiPro caem em fallback nos prints.
