import Vuex from 'vuex'
// import util from '../common/util.js'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'


const appStore = () => {
  return new Vuex.Store({
    state: () => ({
      browserName: null,
      token: null,
      backendAccessConfig: null,
      isDev: null,
      nodeApiBase: null,
      useMockData: false,
      staticBase: null,
      userEmail: null,
      user: null,
      loading: false,
      uploadUrl: null,
      internationalization: null,
      activeLanguage: null,
      mytext: false,
      from:null,
      to:null,
      favorites: [
       
        ],
   
    }),
    getters,
    mutations,
    actions
  })
}

export default appStore
