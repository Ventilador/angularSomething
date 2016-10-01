function ejemplo($parse, aScope) {
    var scopeProperty = $parse('scopeProp');
    var literalObjectWithScopeProperty = $parse('{prop: scopeProp}');
    log('scopeProperty.constant                  => ', scopeProperty.constant);
    log('literalObjectWithScopeProperty.constant => ', literalObjectWithScopeProperty.constant);
    newLine();
    log('scopeProperty.literal                  => ', scopeProperty.literal);
    log('literalObjectWithScopeProperty.literal => ', literalObjectWithScopeProperty.literal);
    newLine();

    aScope.scopeProp = {};
    var scopeProp = scopeProperty(aScope);
    var objectWithScopeProperty = literalObjectWithScopeProperty(aScope);
    log('scopeProp === aScope.scopeProp => ', scopeProp === aScope.scopeProp);
    log('objectWithScopeProperty.prop === aScope.scopeProp => ', objectWithScopeProperty.prop === aScope.scopeProp);
}
