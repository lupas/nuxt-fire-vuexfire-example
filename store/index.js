import { vuexfireMutations, firestoreAction } from 'vuexfire'
export const state = () => ({
  countDocument: {
    count: 'loading'
  }
})
export const mutations = {
  ...vuexfireMutations,
  // START Workaround: Only needed in SSR Mode,not needed in SPA mode:
  updateCount(state, count) {
    state.countDocument.count = count
  }
  // END Workaround
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
