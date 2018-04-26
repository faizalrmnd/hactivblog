<template>
  <div class="home d-flex justify-content-center">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <form>
        <div class="form-group">
          <h3>Login</h3>
          <label for="exampleInputEmail1">Username</label>
          <input type="text" v-model="usernameLogin" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" v-model="passwordLogin" class="form-control" placeholder="Password">
        </div>
        <button type="submit" @click="login" class="btn btn-primary">Login</button>
      </form>
    </div>
    <div>
      <form>
        <div class="form-group">
          <h3>Register</h3>
          <label for="exampleInputEmail1">Username</label>
          <input type="text" v-model="username" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">name</label>
          <input type="text" v-model="name" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" v-model="password" class="form-control" placeholder="Password">
        </div>
        <button type="submit" @click="register" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      username: '',
      name: '',
      password: '',
      usernameLogin: '',
      passwordLogin: ''
    }
  },
  methods: {
    register: function () {
      let payload = {
        username: this.username,
        name: this.name,
        password: this.password
      }

      this.$store.dispatch('register', payload)
        .then(register => {
          this.$router.push('/about')
        })
    },
    login: function () {
      let payload = {
        username: this.usernameLogin,
        password: this.passwordLogin
      }

      this.$store.dispatch('login', payload)
        .then((login) => {
          this.$router.push('/about')
        })
    }
  },
  created () {
    let token = localStorage.getItem('token')

    if (token) {
      this.$router.push('/about')
    }
  }
}
</script>

<style>

</style>
