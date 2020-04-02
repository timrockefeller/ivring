import p from 'glpk.js'

export default {
  install: function (Vue, options) {
    Vue.prototype.$LPMain = function (options) {
      /**
       * example
       * options : {
       *    typeN : Number 有多少种矿物，默认6
       *    mines : [{
       *      'name': String 矿物名称
       *      'price': Number 矿物价格
       *      'elements': Array(typeN) 长度为typeN的数组，表示每个矿物的含量
       *    }]
       *    'target': [
       *        [from ,to],...
       *    ] 目标区间(typeN,2)
       * }
       *
       * return type
       * {
       *  TODO
       * }
       */
      let logs = (msg) => console.log('[LPCore] ' + msg)
      logs('Solving...')
    }
  }
}
