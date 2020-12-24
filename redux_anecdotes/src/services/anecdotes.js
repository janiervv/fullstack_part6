import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}


const NewAnecdoteToDB = async (title) => {
    const randomID = (100000 * Math.random()).toFixed(0)
    const object = { content: title, id: randomID, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
  }

const AddLikeToAnecdote = async (id) => {
    const response = await axios.get(baseUrl)
    const data = response.data
    const anecdoteToLike = data.find(n => n.id === id)
    const changedAnecdote = { 
        ...anecdoteToLike, 
        votes: anecdoteToLike.votes + 1 
      }
    const likedAnecdotes =  data.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote )

    const response2 = await axios.put(baseUrl + "/" + id, changedAnecdote)
    return likedAnecdotes.sort((a, b) => b.votes - a.votes)

  }

export default { getAll, NewAnecdoteToDB, AddLikeToAnecdote }