import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addLike } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {

    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

return(
    <div>

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
    </div>
)

}

export default AnecdoteList