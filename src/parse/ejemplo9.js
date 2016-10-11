function ejemplo($parse, aScope) {
    var toParse =
        'property["prop" + 0][property["prop" + 0].length-1] = anotherProp || (anotherProp = localsProp)';
    var complexExpression = $parse(toParse);
    prettyLog(complexExpression.toString());
    aScope.property = {
        'prop0': [0, 1, 2, 3]
    };
    complexExpression(aScope, { localsProp: angular.noop });
    for (var ii = 0; ii < 3; ii++) {
        log('aScope.property.prop0[ii] => ', aScope.property.prop0[ii]);
    }
    log('aScope.property.prop0[aScope.property.prop0.length - 1] === noop => ',
        aScope.property.prop0[aScope.property.prop0.length - 1] === angular.noop);
    log('aScope.anotherProp === noop => ', aScope.anotherProp === angular.noop);
}
