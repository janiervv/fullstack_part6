import React from 'react'
import { connect } from 'react-redux' 
import { addLike } from '../reducers/anecdoteReducer'


const AnecdoteList = (props) => {

return(
    <div>

      {props.anecdotesToShow.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => props.addLike(anecdote.id)}>Vote</button>
          </div>
        </div>
      )}
      </div>
      )
}

const anecdotesToShow = (anecdotes) => {
  return anecdotes.sort((a, b) => b.votes - a.votes)
} 

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  addLike
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdotes