# TPC2: Página Web de uma Escola de Música

## Autor

**Nome:** Carlos Dias

**Id:** A93185

## Enunciado TPC2

**Data:** 2024-02-25

**Resumo:** Vamos desenvolver uma página web em Node.js que utiliza um servidor JSON para armazenar informações sobre uma escola de música. Este dataset incluirá dados sobre alunos, cursos e instrumentos.

O website terá páginas de índice para listar os alunos, instrumentos e cursos disponíveis. Além disso, terá páginas detalhadas para exibir informações específicas sobre um aluno ou um curso.

## Serviço Node.js e Páginas

- Página Inicial '/' : Aqui você encontrará opções para acessar as listas de alunos, cursos e instrumentos.

- Página de Lista de Cursos '/cursos' : Apresenta uma lista de cursos disponíveis, organizados em ordem alfabética pelo nome do curso.

- Página de Detalhes do Curso '/cursos/CX' : Fornece informações detalhadas sobre o curso com o código CX, incluindo ID, duração e instrumento associado.

- Página de Lista de Alunos '/alunos' : Exibe uma lista de alunos em ordem alfabética por nome.

- '/alunos/AX' : Página de `detalhes do aluno AX` onde consta o `id`, `nome`, `data de nascimento`, `curso`(com hiperligação para a página do curso), `ano do curso` e `instrumento`.

- Página de Lista de Instrumentos '/instrumentos' : Apresenta uma lista de instrumentos ordenados alfabeticamente pelo nome.
