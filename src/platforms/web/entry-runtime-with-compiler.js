import Vue from './runtime/index'
import { query } from './utils/index'

Vue.prototype.$mount = function (el,hydrating) {
    console.log('mountd gsd',el)
    el = el && query(el)
    console.log(el)
}


export default Vue