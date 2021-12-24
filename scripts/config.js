const aliases = require('./alias')
const path = require('path')
const resolve = p => {
    const base = p.split('/')[0]
    if (aliases[base]) {
        return path.resolve(aliases[base], p.slice(base.length + 1))
    } else {
        console.log(path.resolve(__dirname,'../',p),'-----1')
        return path.resolve(__dirname,'../',p)
    }
}

let builds = {
    'web-full-dev':{
        entry: resolve('web/entry-runtime-with-compiler.js'),
        dest: resolve('dist/vue.js'),
        format: 'umd',
    },
    'web-runtime-dev': {
        entry: resolve('web/entry-runtime.js'),
        dest: resolve('dist/vue.runtime.js'),
        format: 'umd'
    }
}

function genConfig (name) {
  const opts = builds[name]
  const config = {
      input:opts.entry,
      output:{
        file: opts.dest, // 输出在那去
        format:opts.format,
        banner:opts.banner,
        name:opts.moduleName || 'Vue'
      },
      onwarn: (msg, warn) => {
        if (!/Circular/.test(msg)) {
          warn(msg)
        }
      }
  }
  return config
}
exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
