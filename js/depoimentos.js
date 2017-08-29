var app = angular.module('TVGlobinho', []);

app.controller("DepoimentosController", function($scope) {
    $scope.depoimentos = [
        {nome: "Gustavo Vilar", depoimento: "Choro todo dia sentindo falta."}
    ];

    $scope.adicionarDepoimento = function() {
        $scope.depoimentos.push({nome: $scope.item.nome,
        						 depoimento: $scope.item.depoimento});

        $scope.item.nome = $scope.item.depoimento = "";
    };
});