<template>
  <div class="container">
    <div>
      <h1 class="title">nuxt-fire-vuexfire-example</h1>
      <h2 class="subtitle">
        Example project showcasing the use of @nuxtjs/firebase together with
        vuexfire.
      </h2>
      <h3>Count</h3>
      <p class="count">{{ count }}</p>
      <div class="links">
        <div class="button--green" @click="changeCount(-1)">-1</div>
        <div class="button--green" @click="changeCount(1)">+1</div>
      </div>
      <h2>Different ways of implementation:</h2>
      <button
        v-for="button in buttons"
        :key="button.path"
        :disabled="$route.path === button.path"
        @click="$router.push(button.path)"
      >
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    buttons: [
      {
        path: '/ssr-direct',
        label: 'SSR (directly via Store)',
      },
      {
        path: '/ssr-vuexfire',
        label: 'SSR (via Vuexfire)',
      },
      {
        path: '/spa-mode',
        label: 'SPA Mode',
      },
    ],
  }),
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    changeCount(amount) {
      const increment = this.$fireModule.firestore.FieldValue.increment(amount)
      this.$fire.firestore
        .collection('countCollection')
        .doc('countDocument')
        .update({ count: increment })
    },
  },
}
</script>
