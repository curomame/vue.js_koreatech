const countStore = {
  namespaced : true,
  state () {
    return {
      count : 0
    }
  },
  actions : {
    increase ({commit}){
      commit('increase')
    }
  },
  mutations:{
    increase(state){
      state.count++
    }
  },
  getters : {
    countGetter : state => {
      return state.count
    }
  }
}

export default countStore;