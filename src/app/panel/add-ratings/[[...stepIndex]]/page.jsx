'use client'
import React, {useEffect, useState} from "react";
import PageAddListing1 from "./PageAddListing1";
import PageAddListing2 from "./PageAddListing2";
import PageAddListing3 from "./PageAddListing3";
import PageAddListing4 from "./PageAddListing4";
import PageAddListing5 from "./PageAddListing5";
import PageAddListing6 from "./PageAddListing6";
import PageAddListing7 from "./PageAddListing7";

import { useDispatch, useSelector } from 'react-redux';
import { getCPS } from "@/redux/slices/sliceActions";

const splitQuestions = (questions) => {
  const questionGroups = [];
  for (let i = 0; i < questions.length; i += 3) {
    questionGroups.push(questions.slice(i, i + 3));
  }
  return questionGroups;
};


const Page = ({params,searchParams}) => {
  
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState({});
  console.log(ratings)

  const cps = useSelector(state => state.customerslice?.cps)

  const handleRatingChange = (questionId, score, comment) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [questionId]: { score, comment }
    }));
  };

  const handleSubmit = async () => {
    const formattedRatings = Object.keys(ratings).map((questionId) => ({
      cp: { ID: questionId },
      score: ratings[questionId].score,
      comment: ratings[questionId].comment
    }));
    console.log(formattedRatings)

    // const response = await fetch('/api/submit-ratings', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ratings: formattedRatings })
    // });

    // if (response.ok) {
    //   alert('Ratings submitted successfully');
    // } else {
    //   alert('Error submitting ratings');
    // }

  };

  
  useEffect(() => {
    dispatch(getCPS());
  }, []);

  useEffect(() => {
    const groupedQuestions = splitQuestions(cps);
    setQuestions(groupedQuestions);
    setLoading(false);
  }, [cps]);

  const stepIndex = Number(params.stepIndex);
  const questionSet = questions[stepIndex - 1] || [];

  let ContentComponent = PageAddListing1;
  switch (Number(params.stepIndex)) {
    case 1:
      ContentComponent = PageAddListing1;
      break;
    case 2:
      ContentComponent = PageAddListing2;
      break;
    case 3:
      ContentComponent = PageAddListing3;
      break;
    case 4:
      ContentComponent = PageAddListing4;
      break;
    case 5:
      ContentComponent = PageAddListing5;
      break;
    case 6:
      ContentComponent = PageAddListing6;
      break;
    case 7:
      ContentComponent = PageAddListing7;
      break;
    default:
      ContentComponent = PageAddListing1;
      break;
  }

  return <div>
         <ContentComponent questions={questionSet} onRatingChange={handleRatingChange} />
         {stepIndex === 7 && (
        <button onClick={handleSubmit}>Submit Ratings</button>
      )}
  </div> ;
};

export default Page;
