# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

## Wireframe Interativo

Wireframe interativo com o intuito de orientar os usuários e clientes que irão usufruir da aplicação Cooking Digital.
É possível assistir o vídeo gravado através do link: https://drive.google.com/drive/folders/1yLvqDjTcBo-BZ-HGYOZszXU8fpJMU4YQ

É possível também visualizar a interação do wireframe direto pelo site do Figma: https://www.figma.com/file/YkhxqBNTm6AYEZjpk7cS50/Untitled?type=design&node-id=0%3A1&t=G4BCLRXEr92BQyFZ-1

* Como dar start no wireframe interativo pelo Figma?
- Ao clickar no link do figma, é possível visualizar no canto superior direto a opção de um "play"
- ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/90850392/07de7fdb-4ab4-4d15-bb3d-6f8905bc2cb2)
- Então só seguir o fluxo dos botões interativos. Dica: o mouse muda o formato para uma "mão" que realizar um click.


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)





# Requisitos atendidos:

### Tela inicial (Home)

RF-01 - A aplicação deverá apresentar na Home Page as informações dos produtos e a navegação para as demais páginas.

![Home](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/447cbbec-6350-43bd-b835-32ef86f97195)


### Tela de Login

RF-02 - A aplicação deverá permitir ao usuário efetuar login.

![RF 02](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/ba1a085a-a841-486f-926a-190b990ebdca)

RF-03 - A aplicação deverá apresentar na página "Meus Pedidos" a funcionalidade de selecionar a quantidade desejada dos produtos.

RF-04 - A aplicação deverá permitir na página 'Meus Pedidos' que o usuário selecione mais de um produto.

![RF 03 E 04](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/aeaf0113-537e-4f25-b1f8-c471bdb2346a)


### Tela de Registro de usuário

RF-05 - A aplicação deverá permitir ao usuário efetuar o cadastro.

![RF 05 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/7c91ea05-0397-4569-9bc5-0bec83cae101)

![RF 05 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/91ac1fd9-b43f-47d4-aee7-83eff70e30d2)

![RF 05 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/7782c98c-0b6b-4c08-a478-d63742f16144)


### Tela "Meus Pedidos"

RF-07 - A aplicação deverá apresentar na página 'Meus Pedidos' as informações e o status dos pedidos realizados pelo usuário.

![RF 07](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/83120cac-db60-4ccc-bd2f-1432f083383d)

RF-08 -A aplicação deverá disponibilizar ao usuário o código do pedido realizado.

![RF 08](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/8d89f174-0ee7-4d3f-9c87-0afcb3678ceb)

RF-09 - A aplicação deverá disponibilizar ao usuário as informações do pedido, tais como: produto solicitado, quantidade, preço unitário e valor total.

![RF 09](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/d35c102a-9c16-4bab-b3bf-3899775a6cb1)

RF-06 -A aplicação deverá permitir na página de “Meus Pedidos” que o usuário realize o cancelamento de seu pedido em andamento.

![RF 06](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/2a9b3f89-77f6-48f9-b0a0-058bf8a7261c)


### Carrinho de compra:

RF-10- A aplicação deverá permitir na página de "Carrinho", que o usuário inclua um pedido no carrinho.

![RF 10](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/29d4bf60-ef56-45e8-8371-36c7d7c03d8e)

RF-11 -A aplicação deverá permitir na página de "Carrinho", a visualização de todos intens adicionados no carrinho.

![RF 11](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/392da879-7733-4f47-9190-dc1f951567eb)

RF-12 -A aplicação deverá permitir na página de "Carrinho", a opção de exclusão de um item do carrinho.

![RF 12](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/cb9ac05e-0f81-41e5-ac67-f6330f8c181e)

RF-13 A aplicação deverá permitir na página de "Carrinho", a finalização da compra dos itens presentes no carrinho .

![RF 13](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-menu/assets/85632403/38c1fc8f-dc02-424c-b34a-4c87d8e6c6fd)










