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
  computed: {
    ...mapGetters(['count'])
  },
  created() {
    const ref = this.$fireStore
      .collection('countCollection')
      .doc('countDocument')
    this.setCountCollectionRef(ref)
  },
  methods: {
    ...mapActions({
      setCountCollectionRef: 'setCountCollectionRef'
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
