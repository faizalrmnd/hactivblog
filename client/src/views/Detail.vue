<template>
  <div>
    {{ article }}

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Detail',
  computed: {
    ...mapState(['article'])
  }
}
</script>

<style>

</style>
