<template>
  <div id="logout">
    Logging out...
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
          username: '', 
          password: '', 
          stayLoggedIn: false
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
  }
}
</script>

<style></style>
