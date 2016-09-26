function ejemplo() {
    function myFunction(arg) {
        return this + arg;
    }
    log(myFunction(1));
    log(myFunction('algo'));
    var numericBind = myFunction.bind(99);
    var stringBind = myFunction.bind('aString ');
    newLine();
    log(numericBind(1));
    log(stringBind('anotherString'));
    newLine();
    log('myFunction === numericBind => ', myFunction === numericBind);
    log('myFunction === stringBind => ', myFunction === stringBind);
    log('numericBind === stringBind => ', numericBind === stringBind);
    newLine();
    log('myFunction instanceof Function => ', myFunction instanceof Function);
    log('numericBind instanceof Function => ', numericBind instanceof Function);
    log('stringBind instanceof Function => ', stringBind instanceof Function);
}