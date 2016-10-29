angular.module('HotspotAngular').controller('ContatoController', function($http, $scope, $timeout, $log) {

  // Set Arrays VAR
  $scope.Telefones = [];
  $scope.Endereco = {};
  $scope.Emails = [];

  $http.get('config/config-contato.json', { timeout: 10000 }).then(function(resposta) {
    $scope.Telefones = resposta.data.telefones;
    $scope.Emails = resposta.data.emails;
    $scope.Endereco = {
      rua: resposta.data.endereco.rua,
      n: resposta.data.endereco.n,
      complemento: resposta.data.endereco.complemento,
      bairro: resposta.data.endereco.bairro,
      cidade: resposta.data.endereco.cidade
    };
  }).catch(function(erro){
    $log.info('Erro na Requisição: ' + erro);
  });

})
