# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

## Testes WEB
Os testes descritos abaixo são realizados na interface do sistema - 

 |`CT06`| Validar Home Page com informações dos produtos e navegação para as demais páginas | |
 |:---------:|:---------:|:---------:|
 |`CT07`| Validar criação de usuário | OK | 
 |`CT08`| Validar login de usuário | OK |
 |`CT09`| Validar na página 'Cadastro de Pedidos' a inclusão de um novo pedido | OK |
 |`CT10`| Validar na página 'Cadastro de Pedidos' a funcionalidade de selecionar a quantidade desejada dos produtos | FAIL |
 |`CT11`| Validar na página 'Cadastro de Pedidos' a possibilidade do usuário selecionar mais de um produto | FAIL |
 |`CT12`| Validar na página 'Cadastro de Pedidos' a criação e disponibilidade do número do pedido realizado para o usuário | OK |
 |`CT13`| Validar na Home Page a pesquisa de pedidos pelo número do pedido  | FAIL |
 |`CT14`| Validar na página 'Pedidos' as informações e o status dos pedidos realizados pelo usuário | OK|
 |`CT15`| Validar na página Pedidos ou itens do pedido, informações do pedido, tais como: produto solicitado, quantidade, preço unitário e valor total| OK |
 |`CT16`| Validar na página de Pedidos a funcionalidade de cancelameno do pedido ainda não iniciado | FAIL |
 
 ### Registro e Log dos testes - WEB
 
* As evidências dos testes realizados foram gravadas e estão disponibilizadas no link: https://drive.google.com/file/d/1ieKN_-jYPotd-yo2mH_i4brdtnzItLs0/view?usp=sharing

## Testes MOBILE
Os testes descritos abaixo são realizados na interface do sistema - 

 |`CT06.1`| Validar Home Page com informações dos produtos e navegação para as demais páginas para o perfil de atendente| |
 |:---------:|:---------:|:---------:|
 |`CT07.1`| Validar criação de usuário | OK | 
 |`CT08.1`| Validar login de usuário | OK |
 |`CT09.1`| Validar na página 'Fila de Pedidos' os pedidos que estão aguardando inicio e encerrados | OK |
 |`CT10.1`| Validar ao clicar no pedido que está em "Fila de Pedidos" se ele é redirecionado a uma nova página  | OK |
 |`CT11.1`| Validar na página 'Informações do Cliente' se há as indormações do cliente, informações do pedido com ID, os itens do pedido e valor total | OK |
 |`CT12.1`| Validar na página 'Informações do Cliente' se há um botão funcional para aprovar pedido | OK |
 |`CT13.1`| Validar na página 'Informações do Cliente' se há um botão funcional para finalizar pedido após um pedido ser aprovado | OK |
 |`CT14.1`| Validar na página 'Fila de Pedidos' se há um botão funcional para atualizar os pedidos | OK |
 |`CT15.1`| Validar na página 'Fila de Pedidos' se ao atualizar os pedidos um novo status é gerado | OK |
 |`CT16.1`| Validar na página 'Fila de Pedidos' se os ícones em cada pedido é correspondente ao status | OK |
 |`CT17.1`| Validar na página 'Lista de Produtos' se há informações sobre o menu | OK |
 
  ### Registro e Log dos testes - MOBILE
 
* As evidências dos testes realizados foram gravadas e estão disponibilizadas no link: [(https://drive.google.com/file/d/1oJG51H50BLv2lJ7UkAx1uwdHARMcy-P-/view?usp=sharing)](https://drive.google.com/file/d/1oJG51H50BLv2lJ7UkAx1uwdHARMcy-P-/view?usp=sharing)

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
