<template>
  <div>
    <h1>六角報名查詢</h1>

    {{ $store.state.result }}
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue'
export default {
  async asyncData() {
    let { data } = await axios.post("https://www.thef2e.com/api/isSignUp", {
      email: "hexscholl@test.com"
    });

    store.commit("setResult", data);
  },
  async asyncData() {
    let { data } = await axios.post(
      "https://www.thef2e.com/api/search-signup-result",
      {
        email: "hexscholl@test.com"
      }
    );
    //  await  store.commit('setResult', '123');
  }
};
</script>
