export const state = () => ({
    session: {
      logged_in: true,
      username: 'nick',
      session_id: '',
      session_key: ''
    },

    friends: [
      { 
        username: 'gary101',
        acceptance_code: 0
      },
      { 
        username: 'michael69',
        acceptance_code: 1
      },
      { 
        username: 'rambo',
        acceptance_code: 1
      },
      { 
        username: 'spambot23',
        acceptance_code: 2
      }
    ],

    games: [
      {
        public: false,
        inviter: 'rambo',
        reciever: 'nick',
        inviter_move: 1,
        reciever_move: 0
      },
      {
        public: true,
        inviter: 'guest177',
        reciever: '',
        inviter_move: 1,
        reciever_move: 0
      },
      {
        public: true,
        inviter: 'guest142',
        reciever: '',
        inviter_move: 3,
        reciever_move: 0
      },
    ]
})
  
export const getters = {
    logged_in: state => {
      return state.session.logged_in
    },
    username: state => { 
      return state.session.username
    },
    friends: state => {
      return state.friends
    },
    friends_invites: state => {
      return state.friends.filter(friends => friends.acceptance_code == 0)
    },
    friends_accepted: state => {
      return state.friends.filter(friends => friends.acceptance_code == 1)
    },
    games: state => {
      return state.games
    },
    public_games: state => {
      return state.games.filter(games => games.public)
    },
    game_invites: state => {
      return state.games.filter(games => games.reciever == state.session.username)
    }
}