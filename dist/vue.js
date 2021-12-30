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

    class Watcher {
        constructor({
            vm,
            expOrFn,
            cb,
            options,
            isRenderWatcher
        }){
            this.vm = vm;
            console.log('watcher---------');
        }
    }

    function noop (a,b,c) { }

    function lifecycleMixin (Vue) {
        Vue.prototype._update = function (vnode,hydrating) {
            console.log('gsdvnode',vnode);
        };
    }

    function mountComponent (vm,el,hydrating) {
        vm.$el = el;
        // if (!vm.$options.render) {

        // }
        vm._render();
        let updateComponent;
        updateComponent = () => {
            vm._update(vm._render(), hydrating);
        };
        new Watcher(vm,updateComponent,noop,{},true);

        return vm
    }

    function renderMixin(Vue) {
        Vue.prototype._render = function () {
            const vm = this;
            console.log(vm,'1111111');
            const { render } = vm.$options;
            let vnode; 
            // console.log('gsdrender')
            // vnode = render.call(vm._renderProxy, vm.$createElement)
            vnode = render();
            console.log(vnode);
            return vnode
        };
    }

    function Vue (options) {
        console.log('Vue here');
        this._init(options);
    }
    initMixin(Vue);
    lifecycleMixin(Vue);
    renderMixin(Vue);

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

    Vue.prototype.$mount = function(el,hydrating){
        // el = el && inBrowser ? query(el) : undefined
        el = query(el);
        return mountComponent(this,el,hydrating)
    };

    const mount = Vue.prototype.$mount;
    Vue.prototype.$mount = function (el,hydrating) {
        console.log('mountd gsd',el);
        el = el && query(el);
        const options = this.$options;
        let template = options.template;
        if (!options.render) {
            if (template) {
                if (typeof template === 'string') {
                    if (template.charAt(0) === '#') ;
                } else if (template.nodeType) ;
            }
        }
        if (template) {
            let render = function () {
                return 'gsd render11111111'
            };
            options.render = render;
        }
        return mount.call(this,el,hydrating)
    };

    return Vue;

})));
