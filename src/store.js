import { createStore } from 'redux';
import { ACTION_TYPE_SELECT_POST, ACTION_TYPE_SET_POSTS } from './actions';

// Step 1. Store : reducer & state
const initialState = {
    posts: [],
    selectedPost: {}
};
const store = createStore(reducer, initialState);

// Step 2. Reducer : state & action
function reducer(state, action) {
    if (action.type === ACTION_TYPE_SELECT_POST) {
        const newState = {
            posts: state.posts,
            selectedPost: action.payload
        };
        return newState;
    }
    else if (action.type === ACTION_TYPE_SET_POSTS) {
        const newState = {
            posts: action.payload,
            selectedPost: state.selectedPost
        };
        return newState;
    }
    else {
        return state;
    }
}

export default store;