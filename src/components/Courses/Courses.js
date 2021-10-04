import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <h2 className="ml-8 text-3xl font-bold text-green-700 mb-6">Courses for you</h2>
            <div className="lg:mx-16 grid lg:grid-cols-4 gap-6">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
            <div className="text-center mt-16">
                <p className="italic text-green-800">*We have some new course to release. This will updated soon. Stay tuned for update.</p>
            </div>
        </div>
    );
};

export default Courses;