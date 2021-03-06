const state = {
  typeN: 6,
  // TODO: fill up more element names
  elename: ['Fe2O3', 'Al2O3', 'SiO2', 'S', 'C', 'MgO2'],
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
  target: [[0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]],
  rsl: ''
}

const mutations = {
  _ADD_MINE (state, mineinfo) {
    state.mines.push(mineinfo)
  },
  _DELETE_MINE (state, idx) {
    state.mines = state.mines.filter((n, i) => i !== idx)
  },
  _SET_TYPEN (state, n) {
    state.typeN = n
  },
  _SET_ELE_NAME (state, { idx, name }) {
    while (idx >= state.elename.length) {
      state.elename.push('Ele' + state.elename.length)
    }
    state.elename[idx] = name
    console.log(state.elename)
  },
  _SET_ELE_TAR_LOW (state, { n, e }) {
    while (n >= state.target.length) {
      state.target.push([0, 1])
    }
    state.target[n][0] = e
  },
  _SET_ELE_TAR_HIGH (state, {n, e}) {
    while (n >= state.target.length) {
      state.target.push([0, 1])
    }
    state.target[n][1] = e
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
