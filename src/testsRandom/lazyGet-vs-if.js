function doTest() {
    var myLazyClass = function () { }
    myLazyClass.prototype = {
        lazyGet: function () {
            const array = [];
            return (this.lazyGet = function () {
                return array;
            })();
        }
    }
    var instance = new myLazyClass();
    let temp;
    time('ifGet');
    for (var ii = 0; ii < 10000; ii++) {
        if (!instance.array) {
            instance.array = [];
        }
        temp = instance.array;
    }
    timeEnd('ifGet');

    newLine();
    instance = new myLazyClass();
    let temp2;
    time('lazyGet');
    for (var ii = 0; ii < 10000; ii++) {
        temp2 = instance.lazyGet();
    }
    timeEnd('lazyGet');

    newLine();
    instance = new myLazyClass();
    let temp3;
    time('nada');
    instance.array = []
    for (var ii = 0; ii < 10000; ii++) {
        temp = instance.array;
    }
    timeEnd('nada');
}
doTest();