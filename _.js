(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals
        root._ = factory();
    }
}(this, function () {
    var _ = {};

    // Flattens an arbitrarily deeply nested array of integers
    _.flattern = function (array){
        return eval('['+array+']'); // Perf
    }

    return _;
}));
