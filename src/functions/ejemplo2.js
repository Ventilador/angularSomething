function ejemplo() {
    function decorator(fn) {
        return function () {
            // antes de la llamada 
            fn.apply(this, arguments);
            // despues de la llamada 
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