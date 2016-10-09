function ejemplo() {
    function controller(injected) {
        log('this.aProp => ', this.aProp);
        log('injected => ', injected);
    }
    controller.prototype = {
        fromPrototype: function () {
            log('this.anotherProp => ', this.anotherProp);
        }
    }

    var instance = Object.create(controller.prototype);
    instance.aProp = 'bound';
    instance.anotherProp = 'from prototype';
    controller.call(instance, 'hi there');

    instance.fromPrototype();


    log('instance instanceof controller => ', instance instanceof controller);
}
