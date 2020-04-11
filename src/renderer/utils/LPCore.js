export default {
  install: function (Vue, options) {
    Vue.prototype.$LPMain = function (options, Vue) {
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

      /// main process
      require('glpk.js').then(glpk => {
        /// GLPK Utils

        /**
               * @returns Array as lp.objective.vars
               */
        let priceObjVars = () => {
          let t = []
          for (let m in options.mines) {
            t.push({name: options.mines[m].name, coef: options.mines[m].price})
          }
          return t
        }

        let targetObjVars = () => {
          let t = []
          for (let i = 0; i < options.typeN; i++) { // element
            let varm = []
            for (let m in options.mines) { // mines
              if (options.mines[m].elements[i]) {
                varm.push({
                  name: options.mines[m].name,
                  coef: options.mines[m].elements[i]
                })
              }
            }
            t.push({
              name: options.elename[i],
              vars: varm,
              bnds: {
                type: glpk.GLP_DB,
                ub: options.target[i][1],
                lb: options.target[i][0]
              }
            })
          }
          return t
        }
        // Problem Option
        // TODO important
        let lp = {
          name: 'Lowest Price',
          objective: {
            direction: glpk.GLP_MIN,
            name: 'price_obj',
            vars: priceObjVars()
          },
          subjectTo: targetObjVars()
        }
        console.log(lp)
        let rst = glpk.solve(lp, glpk.GLP_MSG_ALL)
        // result output

        let rstmsg = '结果：'
        if (rst.result.status === 5) {
          rstmsg += '\n成本为' + rst.result.z
          for (let v in rst.result.vars) {
            rstmsg += '\n' + v + ' : ' + rst.result.vars[v]
          }
        } else {
          rstmsg += '无解'
        }
        Vue.$store.commit('_SET_RST', rstmsg)
      })
    }
    Vue.prototype.$finetrim = s => s.replace(/^\s+/, '').replace(/\s+$/, '').split(/\s+/)
  }

}
