function run(url) {
    clearThings();
    var script = document.createElement('script');
    script.src = ['src/testsRandom/', url, '.js'].join('');
    document.head.appendChild(script);
    appendJS(url);
}
function appendJS(url) {
    setTimeout(function () {
        document.getElementById('content').textContent = [
            '// ' + url,
            window.doTest.toString()
        ].join('\r\n');
        PR.prettyPrint();
    }, 100);
}