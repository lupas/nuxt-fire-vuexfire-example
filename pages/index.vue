<template>
  <div class="container">
    <div>
      <h1 class="title">
        nuxt-fire-vuexfire-example
      </h1>
      <h2 class="subtitle">
        Example project showcasing the use of nuxt-fire together with vuexfire.
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
import { mapGetters, mapActions } from 'vuex'

export default {
  // START Workaround: Only needed in SSR Mode,not needed in SPA mode:
  async fetch({ app, store }) {
    let doc
    try {
      doc = await app.$fireStore
        .collection('countCollection')
        .doc('countDocument')
        .get()
    } catch (e) {
      console.error('Error getting document:', e)
      return
    }
    if (doc.exists) {
      console.info('Document data:', doc.data())
      store.commit('updateCount', doc.data().count)
    } else {
      console.info('No such document!')
    }
    // END Workaround
  },
  computed: {
    ...mapGetters(['count'])
  },
  created() {
    const ref = this.$fireStore
      .collection('countCollection')
      .doc('countDocument')
    this.bindCountDocument(ref)
  },
  methods: {
    ...mapActions({
      bindCountDocument: 'bindCountDocument'
    }),
    changeCount(amount) {
      const increment = this.$fireStoreObj.FieldValue.increment(amount)
      this.$fireStore
        .collection('countCollection')
        .doc('countDocument')
        .update({ count: increment })
    }
  }
}
</script>
