import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
  countDocument: {
    count: null,
  },
})
export const mutations = {
  ...vuexfireMutations,
  SET_COUNT_DOCUMENT: (state, countDocument) => {
    // Only needed for SSR/Universal Mode
    state.countDocument = countDocument
  },
}

export const actions = {
  bindCountDocument: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fireStore
      .collection('countCollection')
      .doc('countDocument')
    await bindFirestoreRef('countDocument', ref, { wait: true })
  }),
  unbindCountDocument: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('countDocument', false)
  }),
}
export const getters = {
  count(state) {
    return state.countDocument.count
  },
}
