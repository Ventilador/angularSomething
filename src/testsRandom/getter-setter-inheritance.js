function doTest() {
    var objA = {};
    Object.defineProperty(objA, 'prop', {
        get: function () {
            return 'foo'
        },
        set: function (newVal) {
            log(newVal);
        }
    }); Object.defineProperty(objA, 'isObjA', {
        get: function () {
            return this === objA;
        }
    });
    var objB = Object.create(objA);
    log(objB.prop);
    objB.prop = 'bar';
    log('objA.prop =>', objA.prop);
    log('objA.isObjA =>', objA.isObjA);
    log('objB.prop =>', objB.prop);
    log('objB.isObjA =>', objB.isObjA);
}
doTest();