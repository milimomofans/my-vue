export default class Watcher {
    constructor({
        vm,
        expOrFn,
        cb,
        options,
        isRenderWatcher
    }){
        this.vm = vm
        console.log('watcher---------')
    }
}