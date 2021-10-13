import React from 'react';

const Footer = () => {
    return (
        <div className="absolute bottom-0 bg-gray-900 bottom-0 w-full text-center p-6 text-gray-200">
            <div className="mb-6">
                <small>Be connected with us</small>
                <div className="text-2xl">
                    <i className="fab fa-facebook-square mr-4"></i>
                    <i className="fab fa-linkedin mr-4"></i>
                    <i className="fab fa-twitter-square mr-4"></i>
                    <i className="fab fa-instagram mr-4"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
            <p className="">Copyright &copy; 2021 mysterious-english. All right reserved. Presented by shahriarAb.</p>
        </div>
    );
};

export default Footer;