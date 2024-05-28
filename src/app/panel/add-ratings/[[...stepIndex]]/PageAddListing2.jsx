"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setRating } from "@/redux/slices/ratingsSlice";


const PageAddListing2 = ({questions}) => {
  const dispatch = useDispatch();
  const ratings = useSelector((state) => state.ratings.ratings);
  const [localRatings, setLocalRatings] = useState({});


  useEffect(() => {
    const initialLocalRatings = questions.reduce((acc, question) => {
      acc[question.ID] = ratings[question.ID] || { score: 0, comment: '' };
      return acc;
    }, {});
    setLocalRatings(initialLocalRatings);
  }, [questions, ratings]);

  const handleLocalRatingChange = (id, score) => {
    setLocalRatings((prevRatings) => {
      const updatedRatings = { ...prevRatings, [id]: { ...prevRatings[id], score } };
      dispatch(setRating({ id, score, comment: updatedRatings[id].comment }));
      return updatedRatings;
    });
  };



  const handleCommentChange = (id, comment) => {
    setLocalRatings((prevRatings) => {
      const updatedRatings = { ...prevRatings, [id]: { ...prevRatings[id], comment } };
      dispatch(setRating({ id, score: updatedRatings[id].score, comment }));
      return updatedRatings;
    });
  };

  const renderStars = (score, questionID) => {
    return [...Array(4)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 cursor-pointer ${index < score ? 'text-yellow-400' : 'text-gray-300'}`}
        onClick={() => handleLocalRatingChange(questionID, index + 1)}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
      </svg>
    ));
  };


  return (
    <>
    <div className="flex py-4 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <h2 className="font-semibold">Parachici SLI Rating</h2>
          {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/> */}
        </div>

        <p className="mt-3 text-2xl font-semibold text-center text-gray-600 ">
          Rate the SLI profile
        </p>

        {questions?.map((question)=> (
          <div key={question.id} className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-800 "
              htmlFor="loggingPassword"
            >
             {question.description}
            </label>
            <div className="flex justify-center items-center gap-x-4 text-yellow-600 text-sm">
            {renderStars(localRatings[question.ID]?.score, question.ID)}
           
            </div>
           
          </div>

          <input
            
            id="comment"
            placeholder="comments(optional)"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            value={localRatings[question.ID]?.comment}
              onChange={(e) =>
                handleCommentChange(question.ID, e.target.value)
              }
          />
        </div>

        ))}


      </div>
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bg"
        />
      </div>
    </div>
     
    </>
  );
};

export default PageAddListing2;
