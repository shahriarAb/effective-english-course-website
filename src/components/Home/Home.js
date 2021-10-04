import React, { useEffect, useState } from 'react';
import banner from '../../images/banner.png'
import Course from '../Course/Course';
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'
import avatar3 from '../../images/avatar3.png'

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./homedata.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
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
            <div className="mt-16 mx-8">
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
                        <div className="mt-8 text-lg font-light grid justify-items-end">
                            <p>Feel free to contact us at any need.</p>
                            <p><i class="fas fa-phone-square"></i> +880-1939-632694</p>
                            <p><i className="fas fa-map-marker-alt"></i> 123-street, Chawkbazar, Chattogram, Bangladesh</p>

                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-green-700 mt-16">Gallery</h2>
                <div className="mx-8 mt-8">
                    <div className="grid grid-cols-4 gap-4">
                        <div><img src="https://thumbs.dreamstime.com/b/group-diverse-young-students-standing-together-classroom-156212396.jpg" alt="" /></div>
                        <div className="..."><img src="https://www.thoughtco.com/thmb/ZX7i-LUzIsBb4LRkmOEckjut-E8=/3865x2576/filters:fill(auto,1)/teenage-students-in-classroom--141090063-5af498bc6bf0690036889c1b.jpg" alt="" /></div>
                        <div className="..."><img src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                        <div className="col-span-2"><img src="https://www.ift.org/-/media/community/students/iftsa_students_1200x667.jpg?h=717&w=1290&la=en&hash=C37370D7D0F01739827A136DC633EA1B" alt="" /></div>
                        <div className="..."><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbgw2peE-92RC_ZuAqwhmEHhPMIJpr9422A&usqp=CAU" alt="" /></div>
                        <div className="..."><img src="https://static-cse.canva.com/blob/558554/studyingtips1.jpg" alt="" /></div>
                        <div className=" ..."><img src="https://www.ectorcountyisd.org/cms/lib/TX50000506/Centricity/Domain/47/Staff%20PD.jpg" alt="" /></div>
                        <div className=" ..."><img src="https://www.ectorcountyisd.org/cms/lib/TX50000506/Centricity/Domain/47/Staff%20PD.jpg" alt="" /></div>
                    </div>
                </div>
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