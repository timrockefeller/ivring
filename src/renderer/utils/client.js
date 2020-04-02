//
// NOTICE:
// This plugin was deprecated
//

// python server by zerorpc
const zerorpc = require('zerorpc')

export default {
  install: function (Vue, options) {
    Vue._client = new zerorpc.Client()
    Vue.mixin({
      created: function () {
        this._client.connect('tcp://127.0.0.1:10473')
        this._client.invoke('echo', 'server ready', (error, res) => {
          if (error || res !== 'server ready') {
            console.error(error)
          } else {
            console.log('server is ready')
          }
        })
      }
    })
    Vue.prototype.$invoke = function (key, msg, callback) {
      // 逻辑...
      this._client.invoke(key, msg, callback)
    }
  }
}
