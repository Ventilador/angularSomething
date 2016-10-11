(function () {

    if ("performance" in window == false) {
        window.performance = {};
    }

    Date.now = (Date.now || function () {  // thanks IE8
        return new Date().getTime();
    });

    if ("now" in window.performance == false) {

        var nowOffset = Date.now();

        if (performance.timing && performance.timing.navigationStart) {
            nowOffset = performance.timing.navigationStart
        }

        window.performance.now = function now() {
            return Date.now() - nowOffset;
        }
    }

})();

var url = /^.+\/(.+)\.html$/.exec(location.toString())[1];
var lastElement = document.createElement('a');
function changeTo(ejemploNumero, currentElement) {
    cleanHeader();
    lastElement.disabled = false;
    (lastElement = currentElement).disabled = true;
    var script = document.createElement('script');
    script.src = ['src/', url, '/ejemplo', ejemploNumero, '.js'].join('');
    document.head.appendChild(script);
    appendJS(ejemploNumero);
}




function appendJS(ejemploNumero, getter) {
    setTimeout(function () {
        document.getElementById('content').textContent = window.ejemplo.toString();
        document.getElementById('content').classList.remove('prettyprinted');
        PR.prettyPrint();
    }, 100);
}
var elem;
var footer = document.getElementById('footer');
var botones = document.getElementById('botones');
var topics = ['prototypes', 'functions', 'scopes', 'parse', 'component-vs-directive', 'watchers', 'bindings'];

var makeButtons = function (getter, numberOfButtons) {
    var toReturn = [];
    if (typeof numberOfButtons === 'number') {
        while (numberOfButtons--) {
            toReturn.unshift('<button class="myButton" onclick="changeTo(' + (numberOfButtons + 1) + ', this)">' + getter(numberOfButtons + 1) + '</button>')
        }
    }
    return toReturn;
};
function defaultGetter(currentNumber) {
    return 'Ejemplo #' + currentNumber;
}
var makeBotones = {
    prototypes: function () {
        return makeButtons(prototypesGetter, 5).join('');
    },
    functions: function () {
        return makeButtons(functionsGetter, 5).join('');
    },
    scopes: function () {
        return makeButtons(scopesGetter, 3).join('');
    },
    parse: function () {
        return makeButtons(parseGetter, 9).join('');
    },
    'component-vs-directive': function () {
        return makeButtons(componentVsDirectiveGetter, 3).join('');
    },
    watchers: function () {
        return makeButtons(watchersGetter, 5).join('');
    },
    bindings: function () {
        return makeButtons(bindingsGetter, 5).join('');
    }
}
function makeFooter() {
    function getAnchor(url, disabled) {
        return '<button onclick="location=\'' + url + '.html\'" ' + (disabled ? 'disabled="true"' : '') + '>' + url + '</button>';
    }
    function getLi(anchor) {
        return '<li class="link-item">' + anchor + '</li>';
    }
    var toReturn = [];
    for (var ii = 0; ii < topics.length; ii++) {
        toReturn.push(getLi(getAnchor(topics[ii], topics[ii] === url)));
    }
    return '<ul>' + toReturn.join('') + '</ul>';
}
var doneFooter;
var doneBotones = !makeBotones[url];
var done;
document.onreadystatechange = function () {
    done || (function (dom) {
        var script = document.createElement('script');
        script.classList.add('no');
        script.src = 'src/getters.js';
        document.head.appendChild(script);
        done = true;
    })();
    elem = document.getElementById('log');
    if (!doneFooter && (footer = document.getElementById('footer'))) {
        footer.innerHTML = makeFooter();
        doneFooter = true;
    }
    if (!doneBotones && document.getElementsByClassName('botones') && (botones = document.getElementsByClassName('botones')[0])) {
        botones.innerHTML = makeBotones[url]();
        botones.firstChild.click();
        doneBotones = true;
    }
}

function log() {
    if (arguments[0] && arguments[0].startsWith && arguments[0].startsWith('  <comment>')) {
        arguments[0] = arguments[0].substring(2);
    }
    elem.innerHTML += ['<p>', Array.prototype.map.call(arguments, function (item) {
        if (item === undefined) {
            return '<span class="undefined">undefined</span>';
        } else if (item === null) {
            return '<span class="undefined">null</span>';
        }
        return item;
    }).join(''), '</p>'].join(' ');
}

function prettyLog(text) {
    text = js_beautify(text);
    elem.innerHTML += text;
    elem.classList.remove('prettyprinted')
    elem.classList.add('prettyprint')
    PR.prettyPrint();
}

function noop() { };

function run() {
    clearThings();
    document.getElementById('state').innerText = 'state: running';
    setTimeout(function () {
        (window.ejemplo || noop)();
        document.getElementById('state').innerText = 'state: idle';
    });
}

function clearThings() {
    document.getElementById('log').innerHTML = '';
    console.clear();
}

function cleanHeader() {
    clearThings();
    var index = document.head.childNodes.length;
    var current;
    while (index--) {
        current = document.head.childNodes[index];
        if (current.nodeName.toLowerCase() === 'script' && current.attributes && !current.attributes.getNamedItem('class')) {
            document.head.removeChild(current);
        }
    }
}

var map = {};
function time(key) {
    map[key] = performance.now();
}

function timeEnd(key) {
    log(key, ': ', performance.now() - map[key]);
}

function newLine() {
    log('');
}

function getString(url) {
    var request = new XMLHttpRequest();
    request.open('get', url, false);
    request.send();
    return request.responseText;
}

function comment() {
    return ['  <comment>// ', Array.prototype.join.call(arguments, ''), '</comment>'].join('');
}