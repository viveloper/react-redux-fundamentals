import React from 'react';
import './Post.css';
import store from '../store';
import { GET_ACTION_SET_POSTS, GET_ACTION_SELECT_POST } from '../actions';

function Post(props) {
    const { post } = props;    

    const handleClickShowMessage = () => {        
        store.dispatch(GET_ACTION_SELECT_POST(post));
    };

    const handleClickRemove = () => {
        const copiedPosts = [];
        const posts = store.getState().posts;
        for (const index in posts) {
            const copiedPost = {...posts[index]};
            copiedPosts.push(copiedPost);
        }

        for (const index in copiedPosts) {
            if (copiedPosts[index].id === post.id) {
                copiedPosts.splice(index, 1);
                break;
            }
        }

        store.dispatch(GET_ACTION_SET_POSTS(copiedPosts));        
    };   

    return (
        <div key={post.id} className="Post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className="container">
                <button className="button" onClick={handleClickShowMessage}>Show Message</button>
                <button className="button" onClick={handleClickRemove}>Delete</button>
            </div>
        </div>
    );
}

export default Post;