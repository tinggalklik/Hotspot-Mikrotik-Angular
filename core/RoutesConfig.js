angular.module('HotspotAngular').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('entrar', {
        url: '/entrar',
        templateUrl: 'templates/entrar.html',
        controller: 'EntrarController',
        css: {
          href: 'styles/entrar.css',
          preload: true,
          persist: true
        }
    })

    .state('sobre', {
        url: '/sobre',
        templateUrl: 'templates/sobre.html',
        controller: 'SobreController',
        css: {
          href: 'styles/sobre.css',
          preload: true,
          persist: true
        }
    })

    .state('planos', {
        url: '/planos',
        templateUrl: 'templates/planos.html',
        controller: 'PlanosController',
        css: {
          href: 'styles/planos.css',
          preload: true,
          persist: true
        }
    })

    .state('locais', {
        url: '/locais',
        templateUrl: 'templates/locais.html',
        controller: 'LocaisController',
        css: {
          href: 'styles/locais.css',
          preload: true,
          persist: true
        }
    })

    .state('contato', {
        url: '/contato',
        templateUrl: 'templates/contato.html',
        controller: 'ContatoController',
        css: {
          href: 'styles/contato.css',
          preload: true,
          persist: true
        }
    });

    $urlRouterProvider.otherwise('/entrar');

})
