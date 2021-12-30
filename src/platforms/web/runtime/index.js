import Vue from '../../../core/index'
import { query } from '../utils/index'
import { mountComponent } from '../../../core/instance/lifecycle'

Vue.prototype.$mount = function(el,hydrating){
    // el = el && inBrowser ? query(el) : undefined
    el = query(el)
    return mountComponent(this,el,hydrating)
}
export default Vue