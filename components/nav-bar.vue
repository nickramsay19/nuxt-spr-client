<template>
  <div id="navbar">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">Scissors Paper Rock Online</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
          <b-nav-item to="/"><b-button class="nav-btn" variant="dark text-light">Home</b-button></b-nav-item>

          <b-nav-item v-if="loggedIn">
            <b-dropdown text="nickramsay19" variant="dark text-light" right>
                <b-dropdown-item to="/account">Profile</b-dropdown-item>
                <b-dropdown-item to="/account/friends">Friends</b-dropdown-item>
                <b-dropdown-item to="/account/account-settings">Account settings</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/logout" variant="danger">Logout</b-dropdown-item>
            </b-dropdown>
          </b-nav-item>

          <b-nav-item to="/login" v-if="!loggedIn"><b-button class="nav-btn" variant="dark text-light">Login</b-button></b-nav-item>
          <b-nav-item to="/register" v-if="!loggedIn"><b-button class="nav-btn" variant="dark text-light">Register</b-button></b-nav-item>

        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data: () => {
    return {
      loggedIn: true,
      invites: [
        'garry420'
      ],
      friends: [
        'billybob101',
        'gordon69'
      ]
    }
  }

}
</script>

<style>

</style>