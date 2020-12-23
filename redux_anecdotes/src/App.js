import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addLike, createAnecdote } from './reducers/anecdoteReducer'


const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()


  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log(content)
    event.target.anecdote.value = ''
    console.log(content)
    dispatch(createAnecdote(content))
  }


  return (
    <div>
      <h2>Anecdotes</h2>

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addLike(anecdote.id))}>Vote</button>
          </div>
        </div>
      )}

      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name = "anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}


export default App