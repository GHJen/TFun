import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
// import user from './user'
import model from './model'


const reducer = combineReducers({model})
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default store
// export * from './user'
export * from './model'

