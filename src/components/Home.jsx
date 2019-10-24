import React, { useState } from 'react';
import Posts from './Posts';
import './Home.css';
import store from '../store';

function Home(props) {        
    const [message, setMessage] = useState('');

    store.subscribe(() => {           
        setMessage(store.getState().selectedPost.title);
    });

    return (
        <div className="Home">
            <h1>Redux Fundamentals</h1>
            <div className="message">
                <p>{message}</p>
            </div>
            <Posts />
        </div>
    );
}

export default Home;