function ejemplo() {
    var Constructor = function (val) {
        this.prop = val;
    }
    Constructor.prototype = {
        setProp2: function (newValue) {
            this.prop2 = newValue;
        },
        print: function () {
            log(this.prop);
        },
        printProp2: function () {
            log(this.prop2);
        }
    }
    var instance = new Constructor('propiedad del Constructor');
    instance.print();
    newLine();
    instance.setProp2('agregado desde el prototype');
    log('instance.prop2 === instance.printProp2() => ' + instance.prop2 === instance.printProp2());

}