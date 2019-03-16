<template>
  <section class="container">
    <div>
      <no-ssr
        placeholder="loadingininigni-logo"
        placeholader-tag="span"
      >
        <logo />
      </no-ssr>
      <h1 class="title">
        hello
      </h1>
      <h2 class="subtitle">
        hello-ithome
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
      ㄎ    href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import NoSSR from "vue-no-ssr";

export default {
  components: {
    Logo,
    "no-ssr": NoSSR
  },
  loading: true,
  mounted() {
    debugger
    setTimeout(() => {
      // Extend loader for an additional 5s
      this.goToFinal();
      this.$nuxt.$loading.finish();
    }, 5000);
  },
  methods: {
    goToFinal() {
      // Start loader immediately
      this.$nuxt.$loading.start();
      // Actually change route 5s later
      setTimeout(() => {
        this.$router.replace("/login");
      }, 5000);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
