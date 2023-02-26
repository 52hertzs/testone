import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    //写在computed中
    state: {
        count: 0
    },
    //用于state中的数据,主要起到包装的作用
    getters:{
        shownum(state){
            return `当前最新的数据是：${state.count}`
        }
    },
    //用于修改state中的数据，主要起到修改的作用
    mutations: {
        add(state, step) {
            state.count += step
        },
        subN(state, step) {
            state.count -= step
        }
    },
    //用于写异步操纵
    actions: {
        addAsync(context,step) {
            setTimeout(() => {
                context.commit('add',step)
            }, 3000)

        },
    }
})