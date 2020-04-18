<template>
  <contentComponent />
</template>

<script>
import contentComponent from '@/components/contentComponent'

export default {
  components: {
    contentComponent,
  },
  /** Get data on Server Side: */
  async fetch({ app, store }) {
    if (process.browser) return
    try {
      const ref = app.$fireStore
        .collection('countCollection')
        .doc('countDocument')
      const countDoc = await ref.get()
      store.commit('SET_COUNT_DOCUMENT', countDoc.data())
    } catch (e) {
      console.error(e)
    }
  },
  /**  Bind Vuexfire on client-side: */
  async mounted() {
    try {
      await this.$store.dispatch('bindCountDocument')
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
