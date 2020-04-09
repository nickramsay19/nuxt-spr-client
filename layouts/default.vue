<template>
  <div id="default-layout">
    <!-- Navbar -->
    <nav-bar></nav-bar>

    <!-- Page Content -->
    <b-container id="page-content">
      <nuxt/>
    </b-container>
  </div>
</template>

<script>

import NavBar from '~/components/nav-bar.vue'

export default {
  components: {
    NavBar
  }
}

</script>

<style>
  #page-content{
    margin-top: 2em;
  }
</style>
