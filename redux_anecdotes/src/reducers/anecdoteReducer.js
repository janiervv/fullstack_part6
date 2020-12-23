const likeReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      const newState = [...state, action.data]
      return newState.sort((a, b) => b.votes - a.votes)
    case 'ADD_LIKE':
      const id = action.data.id
      const anecdoteToLike = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToLike, 
        votes: anecdoteToLike.votes + 1 
      }
      const likedState =  state.map(note =>
        note.id !== id ? note : changedAnecdote )

      return likedState.sort((a, b) => b.votes - a.votes)
      
    default:
  return state
  }
}

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const addLike = (id) => {
  return {
    type: 'ADD_LIKE',
    data: { id }
  }
}


export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}

export default likeReducer