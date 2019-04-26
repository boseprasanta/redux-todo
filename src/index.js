import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {createStore} from 'redux'
import counter from './reducers'
const store = createStore(counter)
const render = () => ReactDOM.render(<App
    value={store.getState()}
    inc={ ()=>{ store.dispatch({ type: 'INCREMENT' }) } }
    dsc={ ()=>{ store.dispatch({ type: 'DECREMENT' }) } }
/>, document.getElementById('root'));
render()
store.subscribe(() => {
    render()
})