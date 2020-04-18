<template>
  <contentComponent />
</template>

<script>
import contentComponent from '@/components/contentComponent'

export default {
  components: {
    contentComponent,
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
