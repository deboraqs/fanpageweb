var app = angular.module('TVGlobinho', ['ngCookies']);

app.controller("DepoimentosController", function($scope, $cookies) {
    if(!$.isEmptyObject($cookies.getObject("depoimentos"))){
        $scope.depoimentos = $cookies.getObject("depoimentos");
    }
    else{
        $scope.depoimentos = [{nome: "Gustavo Vilar", depoimento: "Choro todo dia sentindo falta."},
                              {nome: "Nathan Andrade", depoimento: "Venho por meio desta, deixar meu descontentamento com a Rede Esgoto de Televisão. A TV Globinho era um dos melhores programas que já exibido na rede aberta nacional, e foi substituído por um programa bem micão. Não boto fé na Fátima, mas nós da quentes sabemos que quem tirou a panca não foi ela e sim a emissora. Fora Rede Globo!! É fixa, parceiro."},
                              {nome: "Raphael Victor", depoimento: "Se eu quisesse me encontrar com a Fátima, eu iria a procura dela. Mas não, eu não quero. #PrayForTVGlobinho"}];

        $cookies.putObject("depoimentos", $scope.depoimentos);
    }

    $scope.adicionarDepoimento = function() {
        $scope.depoimentos.push({nome: $scope.item.nome, depoimento: $scope.item.depoimento});

        $cookies.putObject("depoimentos", $scope.depoimentos);

        $scope.item.nome = $scope.item.depoimento = "";
    };
});