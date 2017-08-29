var app = angular.module('TVGlobinho', ['ngCookies']);

app.controller("DepoimentosController", function($scope, $cookies) {
	if(!$.isEmptyObject($cookies.getObject("depoimentos"))){
    	$scope.depoimentos = $cookies.getObject("depoimentos");
	}
    else{
    	$scope.depoimentos = [
	        {nome: "Gustavo Vilar", depoimento: "Choro todo dia sentindo falta."}
	    ];

	    $cookies.putObject("depoimentos", $scope.depoimentos);
    }

    $scope.adicionarDepoimento = function() {
    	$scope.depoimentos.push({nome: $scope.item.nome,
        						 depoimento: $scope.item.depoimento});

    	$cookies.putObject("depoimentos", $scope.depoimentos);

        $scope.item.nome = $scope.item.depoimento = "";
    };
});