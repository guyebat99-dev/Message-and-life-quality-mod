(function (exports, jsxRuntime) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

    var pluginDefinition = {
        start: function () {
            console.log("[message-tools] Plugin started successfully!");
        },
        stop: function () {
            console.log("[message-tools] Plugin stopped successfully!");
        }
    };

    if (typeof plugin === 'function') {
        exports.default = plugin(pluginDefinition);
    } else {
        exports.default = pluginDefinition;
    }

    return exports;
})({}, revenge.react.ReactJSXRuntime); 
