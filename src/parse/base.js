function run() {
    clearThings();
    document.getElementById('state').innerText = 'state: running';
    setTimeout(function () {
        angular.injector(['ng']).invoke(['$parse', '$rootScope', function ($parse, $rootScope) {
            let scope = $rootScope.$new(true);
            (window.ejemplo || noop)($parse, scope);
            scope.$destroy();
        }]);
        document.getElementById('state').innerText = 'state: idle';
    });
}

