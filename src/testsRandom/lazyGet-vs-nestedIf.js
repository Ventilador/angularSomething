function doTest() {
    var myLazyClass = function () { }
    myLazyClass.prototype = {
        lazyGet: function () {
            const array = [];
            return (this.lazyGet = function () {
                return array;
            })();
        },
        get: function () {
            if (!this.array) {
                this.array = [];
            }
            return this.array;
        }
    }
    var instance = new myLazyClass();
    let temp;
    time('get');
    for (var ii = 0; ii < 10000; ii++) {
        temp = instance.get();
    }
    timeEnd('get');
    newLine();
    instance = new myLazyClass();
    let temp2;
    time('lazyGet');
    for (var ii = 0; ii < 10000; ii++) {
        temp2 = instance.lazyGet();
    }
    timeEnd('lazyGet');
}
doTest();