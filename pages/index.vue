<template>
  <div class="container">
    <div>
      <h1 class="title">
        nuxt-fire-vuexfire-example
      </h1>
      <h2 class="subtitle">
        Example project showcasing the use of @nuxtjs/firebase together with
        vuexfire.
      </h2>
      <h3>
        Count
      </h3>
      <p class="count">{{ count }}</p>
      <div class="links">
        <div class="button--green" @click="changeCount(-1)">-1</div>
        <div class="button--green" @click="changeCount(1)">+1</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store }) {
    // ONLY NEEDED IF IN SSR (UNIVERSAL) MODE, not needed in SPA MODE
    try {
      // Binds it on server side, but will not rebind on client-side
      await store.dispatch('bindCountDocument')
      // Unbind again to avoid memory leaks:
      store.dispatch('unbindCountDocument')
    } catch (e) {
      console.error(e)
    }
  },
  computed: {
    ...mapGetters(['count']),
  },
  async mounted() {
    try {
      // Binds it on client-side
      await this.$store.dispatch('bindCountDocument')
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    changeCount(amount) {
      const increment = this.$fireStoreObj.FieldValue.increment(amount)
      this.$fireStore
        .collection('countCollection')
        .doc('countDocument')
        .update({ count: increment })
    },
  },
}
</script>
