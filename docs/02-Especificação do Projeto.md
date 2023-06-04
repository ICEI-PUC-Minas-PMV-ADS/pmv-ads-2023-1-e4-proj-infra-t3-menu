# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

A partir das entrevistas, foram definidas as personas representadas no quadro a seguir: 

| `Persona` | `Idade` | `Gênero` | `Ocupação-Cargo` | `Motivações` | `Objetivos`  |  `Redes de Contato` |
|:-----------:|:---------:|:-------------:|:---------------------------------:|:--------------:|:----------------:|:------------:|
|Fred Lopes|28 anos|Masculino| Gerente de Vendas |Fred é um jovem profissional de 28 anos que atualmente trabalha como gerente de vendas em uma empresa de ferramentas em Belo Horizonte.| Fred é um cliente regular de restaurantes e muitas vezes fica confuso ao escolher o que comer no cardápio. Ele deseja uma solução que possa ajudá-lo a tomar decisões mais informadas sobre os pratos disponíveis, economizando tempo e evitando possíveis enganos na hora de fazer o pedido. | Para interagir com Fred você pode usar esses canais de comunicação abaixo por onde consome conteúdo. • Redes sociais • Midias On Line |
|Rodrigo Marques|19 anos|Não binaria| Estudante |Rodrigo é um jovem surdo de 19 anos que está atualmente cursando o curso de Marketing em uma universidade de renome em Contagem. Ele é um jovem motivado, com umapaixão por comunicação e publicidade, e está sempre procurando maneiras de aplicar suas habilidades criativas e analíticas para ajudar as empresas a atingir seus objetivos de negócios.| Rodrigo é um cliente que tem deficiência auditiva e muitas vezes tem dificuldadespara compreender o cardápio de um restaurante. Ele deseja uma solução que possaajudá-lo a escolher pratos e entender as informações sobre os ingredientes, preços eoutras informações relevantes.| Para interagir com Rodrigo você pode usar esses canais de comunicação abaixo por onde consome conteúdo. • Redes sociais • Midias On Line |
|Marilia Gomes|51 anos|Feminino| Chefe de Cozinha |Marília, 51 anos, casada e mãe de 3 filhos, é uma cozinheira talentosa e dedicada. Com uma paixão pela culinária desde jovem, ela adora preparar pratos deliciosos e nutritivos para sua família e amigos. Sempre em busca de novas receitas e ingredientes, Marília é conhecida por sua criatividade e habilidades culinárias excepcionais.| Marília gostaria de ter um aplicativo que lhe permita visualizar o menu do almoço de um restaurante todos os dias, bem como conferir o cardápio da semana antecipadamente. Ela adora experimentar novos pratos e não gosta de ter que ligar para o restaurante ou ficar esperando o garçom toda vez para saber o que está no cardápio. | Para interagir com Marilia você pode usar esses canais de comunicação abaixo por onde consome conteúdo. • Redes sociais • Midias On Line |

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

A cada dia, temos tido rotinas exaustivas que têm influenciado negativamente no comportamento alimentar das pessoas. Infelizmente, a maioria não consegue manter uma alimentação adequada por não conseguirem uma pausa que seja suficiente o bastante para realizar suas refeições regularmente. Além disso, muitas sequer conseguem priorizar um tempo para prepararem uma alimentação de qualidade que possa suprir suas necessidades nutricionais.

Por outro lado, estes dias corridos que vivenciamos hoje proporcionaram a popularização de lanches rápidos e que, aliados ao aperfeiçoamento diário da tecnologia, facilitaram o acesso a alimentações práticas e acessíveis.

### Descrição Geral da Proposta

Como proposta para atender a demanda da situação atual, forneceremos uma plataforma digital na qual as pessoas poderão se cadastrar, visualizar e escolher os produtos e efetuar o pedido de lanches com comodidade, segurança e de maneira personalizada. Neste documento não abordaremos sobre os métodos de pagamento, pois não comporão o escopo desse projeto.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/90807703/5a96294a-ef84-48bd-bf79-5d79e48960db)

## Indicadores de Desempenho

Para avaliação de desempenho e metas do negócio, faremos o acompanhamento de cinco indicadores, conforme abaixo:

### Receita gerada por mês
Evolução mensal da receita total gerada com os pedidos realizados pelos usuários.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/90807703/9950216c-e60b-41fc-8488-e9e34ac57dcd)

### Total de pedidos por mês
Evolução mensal do total de pedidos realizados pelos usuários.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/90807703/704fd2f4-4d41-427f-b3b2-a17b4f26a19b)

### Total de pedidos por produto
Comparativo do total de reservas que cada quadra teve no período.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/90807703/58d49d28-3833-475f-80da-ced99cff8b31)

### Total de usuários por gênero
Comparativo do total de jogadores de cada sexo que utilizaram as quadras.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/90807703/4d7b791e-a9fa-469b-b2a6-b84d33b325ba)

### Média de idade dos usuários por gênero
Comparativo da média de idade dos jogadores de cada sexo que utilizaram as quadras.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/90807703/f1af0238-5875-460a-8d21-6bb26afb8c71)

## Requisitos

O escopo do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários e dos requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar, de modo geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID   | Descrição do Requisito  | Prioridade |
|-----|-----------------------------------------|----|
|RF-01| A aplicação deverá apresentar na Home Page as informações dos produtos e a navegação para as demais páginas   | Média | 
|RF-02| A aplicação deverá permitir ao usuário efetuar login   | Alta | 
|RF-03| A aplicação deverá apresentar na página "Meus Pedidos" a funcionalidade de selecionar a quantidade desejada dos produtos   | Alta | 
|RF-04| A aplicação deverá permitir na página 'Meus Pedidos' que o usuário selecione mais de um produto   | Média | 
|RF-05| A aplicação deverá permitir ao usuário efetuar o cadastro   | Alta | 
|RF-06| A aplicação deverá permitir na página de "Meus Pedidos" que o usuário realize o cancelamento de seu pedido em andamento   | Alta | 
|RF-07| A aplicação deverá apresentar na página 'Meus Pedidos' as informações e o status dos pedidos realizados pelo usuário   | Média | 
|RF-08| A aplicação deverá disponibilizar ao usuário o código do pedido realizado   | Alta | 
|RF-09| A aplicação deverá disponibilizar ao usuário as informações do pedido, tais como: produto solicitado, quantidade, preço unitário e valor total   | Média | 
|RF-10| A aplicação deverá permitir na página de "Carrinho", que o usuário inclua um pedido no carrinho   | Baixa | 
|RF-11|	A aplicação deverá permitir na página de "Carrinho", a visualização de todos intens adicionados no carrinho	| Média |
|RF-12| A aplicação deverá permitir na página de "Carrinho", a opção de exclusão de um item do carrinho | Alta |
|RF-13|A aplicação deverá permitir na página de "Carrinho", a finalização da compra dos itens presentes no carrinho | Alta |


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
