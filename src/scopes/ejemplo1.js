function ejemplo($rootScope) {
    var isolated = $rootScope.$new(true);
    var nonIsolated = $rootScope.$new();
    // los scopes son distintos
    log('isolated === nonIsolated => ', isolated === nonIsolated);
    newLine();
    // pero los parent no
    log('isolated.$parent === nonIsolated.$parent => ', isolated.$parent === nonIsolated.$parent);

    var nonIsolated2 = $rootScope.$new();
    var isolated2 = nonIsolated2.$new(true);

    newLine();
    // dos non-isolated comparten prototypo (si son hijos del mismo scope)
    log('nonIsolated.$prototype === nonIsolated2.$prototype => ', nonIsolated.$prototype === nonIsolated2.$prototype);

    newLine();
    // dos isolated comparten prototypo (sin importar el padre)
    log('isolated.$prototype === isolated2.$prototype => ', isolated.$prototype === isolated2.$prototype);

    newLine();
    // pero un isolated y un non-isolated no lo comparten, sin importar los padres
    log('nonIsolated.$prototype === isolated.$prototype => ', nonIsolated.$prototype === isolated.$prototype);
}


