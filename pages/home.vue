<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="(article, index) in articles" :key="index">
        {{ article }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      articles: [],
    };
  },
  async mounted () {
    const session = localStorage.getItem('session');
    const { data } = await this.$axios.get('/articles', {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    });
    this.articles = data;
  },
};
</script>