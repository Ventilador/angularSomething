function ejemplo($parse, aScope) {
    var toParse =
        'first.second.third = 0';
    var complexExpression = $parse(toParse);
    prettyLog(complexExpression.toString());
    aScope.first = '';
    complexExpression(aScope);
    newLine();
    log('aScope.first.second.third => ', aScope.first.second.third)
    aScope.first = true;
    newLine();
    try {
        complexExpression(aScope);
    }
    catch (err) {
        log(err);
    }
}