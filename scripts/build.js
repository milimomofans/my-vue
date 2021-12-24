let builds = require('./config').getAllBuilds()
const rollup = require('rollup')
const fs = require('fs')

build(builds)

function build(builds) {
    let built = 0
    const total = builds.length
    const next = () => {
        buildEntry(builds[built]).then(()=>{
            built++
            if (built < total) {
                next()
            }
        }).catch()
    }
    next()
}

function buildEntry (config) { 
    const output = config.output
    const { file, banner } = output
    return rollup.rollup(config)
        .then(bundle => bundle.generate(output))
        .then(({ output: [{ code }] })=>{
            return wirte(file,code)
        })
        .catch(logError)
}

function wirte (dest, code, zip) {
    return new Promise((resolve, reject) => {
        function report (extra) {
            resolve()
        }
        fs.writeFile(dest, code, err => {
            if (err) return reject(err)
            report()
        })
    })
}

function logError (e) {
    console.log(e)
  }
  