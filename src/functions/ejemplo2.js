function ejemplo() {
    function decorator(fn) {
        return function () {
            log(comment('antes de la llamada'));
            fn.apply(this, arguments);
            log(comment('despues de la llamada'));
        };
    }
    var unObjeto = Object.create({
        myFunction: function (param1, param2) {
            this.array.push(param1, param2);
            log(JSON.stringify(this.array));
        }
    });
    unObjeto.array = [];
    unObjeto.myFunction('a', 'b');
    unObjeto.myFunction = decorator(unObjeto.myFunction);
    newLine();
    unObjeto.myFunction('c', 'd');
    delete unObjeto.myFunction;
    newLine();
    unObjeto.myFunction('e', 'f');
}