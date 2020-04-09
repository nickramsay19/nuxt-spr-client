<template>
  <div id="navbar">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">SPR</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
          <b-nav-item><NuxtLink to="/"><b-button class="nav-btn" variant="dark text-light">Home</b-button></NuxtLink></b-nav-item>

          <b-nav-item v-if="loggedIn">
            <b-dropdown text="nickramsay19" variant="dark text-light" right>

              <!-- Friend invites -->
              <b-dropdown-group id="dropdown-group-1" header="Friend invites">
                <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
                <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
              </b-dropdown-group>

              <!-- Friends -->
              <b-dropdown-group id="dropdown-group-1" header="Friends">
                <b-dropdown-item-button>Billy101</b-dropdown-item-button>
                <b-dropdown-item-button>gordon6969</b-dropdown-item-button>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Add a friend</b-dropdown-item-button>
              </b-dropdown-group>

              <b-dropdown-divider></b-dropdown-divider>

              <!-- Account settings and logout -->
              <b-dropdown-group id="dropdown-group-1" header="Your Account">
                <b-dropdown-item>Account settings</b-dropdown-item>
              <b-dropdown-item class="text-danger">Logout</b-dropdown-item>
              </b-dropdown-group>
              
          
              
            </b-dropdown>
          </b-nav-item>

          <b-nav-item v-if="!loggedIn"><NuxtLink to="/login"><b-button class="nav-btn" variant="dark text-light">Login</b-button></NuxtLink></b-nav-item>
          <b-nav-item v-if="!loggedIn"><NuxtLink to="/register"><b-button class="nav-btn" variant="dark text-light">Register</b-button></NuxtLink></b-nav-item>

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