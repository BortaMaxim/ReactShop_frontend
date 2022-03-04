import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "./reducers/rootReducer";


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ &&
        // window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
)

export default store

