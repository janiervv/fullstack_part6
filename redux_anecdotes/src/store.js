import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './reducers/anecdoteReducer'

const store = createStore(anecdoteReducer,
    composeWithDevTools(applyMiddleware(thunk))
    )

export default store