import {
  DISP_SWITCH_UNIT
} from '../mutations'

const state = {
  isSimplified: false,
  isTenThPerTon: true
}

const mutations = {
  [DISP_SWITCH_UNIT] (state) {
    state.isTenThPerTon = !state.isTenThPerTon
  }
}

const actions = {
  [DISP_SWITCH_UNIT] ({commit}) {
    commit(DISP_SWITCH_UNIT)
  }
}

export default {
  state,
  mutations,
  actions
}
