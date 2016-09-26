window.ejemplo = function () {
    var constructor = function (val) {
        this.prop = val;
    }
    constructor.prototype = {
        setProp: function (newValue) {
            this.prop = newValue;
        },
        setProp2: function (newValue) {
            this.prop2 = newValue;
        },
        print: function () {
            log(this.prop);
        },
        print2: function () {
            log(this.prop2);
        }
    }
    var instance = new constructor('propiedad del constructor');
    instance.print();
    newLine();
    instance.setProp2('agregado desde el prototype');
    instance.print2();
}