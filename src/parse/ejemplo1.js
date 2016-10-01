function ejemplo($parse) {
    var constantNumber = $parse('1');
    var constantString = $parse('"a"');
    var constantArray = $parse('[1,"2",false]');
    var constantObject = $parse('{prop: "aProp"}');
    log('constantNumber.constant => ', constantNumber.constant);
    log('constantString.constant => ', constantString.constant);
    log('constantNumber.literal => ', constantNumber.literal);
    log('constantString.literal => ', constantString.literal);
    log('constantArray.constant => ', constantArray.constant);
    log('constantObject.constant => ', constantObject.constant);
    log('constantArray.literal => ', constantArray.literal);
    log('constantObject.literal => ', constantObject.literal);
}
