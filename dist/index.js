'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('jsonToArray', function () {
    /**
     * @description json转数组
     * @param {Object} json - json格式的对象{}
     * */
    function jsonToArray() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var arr = [];
        if (json instanceof Array) {
            json.forEach(function (v, i) {
                arr.push({ key: i, value: v });
            });
        } else {
            Object.keys(json).forEach(function (attr) {
                arr.push({ key: attr, value: json[attr] });
            });
        }
        return arr;
    }

    return jsonToArray;
});