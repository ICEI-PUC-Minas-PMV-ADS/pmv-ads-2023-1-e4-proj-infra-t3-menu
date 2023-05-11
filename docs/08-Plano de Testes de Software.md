# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

## Testes de Caixa Branca: 
Os testes descritos abaixo são realizados em ambiente de desenvolvimento. <br>
A aplicação Cooking Digital é composta por três backends e uma API REST que deverão ter todas as suas rotas validadas diretamente em um navegador.

| | `Backend de usuários: Users API` | https://localhost:7098/swagger/index.html |
|:---------:|:---------:|:---------:|
|`CT01`| A rota Create, disponível no método POST, deverá permitir a criação de um usuário mediante fornecimento dos dados do usuário.| |
|`CT02`| As rotas disponíveis nos métodos GET/DELETE/PUT não deverão permitir execução, uma vez que não é possível informar o token de autenticação por esse link. | O testador deverá validar se todas as rotas descritas retornam erro 401 - usuário não autenticado.| 
|`CT03`| A rota authenticate disponível no método POST deverá permitir a autenticação de um usuário mediante fornecimento do ID e senha válidos. | O testador deverá verificar se a aplicação retorna um token para acesso do usuário. | 
| | `Backend de Produtos: Products API` | https://localhost:7030/swagger/index.html |
| | `Backend de Pedidos: Orders API` | https://localhost:7251/swagger/index.html |
|`CT04`| As rotas disponíveis nos métodos GET/DELETE/PUT/PATCH não deverão permitir execução, uma vez que não é possível informar o token de autenticação por esse link. | O testador deverá validar se todas as rotas descritas retornam erro 401 - usuário não autenticado.| 
| | `API Rest` | http://localhost:3000/api-docs/ |
|`CT05`| Testar todas as rotas disponíveis seguindo as definições disponíveis no documento swagger da API. Algumas considerações especiais: | | 
|`CT05.1`| Criação de usuário: deverá permitir a criação de usuário sem exigir que antes exista um usuário logado. | | 
|`CT05.2`| Login de usuário: deverá permitir a conexão de um usuário mediante Id e senha corretos |O testador deverá verificar se a aplicação retorna um token para acesso do usuário.| 
|`CT05.3`| Validar o acesso às rotas considerando restrição de acesso por perfil de usuário. O perfil cliente somente poderá visualizar os dados cadastrais de seu próprio usuário. O perfil administrador poderá visualizar os dados cadastrais de qualquer usuário, exceto a senha. | | 

## Testes de Caixa Preta: 
Os testes descritos abaixo são realizados na interface do sistema

 |`CT06`| Validar Home Page com informações dos produtos e navegação para as demais páginas | |
 |:---------:|:---------:|:---------:|
 |`CT07`| Validar criação de usuário | |
 |`CT08`| Validar login de usuário | |
 |`CT09`| Validar na página 'Cadastro de Pedidos' a inclusão de um novo pedido | |
 |`CT10`| Validar na página 'Cadastro de Pedidos' a funcionalidade de selecionar a quantidade desejada dos produtos | |
 |`CT11`| Validar na página 'Cadastro de Pedidos' a possibilidade do usuário selecionar mais de um produto | |
 |`CT12`| Validar na página 'Cadastro de Pedidos' a criação e disponibilidade do número do pedido realizado para o usuário | |
 |`CT13`| Validar na Home Page a pesquisa de pedidos pelo número do pedido | |
 |`CT14`| Validar na página 'Pedidos' as informações e o status dos pedidos realizados pelo usuário | |
 |`CT15`| Validar na página Pedidos ou itens do pedido, informações do pedido, tais como: produto solicitado, quantidade, preço unitário e valor total | |
 |`CT16`| Validar na página de Pedidos a funcionalidade de cancelameno do pedido ainda não iniciado | |
 
 ## Testes de Segurança: 
O teste de segurança avalia se o sistema e os dados são acessados de maneira segura e apenas por usuários autorizados. <br>
Os testes de segurança serão realizados em duas etapas:

Etapa 1 - Testes manuais

|`Testes manuais`|  | |
|:---------:|:---------:|:---------:|
|`CT17`| Forçar acesso à pagina "Cadastro de pedidos" sem primeiramente realizar login no sistema. | |
|`CT18`| Forçar acesso ao cadastro de usuários sem primeiramente realizar login no sistema. | |
|`CT19`| Forçar acesso ao cadastro de usuários realizando o login com perfil não autorizado. | |

Etapa 2: Testes Automatizados <br>
Para a realização dos testes automatizados, o testador deverá assumir o papel de um invasor realizando ataques que visem quebrar a segurança do sistema.
A ferramenta a ser utilizada será a ZAP OWAP Zed Attack Proxy ou uma equivalente. <br>
Link da aula do profesor: https://pucminas.instructure.com/courses/111996/pages/unidade-2-tema-4-fluxo-de-trabalho?module_item_id=2571558

|`Testes automatizados`|  | |
|:---------:|:---------:|:---------:|
|`CT20`| Tentar obter senhas dos usuários do sistema. | |
|`CT21`| Tentar apossar-se do sistema negando serviço para outros usuários. | |
|`CT22`| Tentar causar erros de propósito no sistema. | |
|`CT23`| Acessar dados inseguros para descobrir a chave para entrada no sistema. . | |

 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
