angular.module('HotspotAngular').controller('ConfiguracoesController', function($http, $scope, $timeout, $log, $rootScope) {

  $scope.LoadingShow = true;

  // Set Objects Vars
  $scope.Configuracoes = {};

  // Set Arrays VAR
  $scope.Menu = [];
  $scope.Social = [];

  $http.get('config/config-geral.json', { timeout: 10000 }).then(function(resposta) {
    $scope.Configuracoes = resposta.data.configuracoes;
    $scope.Menu = resposta.data.menu;
    $scope.Social = resposta.data.social;
    $timeout(function () {
      $scope.LoadingShow = false;
    }, 1000);
  }).catch(function(erro){
    $log.info('Erro na Requisição: ' + erro);
    $scope.LoadingShow = false;

  });

  // In your main controller
$rootScope.$on('animStart', function($event, element, speed) {
    $log.info($event);
});

$rootScope.$on('animEnd', function($event, element, speed) {
    $log.info($event);
});


})
