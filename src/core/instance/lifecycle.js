import Watcher from '../observer/watcher'
import { noop } from '../util/index'

export function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode,hydrating) {
        console.log('gsdvnode',vnode)
    }
}

export function mountComponent (vm,el,hydrating) {
    vm.$el = el
    // if (!vm.$options.render) {

    // }
    vm._render()
    let updateComponent
    updateComponent = () => {
        vm._update(vm._render(), hydrating)
    }
    new Watcher(vm,updateComponent,noop,{},true)

    return vm
}
