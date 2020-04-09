<template>
    <div id="account-friends">

        <h2>Friend invites</h2>
        <b-list-group id="friend-invites">
            <b-list-group-item v-for="invite in friend_invites" :key="invite.username">
                <b-button variant="light-outline" disabled>{{ invite.username }}</b-button>

                <b-button-group class="respond-btn" size="sm">
                    <b-button variant="success">Accept</b-button>
                    <b-button variant="danger">Decline</b-button>
                </b-button-group>
            </b-list-group-item>
        </b-list-group>

        <br>

        <h2>Friends</h2>
        <b-list-group id="friends">
            <b-list-group-item v-for="friend in friends_accepted" :key="friend.username">
              <b-button variant="light-outline" disabled>{{ friend.username }}</b-button>
              <b-button variant="primary" class="respond-btn">Play</b-button>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
  export default {
    computed: {
      friend_invites() {
        return this.$store.getters.friends_invites
      },
      friends_accepted() {
        return this.$store.getters.friends_accepted
      }
    }
  }
</script>

<style scoped>
  .list-group, .list-group-item {
    width: 100%;
  }

  .respond-btn{
    float: right;
  }
</style>
