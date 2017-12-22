import * as TYPES from '../constants';
import { RootState, SystemStatus } from '../types/store'
import { GetterTree, Mutation, MutationTree, ActionTree, Action } from 'vuex'

const state: SystemStatus = {
  loading: false
}

const getters: GetterTree<SystemStatus, any> = {
  loading: state => state.loading
}

const mutations: MutationTree<SystemStatus> = {
  [TYPES.UPDATE_STATUS](state, loading) {
    state.loading = loading
  },
}

const actions: ActionTree<SystemStatus, RootState> = {
  [TYPES.UPDATE_STATUS]({ commit }, loading) {
    setTimeout(() => {
      commit(TYPES.UPDATE_STATUS, loading)
    }, 2000)
  }
}

export const systemStatus = {
  state,
  getters,
  mutations,
  actions
};
