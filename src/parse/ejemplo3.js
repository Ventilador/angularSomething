function ejemplo($parse, aScope) {
    // Algo no muy sabido de $parse es que, para las evaluaciones que no son constant ni literal (y otras cosas mas)
    // el objecto que te da, ademas, tiene una funcion que se llama assign, que hace exactamente eso asignar un valor en el destino
    var scopeProperty = $parse('scopeProp');
    if (!(scopeProperty.constant || scopeProperty.literal)) {
        log('typeof scopeProperty => ', typeof scopeProperty);
        var objectReference = {};
        scopeProperty.assign(aScope, objectReference);
        log('aScope.scopeProp === objectReference => ', aScope.scopeProp === objectReference)
        log('scopeProperty(aScope) === objectReference => ', scopeProperty(aScope) === objectReference)
    }
}
