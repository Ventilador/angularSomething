function ejemplo($parse, aScope) {
    // Otro poco sabido feature de $parse es que soporta increiblemente complicada logica
    var toParse =
        'newlyDefinedPropertyInTheScope = localsPropertyRef;' +
        'scopeFunction(newlyDefinedPropertyInTheScope, localsPropertyRef);' +
        'localsPropertyNumber = 0';
    var complexExpression = $parse(toParse);
    var locals = {
        localsPropertyRef: {},
        localsPropertyNumber: undefined
    }
    var result = complexExpression(aScope, locals);
    log('locals.localsPropertyRef === aScope.newlyDefinedPropertyInTheScope => ',
        locals.localsPropertyRef === aScope.newlyDefinedPropertyInTheScope);
    log('locals.localsPropertyNumber === result => ', locals.localsPropertyNumber === result);
    log('locals.localsPropertyNumber === 0 => ', locals.localsPropertyNumber === 0);
    log('result === 0 => ', result === 0);
}
