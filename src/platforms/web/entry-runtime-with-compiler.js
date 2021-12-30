import Vue from './runtime/index'
import { query } from './utils/index'

const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (el,hydrating) {
    console.log('mountd gsd',el)
    el = el && query(el)
    const options = this.$options
    let template = options.template
    if (!options.render) {
        if (template) {
            if (typeof template === 'string') {
                if (template.charAt(0) === '#') {

                }
            } else if (template.nodeType) {

            } else {

            }
        } else if (el) {

        }
    }
    if (template) {
        let render = function () {
            return 'gsd render11111111'
        }
        options.render = render
    }
    return mount.call(this,el,hydrating)
}


export default Vue