<template>
  <div>
    <navbar/>
    <!-- {{ article }} -->
    <br>
    <!-- Button trigger modal -->
    <button type="button" v-if="whosloggedin === article.author.username" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Edit Article
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Edit article</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Title</label>
              <input class="form-control" v-model="title" type="text" placeholder="Title">
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Content</label>
              <textarea class="form-control" v-model="content" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" @click="editArticle(article._id)" class="btn btn-primary" data-dismiss="modal">Post Question</button>
          </div>
        </div>
      </div>
    </div>
    <img class="card-img-top" :src="article.image" alt="Card image cap">
    <h1>{{ article.title }}</h1>
    <br><br>
    <h5>{{ article.content }}</h5>
    <br><br>
    <h6>Author : {{ article.author.name }}</h6>
    <br>
    <button v-if="whosloggedin === article.author.username" @click="deleteArticle(article._id)" type="button" class="btn btn-primary">Delete</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import navbar from '@/components/NavBar.vue'

export default {
  name: 'detail',
  components: {
    navbar
  },
  data () {
    return {
      whosloggedin: '',
      title: '',
      content: ''
    }
  },
  methods: {
    editArticle: function (articleId) {
      let payload = {
        id: articleId,
        title: this.title,
        content: this.content
      }
      this.$store.dispatch('editArticle', payload)
    },
    deleteArticle: function (articleId) {
      let payload = articleId
      this.$store.dispatch('deleteArticle', payload)
    }
  },
  computed: {
    ...mapState(['article'])
  },
  created () {
    let user = localStorage.getItem('username')

    this.whosloggedin = user
  }
}
</script>

<style scoped>
  #button {
    margin: 10px;
  }
</style>
