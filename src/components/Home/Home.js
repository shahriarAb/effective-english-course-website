import React, { useEffect, useState } from 'react';
import banner from '../../images/banner.png'
import Course from '../Course/Course';
import './Home.css'
import avatar1 from '../../images/avatar1.png';
import avatar2 from '../../images/avatar2.png';
import avatar3 from '../../images/avatar3.png';
import image1 from '../../images/image-1.jpg';
import image2 from '../../images/image-2.jpg';
import image3 from '../../images/image-3.jpg';
import image4 from '../../images/image-4.jpg';
import image5 from '../../images/image-5.jpg';
import image6 from '../../images/image-6.jpg';


const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./homedata.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div>
            {/* top title section */}
            <div className="flex justify-between mx-8 p-6 border-2 bg-gradient-to-r from-green-200 to-blue-50 border-green-400 rounded-lg">
                <div>
                    <div className="text-6xl mt-6">
                        <h1>LEARN <span className="text-green-700 font-bold">ENGLISH</span></h1>
                        <h1>IN EFFECTIVE WAY</h1>
                    </div>
                    <p className="mt-6 px-8 text-lg text-green-900"><i className="fas fa-quote-left"></i> Our courses offers you a group and personal lessons <br /> of English in effective and efficient way for all ages and <br />levels of knowledge.</p>
                </div>
                <img src={banner} alt="" />
            </div>

            {/* courses for you section */}
            <div className="mt-16 mx-8">
                {/* left section - home page for default courses  */}
                <h2 className="text-3xl font-bold text-green-700 mb-6">Courses for you</h2>
                <div className="grid grid-cols-2 gap-8">
                    <div className="ml-8 grid grid-cols-2 gap-6">
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                            ></Course>)
                        }
                    </div>

                    {/* right section - hon'ble instructors */}
                    <div className="mr-8 pt-12 text-center px-6 border-2 bg-gradient-to-b from-green-700 to-green-400 border-green-600 rounded-lg">
                        <h2 className="font-bold text-3xl text-white">Our Honourable Top<br /> Course Instructors</h2>
                        <div className="flex ml-12 mt-6">
                            <img className="rounded-full h-24 w-24 inline-block" src={avatar1} alt="" />
                            <div className="mt-4 ml-4 text-white">
                                <h2 className="text-2xl font-bold">Mrs. Jenifer Sherifs</h2>
                                <p className="text-lg font-light italic">Chief Executive Instructor</p>
                            </div>
                        </div>
                        <div className="flex ml-12 mt-6">
                            <img className="rounded-full h-24 w-24 inline-block" src={avatar2} alt="" />
                            <div className="mt-4 ml-4 text-white">
                                <h2 className="text-2xl font-bold">Mr. Johnson Robins</h2>
                                <p className="text-lg font-light italic">Senior Executive Instructor</p>
                            </div>
                        </div>
                        <div className="flex ml-12 mt-6">
                            <img className="rounded-full h-24 w-24 inline-block" src={avatar3} alt="" />
                            <div className="mt-4 ml-4 text-white">
                                <h2 className="text-2xl font-bold">Mrs. Salehi Khanam</h2>
                                <p className="text-lg font-light italic">Course Instructor</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-100 italic">Also we have about more or less 40 instructors. They are very friendly with students, also capable to make their lesson effective and interesting. </p>

                        {/* section of our address and contact */}
                        <div className="mt-8 text-lg font-light grid justify-items-end">
                            <p>Feel free to contact us at any need.</p>
                            <p><i class="fas fa-phone-square"></i> +880-1939-632694</p>
                            <p><i className="fas fa-map-marker-alt"></i> 123-street, Chawkbazar, Chattogram, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* gallery section */}
                {/* here all the images from internet */}
                <h2 className="text-3xl font-bold text-green-700 mt-16">Gallery</h2>
                <div className="m-8 grid grid-cols-3 gap-2 gallery">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />
                </div>

                {/* feedback/opinion giving section */}
                <h2 className="text-3xl font-bold text-green-700 mt-16">Feedback Hub</h2>
                <div className="text-center mt-6 mx-8 p-6 border-2 bg-gradient-to-r from-green-300 to-blue-100 border-green-400 rounded-lg">
                    <h2 className="text-3xl font-bold">Give your feedback</h2>
                    <p className="mt-8 text-2xl font-bold text-green-700">Your opinion matters</p>
                    <p className="mt-4">Email us your important opinion. So that, we can impove our services. :)</p>
                    <textarea
                        className="mt-12 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-2 shadow-inner shadow-mg rounded-md w-1/2 p-2"
                        placeholder='write here' />
                    <br />
                    <button
                        className="bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 py-2 px-4 rounded-lg text-white font-semibold shadow-md mt-4 mb-12"
                    >Send Mail</button>
                </div>
            </div>
        </div>
    );
};

export default Home;