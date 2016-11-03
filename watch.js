(function () {
    var $rootScope = angular.element(document).scope();

    $rootScope.kubut = {
        $stateChangeStart: function(){},
        $stateChangeError: function(){},
        $stateChangeSuccess: function(){},
        $viewContentLoaded: function(){},
        $stateNotFound: function(){}
    };

    $rootScope.kubut.$stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
    });

    $rootScope.kubut.$stateChangeError = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeError - fired when an error occurs during transition.');
        console.log(arguments);
    });

    $rootScope.kubut.$stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
    });

    $rootScope.kubut.$viewContentLoaded = $rootScope.$on('$viewContentLoaded', function (event) {
        console.log('$viewContentLoaded - fired after dom rendered', event);
    });

    $rootScope.kubut.$stateNotFound = $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
        console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
        console.log(unfoundState, fromState, fromParams);
    });

    var css = 'font-size: 15px; color: #007EA3; font-weight: bold;';

    console.log('%cui router watch has been started', css);
})();
