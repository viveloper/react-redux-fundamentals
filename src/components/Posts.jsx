import React, { useState, useEffect } from 'react';
import './Posts.css';
import Post from './Post';
import store from '../store';
import { GET_ACTION_SET_POSTS } from '../actions';

function Posts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    store.subscribe(() => {
        setPosts(store.getState().posts);
    });

    const handleUpdatePosts = () => {
        fetchPosts();
    }

    const postList = posts.map(post =>
        <Post key={post.id} post={post} />
    );

    return (
        <div className="Posts">
            <h2>POSTS</h2>
            <button className="button" onClick={handleUpdatePosts}>Update Posts</button>
            {postList}
        </div>
    );
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    store.dispatch(GET_ACTION_SET_POSTS(data.slice(0, 5)));
}

export default Posts;