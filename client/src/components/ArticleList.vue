<template>
  <div>
    <!-- {{ questionList }} -->
    <div v-for="(article, index) in articleList" v-bind:key='index' class="card">
      <h5 class="card-header">{{ article.title }}</h5>
      <div class="card-body">
        <h5 class="card-title">{{ article.content }}</h5>
        <p class="card-text">Author :{{ article.author.name }}</p>
        <!-- <p class="card-text">{{ question._id }}</p> -->
        <a href="#" @click="getArticle(article._id)" class="btn btn-primary">Detail</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ArticleList',
  data () {
    return {

    }
  },
  methods: {
    getArticle: function (articleId) {
      let payload = articleId

      this.$store.dispatch('getArticleDetail', payload)

      this.$router.push('/detail')
    }
  },
  computed: {
    ...mapState(['articleList'])
  },
  created () {
    let payload = localStorage.getItem('token')

    this.$store.dispatch('getArticles', payload)
  }
}
</script>

<style>

</style>
