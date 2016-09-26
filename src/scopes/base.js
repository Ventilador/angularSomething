function run() {
    clearThings();
    document.getElementById('state').innerText = 'state: running';
    setTimeout(function () {
        angular.injector(['ng']).invoke(['$rootScope', window.ejemplo || noop]);
        document.getElementById('state').innerText = 'state: idle';
    });
}

