export function initRender (vm) {
     vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)

}


export function renderMixin(Vue) {
    Vue.prototype._render = function () {
        const vm = this
        console.log(vm,'1111111')
        const { render } = vm.$options
        let vnode 
        vnode = render.call(vm._renderProxy, vm.$createElement)
        console.log(vnode)
        return vnode
    }
}