<template>
  <div id="index">
      <!-- Start game Jumbotron -->
      <b-jumbotron>
        <b-row>
          <b-col class="jumbotron-col">
            <h3 class="jumbotron-heading">Start a public game</h3>
            <br>
            <b-button variant="success" size="lg" id="play-public">Play now</b-button>
          </b-col>
          <b-col class="jumbotron-col" id="jumbotron-right">
            <h3 class="jumbotron-heading">Play with a friend</h3>
            <br>
            <b-list-group id="jumbotron-friends-list">
              <b-list-group-item v-for="friend in friends" :key="friend.username">
                <b-button-group class="friend-invite">
                  <b-button variant="outline-dark" disabled>{{ friend.username }}</b-button>
                  <b-button variant="success">Play</b-button>
                </b-button-group>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-jumbotron>
  
      <!-- Public games -->
      <h2>Join a public game</h2>
      <b-list-group>
        <b-list-group id="jumbotron-friends-list">
          <b-list-group-item v-for="game in public_games">
            <b-button-group class="friend-invite">
              <b-button variant="outline-dark" disabled>{{ game.inviter }}</b-button>
              <b-button variant="success">Join</b-button>
            </b-button-group>
          </b-list-group-item>
        </b-list-group>
      </b-list-group>

      <!-- Invited games -->
      <h2>Game invites from friends</h2>
      <b-list-group>
        <b-list-group id="jumbotron-friends-list">
          <b-list-group-item v-for="game_invite in game_invites" :key="game_invite">
            <b-button-group class="friend-invite">
              <b-button variant="outline-dark" disabled>{{ game_invite.inviter }}</b-button>
              <b-button variant="success">Join</b-button>
            </b-button-group>
          </b-list-group-item>
        </b-list-group>
      </b-list-group>
  </div>
</template>

<script>
  export default {
    computed: {
      games () {
        return this.$store.getters.games
      },
      public_games() {
        return this.$store.getters.public_games
      },
      game_invites() {
        return this.$store.getters.game_invites
      },
      friends () {
        return this.$store.getters.friends
      }
    },
    data: () => {
      return {
        
      }
    }
  }
</script>

<style>
  #play-public{
    width: 10em;
  }

  .jumbotron {
    padding: 2em;
  }

  .jumbotron-col {
    text-align: center;

    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #jumbotron-right {
    border-left-style: solid;
    border-left-width: 0.05em;
    border-left-color: #a4a7ab
  }

  .jumbotron-heading {
    text-align: center;
  }

  #jumbotron-friends-list {
    border-color: #00000000;

    height: 12em;
    overflow-y: auto;
  }

  #jumbotron-friends-list .list-group-item{
    background-color: #00000000;
    border-width: 0px;
  }

  .friend-invite {
    width: 100%;
  }
</style>
