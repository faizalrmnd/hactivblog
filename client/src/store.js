import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      name: ''
    },
    articleList: [],
    article: {}
  },
  mutations: {
    setUser: function (state, payload) {
      state.user.username = payload.username
      // Vue.set(state.user, 'password', payload.password)
      // state.role = Object.assign({}, state.role, payload.role)
      state.user.name = payload.name
    },
    setArticles: function (state, payload) {
      state.articleList = payload
    },
    setArticleById: function (state, payload) {
      // state.articleList.forEach(articleById => {
      //   if (articleById._id === payload) {
      //     state.article = articleById
      //   }
      // })
      state.article = payload
    }
  },
  actions: {
    register: function (context, payload) {
      console.log('masuk')
      axios.post('http://localhost:3000/register', {
        username: payload.username,
        name: payload.name,
        password: payload.password
      })
        .then(function (response) {
          localStorage.setItem('username', payload.username)
          localStorage.setItem('token', response.data.token)
          context.commit('setUser', payload)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    login: function (context, payload) {
      axios.post('http://localhost:3000/login', {
        username: payload.username,
        password: payload.password
      })
        .then(function (response) {
          localStorage.setItem('username', payload.username)
          localStorage.setItem('token', response.data.token)
          // console.log(response.data.token)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getArticles: function (context) {
      axios
        .get('http://localhost:3000/article')
        .then(response => {
          console.log(JSON.stringify(response.data.data))
          context.commit('setArticles', response.data.data)
        })
        .catch((error) => {
          console.log('error 3 ' + error)
        })
    },
    getArticleDetail: function (context, payload) {
      axios
        .get(`http://localhost:3000/article/${payload}`)
        .then(response => {
          console.log(JSON.stringify(response.data.data))
          context.commit('setArticleById', response.data.data)
        })
        .catch((error) => {
          console.log('error 3 ' + error)
        })
    },
    addQuestion: function (context, payload) {
      let token = localStorage.getItem('token')

      axios.post('http://localhost:3000/article/post', {
        title: payload.title,
        content: payload.content,
        category: payload.category
      }, { headers: { token: token } })
        .then(function (response) {
          // context.commit('setUser', response.data.user)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})
