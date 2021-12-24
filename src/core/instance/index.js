import {initMixin} from './init'
function Vue (options) {
    console.log('Vue here')
    this._init(options)
}
initMixin(Vue)
export default Vue
