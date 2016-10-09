function ejemplo($parse, $scope) {
    function controller() {
    }
    controller.prototype = {
        fromPrototype: function () {
            log('this.prop => ', this.prop);
        }
    }
    var instance = Object.create(controller.prototype);
    instance.prop = 'instance prop';
    controller.call($scope.ctrl = instance);
    var unBound = $parse('ctrl.fromPrototype')($scope);
    unBound();
    log('instance.fromPrototype === unBound => ', instance.fromPrototype === unBound);
}
