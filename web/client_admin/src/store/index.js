import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducers'

// const logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
//   }

let store = createStore(rootReducer, applyMiddleware(thunk))    

// store.subscribe(() => console.log(store.getState()))

export default store