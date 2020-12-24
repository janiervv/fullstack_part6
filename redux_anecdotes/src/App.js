import React, {useEffect} from 'react'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'



const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  },[dispatch]) 

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList/>
      <NewAnecdote/>
    </div>
  )
}

export default App