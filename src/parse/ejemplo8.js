function ejemplo($parse, aScope) {
    var toParse =
        'first.second.third';
    var complexExpression = $parse(toParse);
    prettyLog(complexExpression.assign.toString());
    complexExpression.assign(aScope, 'something');
    newLine();
    log('aScope.first.second.third => ', aScope.first.second.third)

}