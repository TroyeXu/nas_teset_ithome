<template lang="pug">
  .col-container
    .p-login.col-row
      form.p-login__account(action="/")

        .p-login__account__block
          h2.p-login__account__block__title
            | 會員登入
          ul.p-login__community__list.h-md-flex.h-p-md-4.h-none
            li
              a(href="#")
                img(src="../assets/img/ic-facebook.svg",width="108",height="20")
            li
              a(href="#")
                img(src="../assets/img/ic-google.svg",width="95",height="20")
            li
              a(href="#")
                img(src="../assets/img/ic-yahoo.svg",width="97",height="23")
          .h-m-md-4
            .l-registered__form.l-registered__form_small.h-flex.h-align-content-between.h-mb-3
              i.fas.fa-user.l-registered__form__icon
              input(type="text",placeholder="電子信箱/手機號碼").l-registered__form__text

            .l-registered__form.l-registered__form_small.h-flex.h-align-content-between.h-mb-3
              i.fas.fa-key.l-registered__form__icon
              input(type="text",placeholder="請輸入使用者密碼").l-registered__form__text
            .p-login__account__block__checkbox.h-mb-3
              input(type="checkbox",id="check")
              label(for="check") 記住我
        a.p-login__account__submit.h-py-3(href="#")
          | 登入帳號
      .p-login__community.h-md-none
        h2.p-login__community__title
          | —— 連結社群帳號 ——
        ul.p-login__community__list.h-md-flex
          li.h-mb-3
            a(href="#")
              img(src="../assets/img/ic-facebook.svg",width="108",height="20")
          li.h-mb-3
            a(href="#")
              img(src="../assets/img/ic-google.svg",width="95",height="20")
          li.h-mb-3
            a(href="#")
              img(src="../assets/img/ic-yahoo.svg",width="97",height="23")

</template>
<script>
import axios from "axios";
export default {
  layout: "front",
  head: {
    title: "甜點電商-META - 巧克力布朗尼"
  },
  validate() {
    // return /^\d+$/.test(params.id);
    return true;
  },
  created() {},
  // async asyncData() {
  //   let params={
  //      "email": "hexscholl@test.com"
  //   }
  //   let {data} = await axios({
  //     url:'https://www.thef2e.com/api/isSignUp',
  //     methods: 'post',
  //     data:params
  //   })
  //   return {result: data}
  // },

  async asyncData() {
    let { data } = await axios.post("https://www.thef2e.com/api/isSignUp", {
      email: "hexscholl@test.com"
    });

    return { result: data };
  },
  // asyncData() {
  //   return axios
  //     .post("https://www.thef2e.com/api/isSignUp", {
  //       email: "hexscholl@test.com"
  //     })
  //     .then(({ data }) => ({
  //       result: data
  //     }));
  // },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  },
  loading: true
};
</script>
