<template>
  <div>
    <Header />
    <logo>
      我敲敲得近來囉 嵌套路由
    </logo>
    <nuxt-child />
    <Footer />

  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Logo,
    Header,
    Footer
  }
};
</script>
