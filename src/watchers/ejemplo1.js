function ejemplo($parse, $scope) {
    prettyLog('$eval: ' + $scope.$eval.toString());
    log();
    prettyLog('$evalAsync: ' + $scope.$evalAsync.toString());
    log();
    prettyLog('$apply: ' + $scope.$apply.toString());
    log();
    prettyLog('$applyAsync: ' + $scope.$applyAsync.toString());
    log();
    prettyLog('scheduleApplyAsync: ' + scheduleApplyAsync.toString());
    log();
    prettyLog('flushApplyAsync: ' + flushApplyAsync.toString());

}
run();

var scheduleApplyAsync = function () {
    if (applyAsyncId === null) {
        applyAsyncId = $browser.defer(function () {
            $rootScope.$apply(flushApplyAsync);
        });
    }
}
var flushApplyAsync = function () {
    while (applyAsyncQueue.length) {
        try {
            applyAsyncQueue.shift()();
        } catch (e) {
            $exceptionHandler(e);
        }
    }
    applyAsyncId = null;
}