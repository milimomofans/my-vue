export function initMixin (Vue) {
    Vue.prototype._init = function (options) {
        console.log('gsd init',options)
        const vm = this
        if (options && options._isComponent) {

        } else {
            vm.$options = options
        }

        if (vm.$options.el) {
            vm.$mount(vm.$options.el)
        }
    }
}