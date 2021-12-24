import Vue from './runtime/index'
import { query } from './utils/index'

Vue.prototype.$mount = function (el,hydrating) {
    console.log('mountd gsd',el)
    el = el && query(el)
    const options = this.$options
    if (!options.render) {
        let template = options.template
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
      const { render, staticRenderFns } = compileToFunctions(template, {
        
    }
}


export default Vue