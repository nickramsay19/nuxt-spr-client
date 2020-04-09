<template>
  <div id="play">
      <h1>Play</h1>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        friends: [
          'billy101',
          'gary69',
          'gordon01',
          'j.charles'
        ],
        publicGames: [
          'game1',
          'game2',
          'game3',
          'game4',
        ],
        invites: [
          'gary69'
        ]
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
