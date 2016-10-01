function ejemplo($parse, aScope) {
    // Asignaciones y lectura hacen fallback en el scope, por lo tanto si locals no tiene la propiedad se le asigna al scope
    var toParse =
        'newlyDefinedPropertyInTheScope = localsPropertyRef;' +
        'scopeFunction(newlyDefinedPropertyInTheScope, localsPropertyRef);' +
        'localsPropertyNumber = 0';
    var complexExpression = $parse(toParse);
    var locals = {
        localsPropertyRef: {}
        // , localsPropertyNumber: undefined
    }
    var result = complexExpression(aScope, locals);
    log('locals.localsPropertyRef === aScope.newlyDefinedPropertyInTheScope => ',
        locals.localsPropertyRef === aScope.newlyDefinedPropertyInTheScope);
    log('locals.localsPropertyNumber !== result => ', locals.localsPropertyNumber !== result);
    log('locals.localsPropertyNumber === undefined => ', locals.localsPropertyNumber === undefined);
    log('aScope.localsPropertyNumber === result => ', aScope.localsPropertyNumber === result);
    log('aScope.localsPropertyNumber === 0 => ', aScope.localsPropertyNumber === 0);
    log('result === 0 => ', result === 0);
}