import anecdoteService from '../services/anecdotes'


const likeReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action clicking:', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      const newState = [...state, action.data]
      return newState.sort((a, b) => b.votes - a.votes)

    case 'INIT_NOTES':
      return (action.data).sort((a, b) => b.votes - a.votes)
      
      case 'ADD_LIKE':

        return action.data
    default:
  return state
  }
}


export const addLike = (id) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.AddLikeToAnecdote(id)
    dispatch({
    type: 'ADD_LIKE',
    data: anecdotes
  })
}
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    console.log(anecdotes)
    dispatch({
    type: 'INIT_NOTES',
    data: anecdotes
  })
}
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.NewAnecdoteToDB(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export default likeReducer