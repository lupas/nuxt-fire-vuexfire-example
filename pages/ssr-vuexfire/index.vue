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
      // Binds it on server side then unbind again to avoid memory leaks on the server.
      await store.dispatch('bindCountDocument')
      store.dispatch('unbindCountDocument')
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
