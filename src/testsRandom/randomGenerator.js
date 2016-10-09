function doTest() {
    var primes = [2];
    function getPrimeAt(primePosition) {
        var sieve = Object.create(null), i, j, doPush;
        for (i = primes[primes.length - 1]; primes.length < primePosition; ++i) {
            doPush = true;
            for (j = 0; j < primes.length; j++) {
                if (!(i % primes[j])) {
                    doPush = !(j = primes.length);
                }
            }
            if (doPush) {
                primes.push(i);
            }
        }
        return primes[primePosition - 1];
    }
    var seed = getPrimeAt(Math.floor(Math.random() * 100));
    function random() {
        seed ^= (seed << 21);
        seed ^= (seed >>> 35);
        seed ^= (seed << 4);
        return seed;
    }
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
    log(random());
}
doTest();