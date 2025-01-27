import router from '@/router'
import Http from '@/services/Http'

import { omit, dropRight } from 'lodash'

const state = {
    unit: null,
    navigator: {
        order: 1,
        params: null
    }
}

const mutations = {
    SET_UNIT(state, payload){
        state.unit = payload
    },
    SET_NAVIGATOR_PARAMS(state, params){
        state.navigator.params = omit(params, ['position'])
    },
    SET_NAVIGATOR_ORDER(state, newOrder){
        state.navigator.order = newOrder
    }
}

const actions = {
    async fetchUnit({ commit }, params){
        let { data } = await Http.axios.get(`/game/${params.module_slug}/${params.target_audience}/${params.theme_slug}/${params.unit_slug}.json`)
        commit('SET_UNIT', data)
        commit('SET_NAVIGATOR_PARAMS', params)
    },
    nextActivity({ state, dispatch }){
        let { navigator } = state
        let newOrder = parseInt(navigator.order) + 1
        if (newOrder > state.unit.questions.length) {
            let currentUnitPath = dropRight(router.currentRoute.fullPath.split('/'), 2).join('/')
            router.replace({ path: currentUnitPath})
        } else {
            dispatch('goActivity', newOrder)
        }
    },
    prevActivity({ dispatch, state }){
        if (state.unit === null) return                
        
        let newOrder = parseInt(state.navigator.order) - 1
        if (newOrder <= 0) return

        dispatch('goActivity', newOrder)
    },
    goActivity({ commit, state }, newOrder){
        let { unit, navigator } = state
        let question = unit.questions[(newOrder - 1)]

        if (unit) {
            commit('SET_NAVIGATOR_ORDER', newOrder)
            router.push({ name: 'activity', params: { position: question.order, ...navigator.params }})            
        }
    },
    setNavigatorOrder({commit}, orderNumber){
        commit('SET_NAVIGATOR_ORDER', orderNumber)
    },
    destroyUnit({ commit }){
        commit('SET_UNIT', null)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}