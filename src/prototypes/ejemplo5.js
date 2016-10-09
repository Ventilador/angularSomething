function ejemplo() {
    var constructor = function () {

    }
    constructor.prototype = {
        newArray: function () {
            this.myArray = [];
            for (var ii = 0; ii < 10000; ii++) {
                this.myArray.push(Math.floor(Math.random() * 10000));
            }
        },

        filterCount: function () {
            var count = 0;
            for (var ii = 0; ii < this.myArray.length; ii++) {
                if (this.myArray[ii] < 5000) {
                    count++;
                }
                for (let jj = 0; jj < 20000; jj++) {
                    var object = {};
                }
            }
            return count;
        },
        newArrayLazy: function () {
            delete this.lazyFilter;
            this.newArray();
        },
        lazyFilter: function () {
            const filteredArray = this.filterCount();
            return (this.lazyFilter = function () {
                return filteredArray;
            })();
        }
    }
    var instance = new constructor();
    instance.newArray();
    time('filterCount');
    log(instance.filterCount());
    timeEnd('filterCount');
    time('filterCount');
    log(instance.filterCount());
    timeEnd('filterCount');
    time('filterCount');
    log(instance.filterCount());
    timeEnd('filterCount');
    instance.newArrayLazy();
    time('lazyFilter');
    log(instance.lazyFilter());
    timeEnd('lazyFilter');
    time('lazyFilter');
    log(instance.lazyFilter());
    timeEnd('lazyFilter');
    time('lazyFilter');
    log(instance.lazyFilter());
    timeEnd('lazyFilter');
    time('lazyFilter');
    log(instance.lazyFilter());
    timeEnd('lazyFilter');
    instance.newArrayLazy();
    time('lazyFilter');
    log(instance.lazyFilter());
    timeEnd('lazyFilter');
    time('lazyFilter');
    log(instance.lazyFilter());
    timeEnd('lazyFilter');
    time('lazyFilter');
    log(instance.lazyFilter());
    timeEnd('lazyFilter');
    time('lazyFilter');
    log(instance.lazyFilter());
    timeEnd('lazyFilter');
}