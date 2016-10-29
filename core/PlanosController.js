angular.module('HotspotAngular').controller('PlanosController', function($http, $scope, $timeout, $log) {

  // Set Arrays VAR
  $scope.Planos = [];

  $http.get('config/config-planos.json', { timeout: 10000 }).then(function(resposta) {
    $scope.Planos = resposta.data.planos;
  }).catch(function(erro){
    $log.info('Erro na Requisição: ' + erro);
  });

})
