function ejemplo() {
    var sinBindear = Object.prototype.hasOwnProperty;
    var noPrototype = Object.create(null);
    noPrototype.prop = 'myProp';
    try {
        // esto falla, porque el prototipo del objecto es null
        log(noPrototype.hasOwnProperty('prop'));
    } catch (err) {
        log(err);
        // si sos de los "ver para creer", aca tenes wachin
        log('noPrototype.prototype = ', noPrototype.prototype || noPrototype.__proto__);
        // igual te quiero :-*
    }
    newLine();
    log("sinBindear.call(noPrototype, 'prop') === ",
        sinBindear.call(noPrototype, 'prop'),
        comment('como no esta bindeada, necesito llamarla con call'));
    newLine();
    var bindeada = Function.prototype.call.bind(sinBindear);
    log("bindeada(noPrototype, 'prop') === ", bindeada(noPrototype, 'prop'), comment('pero aca no, porque tengo una version bindeada a call'));
}
