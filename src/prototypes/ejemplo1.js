window.ejemplo = function () {
    var parent = {
        prop: 'myProp'
    };
    var child = Object.create(parent);
    log('child.prop= "', child.prop, '"', comment('Object.create(parent)'));
    newLine();
    child = {};
    child.__proto__ = child.prototype = parent;
    log('child.prop= "', child.prop, '"', comment('a mano'));
}
