export const ACTION_TYPE_SET_POSTS = 'SET_POSTS';
export const ACTION_TYPE_SELECT_POST = 'SELECT_POST';

export function GET_ACTION_SET_POSTS(payload) {
    const action = {
        type: ACTION_TYPE_SET_POSTS,
        payload
    }
    return action;
}

export function GET_ACTION_SELECT_POST(payload) {
    const action = {
        type: ACTION_TYPE_SELECT_POST,
        payload
    }
    return action;
}