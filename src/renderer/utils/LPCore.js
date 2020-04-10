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
       *  String: Full Logs from LPCore
       * }
       */
      /// util definations
      let _pass = ''
      let logs = msg => { console.log('[LPCore] ' + msg); _pass += msg + '\n' }

      /// main process
      require('glpk.js').then(glpk => {
        /// GLPK Utils

        /**
         *  Single Iron Factor
         * @param {String} name
         * @param {Array} inner
         * @param {Array} bound
         */
        let LpVariable = (name, inner, bound) => {
          let t = {
            name: name,
            vars: [ ],
            bnds: { type: glpk.GLP_LO, lb: bound[0], ub: bound[1] }
          }
          for (let i = 0; i < options.typeN; i++) {
            t.vars.push({
              name: options.elename[i],
              coef: (inner[i] ? inner[i] : 0)
            })
          }
          return t
        }

        // Problem Option
        // TODO important
        let lp = {
          name: 'Ivring Main LP Problem',
          objective: {
            direction: glpk.GLP_MIN,
            name: 'obj',
            vars: [
              { name: 'x1', coef: -1.0 },
              { name: 'x2', coef: -2.0 },
              { name: 'x3', coef: 0.1 },
              { name: 'x4', coef: 3.0 }
            ]
          },
          subjectTo: [
            {
              name: 'c1',
              vars: [
                { name: 'x1', coef: 1.0 },
                { name: 'x2', coef: 1.0 }
              ],
              bnds: { type: glpk.GLP_UP, ub: 5.0, lb: 0.0 }
            },
            {
              name: 'c2',
              vars: [
                { name: 'x1', coef: 2.0 },
                { name: 'x2', coef: -1.0 }
              ],
              bnds: { type: glpk.GLP_LO, ub: 0.0, lb: 0.0 }
            },
            {
              name: 'c3',
              vars: [
                { name: 'x1', coef: -1.0 },
                { name: 'x2', coef: 3.0 }
              ],
              bnds: { type: glpk.GLP_LO, ub: 0.0, lb: 0.0 }
            },
            {
              name: 'c4',
              vars: [
                { name: 'x3', coef: 1.0 },
                { name: 'x4', coef: 1.0 }
              ],
              bnds: { type: glpk.GLP_LO, ub: 0.0, lb: 0.5 }
            }
          ],
          binaries: ['x3', 'x4']
        }
        logs(JSON.stringify(glpk.solve(lp, glpk.GLP_MSG_ALL)))
      })
      /// returns
      return _pass
    }
    Vue.prototype.$finetrim = s => s.replace(/^\s+/, '').replace(/\s+$/, '').split(/\s+/)
  }

}
