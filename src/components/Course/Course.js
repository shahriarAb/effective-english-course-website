import React from 'react';
import Rating from 'react-rating';

const Course = (props) => {
    const { courseDetails, img, price, rating } = props.course;
    return (
        <div className="relative">
            <img style={{ filter: 'brightness(50%)' }} src={img} alt="courseImage" class="w-full h-80 object-cover rounded-md" />
            <div class="absolute py-2.5 bottom-32 text-3xl pl-4 font-bold inset-x-0 text-white hover:underline cursor-pointer">{courseDetails}</div>
            <div class="absolute py-2.5 bottom-24 text-xl pl-4 font-bold inset-x-0 text-gray-100 leading-4">Price: BDT{price}/-</div>
            <div class="absolute py-2.5 bottom-16 pl-4 inset-x-0 text-gray-100 leading-4">Rating: <Rating
                initialRating={rating}
                emptySymbol="far fa-star text-gray-300"
                fullSymbol="fas fa-star text-yellow-500"
                readonly
            ></Rating></div>
            <button
                className="absolute ml-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 py-2 px-4 rounded-lg text-white font-semibold shadow-md bottom-4"
            >Add Course</button>
        </div>
    );
};

export default Course;