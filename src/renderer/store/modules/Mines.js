const state = {
  typeN: 6,
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
  target: []
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
