import Vue from 'vue'
import Vuex, { ModuleTree } from 'vuex'
import { RootState } from '../types/store'

import { systemStatus } from './system-status'

Vue.use(Vuex)

const modules: ModuleTree<RootState> = {
  systemStatus
}

export const store = new Vuex.Store({
  modules
})
