function ejemplo($parse, aScope) {
    var toParse =
        'newlyDefinedPropertyInTheScope = localsPropertyRef;' +
        'scopeFunction(newlyDefinedPropertyInTheScope, localsPropertyRef);' +
        'localsPropertyNumber = 0';
    var complexExpression = $parse(toParse);
    prettyLog(complexExpression.toString());
}