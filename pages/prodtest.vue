<template>
<div>
  <h1>{{ title }}</h1>
  <img :src="photo"/>

</div>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    axios.defaults.baseURL = 'https://api.example.com';
    axios.defaults.headers.common['Authorization'] = 'YUOR_AUTH_TOKEN';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  },
  async asyncData ({ params }) {
    let { data } = await axios.get(`/products/${params.id}`)
    return {
      title: data.title,
      photo: data.photo,
      desc: data.description
    }
  }
}
</script>
