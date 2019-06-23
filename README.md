# 🔥 nuxt-fire-vuexfire-example

<p align="center"><img align="center" height="300px" src="https://nuxt-fire-demo.firebaseapp.com/logo_text.png"/></p>

> Example project showcasing the use of [nuxt-fire](https://github.com/lupas/nuxt-fire) in combination with [vuexfire](https://github.com/vuejs/vuefire/tree/master/packages/vuexfire).

❗️ **Important:**

This example works in SSR/universal mode, **BUT** binds to and loads the data from Firestore **after** rendering. It is therefore NOT rendered on the server-side and thus not a working SSR example.

If you have a working SSR example (e.g. using the fetch hook), please create an issue and I'll add it to this example.

# Demo

This demo simply connects to a Firestore collections called _countCollection_ and then binds the document called _countDocument_ to the vuex store.

[DEMO](https://nuxt-fire-vuexfire.firebaseapp.com/)
