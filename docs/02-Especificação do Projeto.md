# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

A partir das entrevistas, foram definidas as personas representadas no quadro a seguir: 

| `Persona` | `Idade` | `Gênero` | `Ocupação-Cargo` | `Motivações` | `Objetivos`  |  `Redes de Contato` |
|:-----------:|:---------:|:-------------:|:---------------------------------:|:--------------:|:----------------:|:------------:|
|Fred Lopes|28 anos|Masculino| Gerente de Vendas |Fred é um jovem profissional de 28 anos que atualmente trabalha como gerente de vendas em uma empresa de ferramentas em Belo Horizonte.| Fred é um cliente regular de restaurantes e muitas vezes fica confuso ao escolher o que comer no cardápio. Ele deseja uma solução que possa ajudá-lo a tomar decisões mais informadas sobre os pratos disponíveis, economizando tempo e evitando possíveis enganos na hora de fazer o pedido. | Para interagir com Fred você pode usar esses canais de comunicação abaixo por onde consome conteúdo. • Redes sociais • Midias On Line |
|Rodrigo Lopes| 19 anos| Dona de casa, mãe de criança surda | Instagram e Whatsapp| Promover a independência de seu filho na leitura de textos em Português| Dificuldade no acompanhamento escolar do seu filho| Filmes e séries, Redes sociais|
|PROFESSORA CATARINA|43 anos|Professora de Potuguês para surdos em um grupo de adolescentes que se reúne em uma igreja aos sábados. O grupo possui idades mistas de 15 a 22 anos|	Whatsapp e Instagram|Auxiliar na aquisição do Português Brasileiro por surdos como segunda língua e Utilizar o website como ferramenta auxiliar de ensino de flexão verbal|Pouco material com interatividade disponível para o ensino de flexão verbal na Internet|Filmes, séries e redes sociais|
|CARLA FIGUEIRA|19 anos|Surda, estudante do 3º ano do Ensino Médio em uma escola pública de Belo Horizonte|Instagram, Whatsapp, Jogos online e NetFlix|Prestar prova do ENEM em 2022 para o curso de Artes Plásticas, assistir filmes legendados e melhorar as conversas que participo em redes sociais, como o Whatsapp|Ensino de baixa qualidade em escolas públicas, especialmente para Pessoas com Deficiência (PcD)| Séries,filmes, Jogos online e Redes sociais|

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

O escopo do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários e dos requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar, de modo geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID   | Descrição do Requisito  | Prioridade |
|-----|-----------------------------------------|----|
|RF-01| A aplicação deverá apresentar na Home Page as informações dos produtos e a navegação para as demais páginas   | Média | 
|RF-02| A aplicação deverá permitir ao usuário efetuar cadastro/login   | Alta | 
|RF-03| A aplicação deverá apresentar na página 'Pedidos' a funcionalidade de selecionar a quantidade desejada dos produtos   | Alta | 
|RF-04| A aplicação deverá permitir na página 'Pedidos' que o usuário selecione mais de um produto   | Média | 
|RF-05| A aplicação deverá apresentar na Home Page uma barra de pesquisa   | Alta | 
|RF-06| A aplicação deverá permitir na página de Pedidos que o usuário realize o cancelamento de seu pedido em andamento   | Alta | 
|RF-07| A aplicação deverá apresentar na página 'Pedidos' as informações e o status dos pedidos realizados pelo usuário   | Média | 
|RF-08| A aplicação deverá disponibilizar ao usuário o número do pedido realizado   | Alta | 
|RF-09| A aplicação deverá disponibilizar ao usuário as informações do pedido, tais como: produto solicitado, quantidade, preço unitário e valor total   | Média | 
|RF-10| A aplicação deverá disponibilizar ao usuário o número do pedido realizado   | Baixa | 

### Requisitos não Funcionais

A tabela abaixo apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| A aplicação deverá ser publicada em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | Alta | 
|RNF-02| A aplicação deverá ter bom nível de contraste entre os elementos da tela em conformidade |  Alta | 
|RNF-03| A aplicação deverá ser compatível com os principais sistemas operacionais mobile e web do mercado (Android, IOS, Google Chrome, Firefox, Microsoft Edge) |  Média | 
|RNF-04| Os bancos de dados serão estruturados utilizando MongoDB |  Alta | 
|RNF-05| O sistema deve ser responsivo para dispositivo móvel |  Alta | 
|RNF-06| O sistema deve processar as requisições do usuário em no máximo 3 segundos |  Alta | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 05/06/2023 |
|RE-02| O aplicativo deve se restringir às tecnologias básicas de Web e Mobile        |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho        |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
