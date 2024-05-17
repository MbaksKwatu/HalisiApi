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

  const cps = useSelector(state => state.customerslice?.cps)

  
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

  return <ContentComponent questions={questionSet} />;
};

export default Page;
