function primeCheck(g) {
    "use strict";
    var limit,
        mod = 2,
        output = 1;
    g = Number(g);
    if (g >= 2 && && g % Math.floor(g) === 0) {
        limit = Math.sqrt(g);
        while (mod <= limit) {
            if (g % mod === 0) {
                output = 0;
                break;
            }
            mod += 1;
        }
    } else {
        output = 0;
    }
    return output;
}
