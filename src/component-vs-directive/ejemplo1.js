function ejemplo() {
  class controller {
    constructor() {
      log('this.prop => ', this.prop);
    }
  }
  var toBind = { prop: 'bound' }

  try {
    log(comment('no se puede llamar como una funcion'));
    var instance = controller();
    log(instance.prop);
  } catch (error) {
    log(error);
  }

  try {
    log(comment('no se puede bindear y llamar como una funcion'));
    var instance = controller.bind(toBind)();
    log(instance.prop);
  } catch (error) {
    log(error);
  }

  try {
    log(comment('se puede hacer new de un bind, pero no bindea'));
    log(comment('este llama el constructor pero sin bindear'));
    var boundConstructor = controller.bind(toBind);
    var instance = new boundConstructor();
    log('instance.prop => ', instance.prop);
  } catch (error) {
    log(error);
  }

  try {
    log(comment('se puede llamar el constructor bindeado, pero no hace nada'));
    var instance = controller.constructor.bind(toBind)();
    log(instance.prop);
  } catch (error) {
    log(error);
  }
}
