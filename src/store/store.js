import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // 状態を定義
    tasks: [
      {
        name: 'No1',
        flag: false
      },
      {
        name: 'No2',
        flag: true
      },
      {
        name: 'No3',
        flag: false
      }
    ]
  },
  mutations: {
    TaskFinished: (state, payload) => {
      state.tasks.forEach(value => {
        if (value.name === payload) {
          if (value.flag === true) {
            value.flag = false
          } else if (value.flag === false) {
            value.flag = true
          }
        }
      })
    },
    TaskAdded: (state, payload) => {
      console.log(payload)
      state.tasks.push({
        name: payload,
        flag: false
      })
    }
  },
  actions: {
    TaskFinished: (context, payload) => {
      context.commit('TaskFinished', payload)
    },
    TaskAdded: (context, payload) => {
      context.commit('TaskAdded', payload)
    }
  }
})
