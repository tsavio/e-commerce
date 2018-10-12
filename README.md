# e-commerce
Design composed by node.js + angularJs technologies, for an e-commerce

Requesitos para uso: 
    
- Node 9.1.0 
- npm 5.5.1
É recomendado uso do  [NVM](https://github.com/creationix/nvm) (Node Version Manager)

# Desenvolvimento 
##Como usar:
```sh
npm install 
O comando de build ainda foi feito
``` 

### Arquivos de configurações

Agora os arquivos de configuração da aplicação angular ficam dentro da pasta config localizada dentro da pasta src.
Sendo os arquivos de definição dos modulos, dependências, e suas importações junto com importações de controllers e components.

### Importações

Se faz necessario importar todos os controllers e components dentro dos arquivos 'controllers.js' e 'components.js' dentro da pasta imports respectivamente.
Isso é necessario para ganhar mais rastreabilidade, assertividade e otimização para build de producão pelo webpack, alem de trazer inicializações de componentes do angular mais rapidos.

Sempre que for criar um controller novo sera nessesario tal importação, assim como filtro, serviço e etc.

### Routes 

É feito uso da chave template junto de um require para o arquivo.
```sh
.when('/dashboard', {
template: require('../app/dashboard/dashboard.html'),
controller: 'DashboardController',
controllerAs: 'dashCtrl'
})
```

### NgInclude

Para utilizar o ngInclude é necessario adicionar o template ao cache do angular. Isso é feito atraves do service$templateCache seguindo o exemplo abaixo.

```sh
$templateCache.put("caminho/arquivo.html", require("./caminho/aquivo.html"));
```
Apos ser adicionado ao cache, é possivel utilizar a string passada como primeiro parametro na diretiva do ngInclude.

```sh
<div ng-include="'caminho/arquivo.html'"></div>
```
