define(function () {

    var picker = function (options) {
        /**
         * A utility for generating environment-aware configuration selector
         * functions.
         *
         * @param {Object} options
         */
        return function (param, env) {
            var val = options[param];
            var base;
            var match;

            if (typeof window === 'undefined') {
                base = global;
            } else {
                base = window;
            }

            env = env || base.ENV;

            if (val) {
                match = val[env];
                if (!match) {
                    match = val['default'] ? val['default'] : '';
                }
                return match;
            } else {
                return '';
            }
        };
    };

    return picker;

});