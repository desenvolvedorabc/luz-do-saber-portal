import Vue from 'vue'
import uniqid from 'uniqid'
import { clone, values } from 'lodash'

import db from '@/services/Session'

import router from '@/router'

const state = {
    currentUser: null
}

const mutations = {
    SET_USER(state, payload) {
        Vue.set(state, 'currentUser', payload)
    },
    ADD_FRIEND(state, payload) {
        let currentUser = clone(state.currentUser)
        let friendRef = uniqid()

        currentUser.friends[friendRef] = payload

        Vue.set(state, 'currentUser', currentUser)
    }
}

const actions = {
    createUserDatabase({ commit }, payload){
        let snapshot = db.value()

        if (snapshot.data && !snapshot.data.name) {
            db.set('data.name', payload.name).write()
            return
        }

        db.defaults({
            data: {
                name: payload.name
            },
            friends: {},
            pointings: {
                units: {},
                themes: {},
                modules: {},
                activities: {},
            }
        }).write()

        commit('SET_USER', db.value())
    },

    destroyUserDatabase({ commit }) {
        resetUser()
        commit('SET_USER', null)
        router.replace({ name: 'home-page'}) // go to first
    },

    recoveryUserDatabase({ commit }){
        let payload = db.value()
        if (payload.data && payload.data.name) {
            commit('SET_USER', payload)
        }
    },
    addFriend({ commit }, friend){
        commit('ADD_FRIEND', friend)
    }
}

const getters = {
    friends({ currentUser }){
        return values(currentUser.friends)
    }
}

function resetUser() {
    db.set('data.name', null)
    db.set('friends', {})
    db.set('pointings', {
        units: {},
        themes: {},
        modules: {},
        activities: {},
    })

    return db.write()
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}