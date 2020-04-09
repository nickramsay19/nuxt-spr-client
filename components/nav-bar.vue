<template>
  <div id="navbar">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">Scissors Paper Rock Online</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
          <b-nav-item to="/"><b-button class="nav-btn" variant="dark text-light">Home</b-button></b-nav-item>

          <b-nav-item v-if="logged_in">
              <b-dropdown :text="username" variant="dark text-light" right>
                  <b-dropdown-item to="/account">Profile</b-dropdown-item>
                  <b-dropdown-item to="/account/friends">
                      Friends

                      <b-badge v-if="friends_invites.length > 0" pill variant="danger">{{ friends_invites.length }}</b-badge>
                  </b-dropdown-item>
                  <b-dropdown-item to="/account/account-settings">Account settings</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item to="/logout" variant="danger">Logout</b-dropdown-item>
              </b-dropdown>
          </b-nav-item>

          <b-nav-item to="/login" v-if="!logged_in"><b-button class="nav-btn" variant="dark text-light">Login</b-button></b-nav-item>
          <b-nav-item to="/register" v-if="!logged_in"><b-button class="nav-btn" variant="dark text-light">Register</b-button></b-nav-item>

        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  computed: {
    logged_in () {
      return this.$store.getters.logged_in
    },
    username () {
      return this.$store.getters.username
    },
    friends () {
      return this.$store.getters.friends
    },
    friends_invites () {
      return this.$store.getters.friends_invites
    }
  },
  data: () => {
    return {
      
    }
  }

}
</script>

<style>

</style>