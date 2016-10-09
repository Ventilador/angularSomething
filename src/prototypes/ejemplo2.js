function ejemplo() {
    var parent = {
        prop0: 'myProp0'
    };
    var propertyName = 'prop';
    var child = Object.create(parent);
    for (var ii = 0; ii < 3; ii++) {
        log(comment('inicio vuelta numero ', ii));
        for (var jj = 0; jj < 3; jj++) {
            log('child[', propertyName + jj, ']= "', child[propertyName + jj], '"');
        }
        child[propertyName + (ii + 1)] = 'myProp' + (ii + 1);
        child = Object.create(child);
        log(comment('fin vuelta numero', ii));
        newLine();
    }
    console.log(child);
}