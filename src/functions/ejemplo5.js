var context = '#CapoComico #SagastiDelegador'
var param1 = 'El que sabe ';
var param2 = 'sabe, el que no,';
var param3 = ' es jefe, y delega.';
var param4 = 'te quiero panchi :-*'
function ejemplo() {
    var someProp = 'a donde vas?';
    var walterTraeFacturas = new Function('fn', 'a', 'b', 'c',
        [
            'if (arguments.length) {',
            '   fn(a, b, c);',
            '   if(this !== window) {',
            '       fn(this);',
            '   } else {',
            '      try {',
            '           fn(someProp);',
            '       } catch (err) {',
            '          fn(err);',
            '           fn("si bien el contexto es unico, this es window por defecto, asi que cuidado");',
            '       }',
            '   }',
            '} else {',
            '   return "qcyo";',
            '}'
        ].join('\r\n')
    );
    walterTraeFacturas(log, 'Mira ', 'que', ' pro');
    newLine();
    // tambien puede retornar cosas, en este caso si no tiene argumentos
    log(walterTraeFacturas());
    newLine();
    // ademas, obviamente se puede usar call (y apply)
    walterTraeFacturas.call(context, log, param1, param2, param3);
}
