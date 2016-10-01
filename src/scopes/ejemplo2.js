function ejemplo($rootScope) {
    var isolated = $rootScope.$new(true);
    var nonIsolated = $rootScope.$new();

    var isolatedProto = isolated.prototype || isolated.__proto__;
    var rootProto = $rootScope.prototype || $rootScope.__proto__;
    var nonIsolatedProto = nonIsolated.prototype || nonIsolated.__proto__;

    if (!isolatedProto || !rootProto || !nonIsolatedProto) {
        throw 'alguno de los prototype no se encontro';
    }

    newLine();
    // el prototype del isolated es igual al del root
    log('isolated.prototype === $rootScope.prototype => ', isolatedProto === rootProto);

    newLine();
    // en cambio el non-isolated tiene de prototype al padre(en este caso el $rootScope)
    log('nonIsolated.prototype === $rootScope.prototype => ', nonIsolatedProto === rootProto);
    log('nonIsolated.prototype === $rootScope => ', nonIsolatedProto === $rootScope);

    newLine();
    // el isolated no comparte nada del padre, solo el prototype
    $rootScope.prop = 'ola ke ase';
    log(isolated.prop, comment('por eso es undefined'));

    newLine();
    // el non-isolated en cambio, hereda las propiedades del padre
    log(nonIsolated.prop, 'todo bien Bo?');

    newLine();
    // aunque no es propiedad suya
    log("nonIsolated.hasOwnProperty('prop') => ", nonIsolated.hasOwnProperty('prop'));
    log("nonIsolated.prototype.hasOwnProperty('prop') => ", nonIsolatedProto.hasOwnProperty('prop'));
} 