<template>
  <div>
    <!-- <div class="row mx-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary col-12 px-5">

        <a class="navbar-brand" href="#">Hactivblog!</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Main</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div> -->
    <navbar/>

    <div>
      <h4>Filter By Category:</h4>
      <select class="filter form-control" v-model="category" id="exampleFormControlSelect1">
        <option>Vacation</option>
        <option>Horor</option>
        <option>Comedy</option>
      </select>
      <button class="btn btn-primary" @click="filter" type="submit">Filter</button>
      <br>
    </div>
    <!-- Button trigger modal -->
    <button type="button" v-if="token === 'ada'" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Add Article
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add article</h5>
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
          <div class="form-group">
            <label for="exampleFormControlSelect1">Category</label>
            <select class="filter form-control" v-model="category" id="exampleFormControlSelect1">
              <option>Vacation</option>
              <option>Horor</option>
              <option>Comedy</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Input Photo</label>
            <input type="file" id="image" class="form-control-file">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" @click="addArticle" class="btn btn-primary" data-dismiss="modal">Post Question</button>
          </div>
        </div>
      </div>
    </div>
    <ArticleList/>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import navbar from '@/components/NavBar.vue'

export default {
  name: 'questions',
  components: {
    ArticleList,
    navbar
  },
  data () {
    return {
      title: '',
      content: '',
      category: '',
      token: ''
    }
  },
  methods: {
    addArticle: function () {
      // let payload = {
      //   title: this.title,
      //   content: this.content,
      //   category: this.category
      // }
      const fileInput = document.querySelector('#image')

      let payload = new FormData()

      payload.append('image', fileInput.files[0])
      payload.append('title', this.title)
      payload.append('content', this.content)
      payload.append('category', this.category)

      this.$store.dispatch('addArticle', payload)
    },
    filter: function () {
      let payload = this.category

      this.$store.dispatch('filter', payload)
    }
  },
  created () {
    let token = localStorage.getItem('token')

    if (token) {
      this.token = 'ada'
    }
  }
}
</script>

<style scoped>
  .filter {
    width: 300px;
  }
</style>
