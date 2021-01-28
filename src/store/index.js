import Vue from 'vue'
import Vuex from 'vuex'

import profile from './profile'

Vue.use(Vuex)
Vue.config.devtools = true

export default function () {
  const Store = new Vuex.Store({
    modules: {
      profile
    },
    strict: process.env.DEV
  })
  return Store
}
