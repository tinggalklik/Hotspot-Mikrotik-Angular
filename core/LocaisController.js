angular.module('HotspotAngular').controller('LocaisController', function($http, $scope, $timeout, $log) {

  // Set Arrays VAR
  $scope.Locais = [];

  $http.get('config/config-locais.json', { timeout: 10000 }).then(function(resposta) {
    $scope.Locais = resposta.data.locais;
  }).catch(function(erro){
    $log.info('Erro na Requisição: ' + erro);
  });

})
