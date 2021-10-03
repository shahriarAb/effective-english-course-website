import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 error</h1>
            <h3>Nothing found here...</h3>
            <div className="">
                <Link to="home">Home</Link>
                <Link onClick={() => window.history.back()}>Back</Link>
            </div>
        </div>
    );
};

export default NotFound;