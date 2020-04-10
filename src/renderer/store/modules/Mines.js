const state = {
  typeN: 6,
  // TODO: fill up more element names
  elename: ['Fe2O3', 'Al2O3', 'SiO2', 'S', 'C', 'MgO2',
    'Ele7', 'Ele8', 'Ele9', 'Ele10'],
  mines: [
    {
      name: 'Curus-19',
      price: 15,
      elements: [2, 4, 3, 1, 5, 10]
    },
    {
      name: 'Curus-20',
      price: 17.6,
      elements: [4, 1, 15, 7, 2, 4]
    }
  ],
  target: [],
  rsl: ''
}

const mutations = {
  _ADD_MINE (state, mineinfo) {
    state.mines.push(mineinfo)
  },
  _DELETE_MINE (state, idx) {
    state.mines = state.mines.filter((n, i) => i !== idx)
    console.log('delete ' + idx)
  },
  _SET_TYPEN (state, n) {
    state.typeN = n
  },
  _SET_TARGET (state, tar) {
    state.target = tar
  },
  _SET_RST (state, rst) {
    state.rsl = rst
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
