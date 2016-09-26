function doTest() {
    var objA = {};
    var objB = {};
    try {
        objA.__proto__ = objB;
        objA.prototype = objB;
        objB.__proto__ = objA;
        objB.prototype = objA;
    } catch (err) {
        log(err, comment('no llegas muy lejos'));
    }
}
doTest();