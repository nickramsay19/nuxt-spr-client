<template>
  <div id="login">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Username"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-2" 
        label="Password" 
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-4">

        <b-form-checkbox
          id="checkbox-1"
          v-model="form.stayLoggedIn"
          name="checkbox-1"
        >
          Keep me logged in.
        </b-form-checkbox>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
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
