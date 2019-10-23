import React from 'react';
import { createStore } from 'redux';

function ReduxDemo(props) {

    // Step 1. Store : reducer & state
    const initialState = 'Peace';
    const store = createStore(reducer, initialState);

    // Step 2. Reducer : state & action
    function reducer(state, action) {
        if (action.type === 'ATTACK') {
            const newState = action.payload;
            return newState;
        }
        else if (action.type === 'GREENATTACK') {
            const newState = action.payload;
            return newState;
        }
        else {
            return state;
        }
    }

    // Step 3. Subscribe
    store.subscribe(() => {
        console.log(`Store is now "${store.getState()}"`);
    });

    // Step 4. Dispatch action
    const action = { type: 'TYPE', payload: 'PAYLOAD' };
    store.dispatch(action);    
    store.dispatch({ type: 'ATTACK', payload: 'Iron Man' });
    store.dispatch({ type: 'GREENATTACK', payload: 'Hulk' });



    return (
        <div>
            <h2>Redux Fundamentals</h2>
            <h3 style={{color: '#7067CF'}}>See the console log</h3>
        </div>
    );
}

export default ReduxDemo;