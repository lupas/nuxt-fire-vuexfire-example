# 🔥 nuxt-fire-vuexfire-example

<p align="center"><img align="center" height="300px" src="https://nuxt-fire-demo.firebaseapp.com/logo_text.png"/></p>

> Example project showcasing the use of [nuxt-fire](https://github.com/lupas/nuxt-fire) in combination with [vuexfire](https://github.com/vuejs/vuefire/tree/master/packages/vuexfire).

❗️ **Important:**

This example works in SSR/universal mode, **BUT** binds to and loads the data from Firestore **after** rendering. It is only rendered on server side due to a manual workaround (see comments in code) that kind of defeats the purpose of using Vue(x)fire in the first place.

If you have a working SSR example without a workaround (e.g. using the fetch hook), please create an issue and I'll add it to this example.

# Demo

This demo simply connects to a Firestore collections called _countCollection_ and then binds the document called _countDocument_ to the vuex store.

[DEMO](https://nuxt-fire-vuexfire.firebaseapp.com/)

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/lupas/nuxt-fire-vuexfire-example/badge.svg?style=beer-square)](https://beerpay.io/lupas/nuxt-fire-vuexfire-example)  [![Beerpay](https://beerpay.io/lupas/nuxt-fire-vuexfire-example/make-wish.svg?style=flat-square)](https://beerpay.io/lupas/nuxt-fire-vuexfire-example?focus=wish)