import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
// import user from './user'
import model from './model'
import game from './game'


const reducer = combineReducers({model, game})
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default store
// export * from './user'
export * from './model'
export * from './game'

