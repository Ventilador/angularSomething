function ejemplo() {
    function print(text) {
        log(text);
    }
    print('bien basico');
    newLine();
    function printContext() {
        log(this);
    }
    printContext('where is your god now??');
    newLine();
    printContext.call('ahi va papa!!');
    function append(a, b, c) {
        log(this, a, b, c);
    }
    newLine();
    log(comment('con call o apply le damos un contexto en el cual ejecutarse (o bind)'));
    append.call('Never ', 'gonna ', 'give u ', 'up ');
    append.apply('Never ', ['gonna ', 'let u ', 'down']);
    append.bind('Never gonna ')('tell ', 'a lie,', ' and hurt you');
    newLine();
    log(comment('algo que por ahi muchos no saben, es que al bindear, se pueden forzar argumentos'));
    var bound = (function () {
        var first = Array.prototype.shift.call(arguments);
        var second = Array.prototype.shift.call(arguments);
        var third = Array.prototype.shift.call(arguments);
        var forth = Array.prototype.shift.call(arguments);
        append.call(this, first, second, third);
        log('el ultimo arg es "' + forth, '"');
    }).bind('"contexto" ', '"argumento forzado" ');
    log(comment('si se finjan, "argumentos :(" nunca se imprime (aunque llega a la funcion)'));
    bound('solo', ' dos', 'argumentos :(');
}
