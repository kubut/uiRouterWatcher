(function () {
    var $rootScope = angular.element(document).scope();

    $rootScope.kubut.$stateChangeStart();
    $rootScope.kubut.$stateChangeError();
    $rootScope.kubut.$stateChangeSuccess();
    $rootScope.kubut.$viewContentLoaded();
    $rootScope.kubut.$stateNotFound();

    var css = 'font-size: 15px; color: #FCAA43; font-weight: bold;';

    console.log('%cui router watch has been stopped', css);
})();

