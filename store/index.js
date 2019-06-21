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
  setCountCollectionRef: firestoreAction(function(context, ref) {
    context.bindFirestoreRef('countDocument', ref)
  })
}
export const getters = {
  count(state) {
    return state.countDocument.count
  }
}
