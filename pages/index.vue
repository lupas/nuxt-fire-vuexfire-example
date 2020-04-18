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
  async fetch({ app, store }) {
    // ONLY NEEDED IN SSR (UNIVERSAL) MODE, not needed in SPA MODE
    try {
      /**  Way 1 - Vuexfire: Bind document and unbind it again */
      // Binds it on server side then unbind again to avoid memory leaks on the server.
      // -> Less code, but also less performant
      /* 
      await store.dispatch('bindCountDocument')
      store.dispatch('unbindCountDocument')
      */

      /**  Way 2 - Direct store mutation */
      // -> More performant
      const ref = app.$fireStore
        .collection('countCollection')
        .doc('countDocument')
      const countDoc = await ref.get()
      store.commit('SET_COUNT_DOCUMENT', countDoc.data())
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
