(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Vue = factory());
}(this, (function () { 'use strict';

    function initMixin (Vue) {
        Vue.prototype._init = function (options) {
            console.log('gsd init',options);
            const vm = this;
            if (options && options._isComponent) ; else {
                vm.$options = options;
            }

            if (vm.$options.el) {
                vm.$mount(vm.$options.el);
            }
        };
    }

    function Vue (options) {
        console.log('Vue here');
        this._init(options);
    }
    initMixin(Vue);

    function query (el) {
        if (typeof el === 'string') {
            const selected = document.querySelector(el);
            if (!selected) {
                return document.createElement('div')
            }
            return selected
        } else {
            return el
        }
    }

    Vue.prototype.$mount = function (el,hydrating) {
        console.log('mountd gsd',el);
        el = el && query(el);
        console.log(el);
    };

    return Vue;

})));
