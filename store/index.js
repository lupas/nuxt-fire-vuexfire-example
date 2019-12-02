import { vuexfireMutations, firestoreAction } from 'vuexfire'
export const state = () => ({
  countDocument: {
    count: 'loading'
  }
})
export const mutations = {
  ...vuexfireMutations
}
export const actions = {
  bindCountDocument: firestoreAction(function({ bindFirestoreRef }, ref) {
    bindFirestoreRef('countDocument', ref)
  })
}
export const getters = {
  count(state) {
    return state.countDocument.count
  }
}
