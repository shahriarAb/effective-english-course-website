import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center mt-12">
            <h1 className="text-7xl">404 error</h1>
            <h3 className="text-red-600 mb-6 text-xl">Nothing found here...</h3>
            <div className="">
                <Link className="bg-purple-600 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 py-2 px-4 rounded-md text-white font-semibold shadow-md my-2" to="/home">Home</Link>
                <Link className="bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800-600 focus:ring-opacity-50 py-2 px-4 rounded-lg text-black font-semibold shadow-md my-2 ml-4" onClick={() => window.history.back()}>Back</Link>
            </div>
        </div>
    );
};

export default NotFound;