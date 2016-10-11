function doTest() {
    function pipes(value) {
        return value || 'Got It';
    }
    function ampersand(value) {
        return value && 'Got It';
    }
    log('pipes(false) => ', pipes(false));
    log('pipes(true) => ', pipes(true));
    log('ampersand(false) => ', ampersand(false));
    log('ampersand(true) => ', ampersand(true));
}
doTest();