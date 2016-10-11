var push = Function.prototype.call.bind(Array.prototype.push);
function newMap() {
    var values = Object.create(null);
    values.length = 1;
    return values
}
var prototypesGetter = url === 'prototypes' && (function () {
    var values = newMap();
    push(values, 'Heredando una propiedad primitiva');
    push(values, 'Prototipo recursivo');
    push(values, 'delete y moviendo lectura de hijo a padre');
    push(values, 'Asignando propiedades a la instancia desde el prototype');
    push(values, 'Usando lazy gets');
    return customGetter.bind(values);
})();

var functionsGetter = url === 'functions' && (function () {
    var values = newMap();
    push(values, 'Call/Apply/Bind');
    push(values, 'Decorators');
    push(values, 'Bindeando funciones al prototype de Function');
    push(values, 'Diferente referencia despues de bind');
    push(values, 'Un eval diferente');
    return customGetter.bind(values);
})();

var scopesGetter = url === 'scopes' && (function () {
    var values = newMap();
    push(values, 'Specs de los prototypes');
    push(values, 'Specs de herencia y $rootScope');
    push(values, 'Codigo de angular');
    return customGetter.bind(values);
})();

var parseGetter = url === 'parse' && (function () {
    var values = newMap();
    push(values, 'Basicos (literal & constant)');
    push(values, 'Empezando con scope properties');
    push(values, 'Assign');
    push(values, 'Expresiones multiples');
    push(values, 'Scope vs locals');
    push(values, 'Mirando el codigo de un $parsedExpression');
    push(values, 'Truthyness en $parse');
    push(values, 'Mirando el codigo de un assign');
    push(values, 'Jugando con los locals');
    return customGetter.bind(values);
})();

var componentVsDirectiveGetter = url === 'component-vs-directive' && (function () {
    var values = newMap();
    push(values, 'Tratando de bindear una clase (es6)');
    push(values, 'Como se crean los controllers');
    push(values, 'Contextos y $parse');
    return customGetter.bind(values);
})();

var watchersGetter = url === 'watchers' && (function () {
    var values = newMap();
    push(values, 'Mirando $eval/$evalAsync/$apply/$applyAsync');
    push(values, 'Mirando $watch');
    push(values, 'Mirando $watchGroup');
    push(values, 'Mirando $watchCollection');
    push(values, 'Mirando $digest');
    return customGetter.bind(values);
})();

var bindingsGetter = url === 'bindings' && (function () {
    var values = newMap();
    push(values, 'initializeDirectiveBindings completo');
    push(values, 'Equals');
    push(values, '@');
    push(values, '&');
    push(values, '>');
    return customGetter.bind(values);
})();


function customGetter(current) {
    return this[current] || ('Ejemplo #' + current);
}