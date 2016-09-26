window.ejemplo = function () {
    var parent = {
        myFunction: function () {
            return this.prop;
        }
    }
    // asdasdasdasd
    var child = Object.create(parent);
    child.prop = 'myProp';
    log('child.myFunction()= "', child.myFunction(), '"', comment('prop derecho'));
    newLine();
    delete child.prop;
    log('child.myFunction()= "', child.myFunction(), '"', comment('prop deleted from child'));
    newLine();
    parent.prop = 'proto';
    log('child.myFunction()= "', child.myFunction(), '"', comment('prop added to parent'));
}