'use client'
import React, {useEffect, useState} from "react";
import { RatingsProvider, useRatings } from './RatingsContext';
import PageAddListing1 from "./PageAddListing1";
import PageAddListing2 from "./PageAddListing2";
import PageAddListing3 from "./PageAddListing3";
import PageAddListing4 from "./PageAddListing4";
import PageAddListing5 from "./PageAddListing5";
import PageAddListing6 from "./PageAddListing6";
import PageAddListing7 from "./PageAddListing7";
import { useSearchParams } from "next/navigation";
import { ClipLoader, BarLoader } from 'react-spinners';
import SnackBar from '@/components/shared/SnackBar'
import { useRouter } from 'next/navigation'


import { useDispatch, useSelector } from 'react-redux';
import { getCPS, createRatings } from "@/redux/slices/sliceActions";


const splitQuestions = (questions) => {
  const questionGroups = [];
  for (let i = 0; i < questions.length; i += 3) {
    questionGroups.push(questions.slice(i, i + 3));
  }
  return questionGroups;
};


const PageContent = ({params}) => {
  const searchParams = useSearchParams()
  const sliId = searchParams.get('id')
  const dispatch = useDispatch();
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  // const [loading, setLoading] = useState(true);

  const ratings = useSelector((state) => state.ratings.ratings);
  const {loading, message} = useSelector(state => state.customer);



  const cps = useSelector(state => state.customer?.cps)
  const customer = useSelector(state => state.customer)

  const [show, setshow] = useState({
    open:false,
    text: '',
    mood: 'error'
  })



  useEffect(() => {
    dispatch(getCPS());
    if (message == "SLI rated successfully") {
      setshow({open:true, text: 'SLI rated successfully', mood: 'success'})
    }
  }, []);

  useEffect(() => {
    const groupedQuestions = splitQuestions(cps);
    setQuestions(groupedQuestions);
    // setLoading(false);
  }, [cps]);

  const stepIndex = Number(params.stepIndex);
  const questionSet = questions[stepIndex - 1] || [];

  const stepComponents = [
    PageAddListing1,
    PageAddListing2,
    PageAddListing3,
    PageAddListing4,
    PageAddListing5,
    PageAddListing6,
    PageAddListing7,
  ];

  const ContentComponent = stepComponents[stepIndex - 1] || PageAddListing1;



  return (
    <div>
      <ContentComponent questions={questionSet}  />
      {stepIndex === 6 && (
      <button onClick={() => handleSubmit(ratings,sliId,customer,dispatch,setshow,router)} className="mt-3 bg-cyan-400 px-4 py-2 rounded-lg">
        {loading?  ( <> <ClipLoader color='white' size={20}  /> Please wait </>) : "Submit Ratings"}
        </button>
    )}
    <SnackBar value={show.open} text={show.text} mood={show.mood}/>
  </div> 
  )
 
};

const handleSubmit = async (ratings,sliId,customer,dispatch,setshow,router) => {
  const ratingsArray = Object.keys(ratings).map((key) => {
    const rating = ratings[key];
    return {
      cp: {
        ID: Number(key)
      },
      comment: rating.comment,
      score: rating.score
    };
  });
  const sli = {
    "ID":sliId
  }
  const councilMemberArray = {
    "ID": customer?.user?.id
  }
  const details = {
    sli,
    councilMember:councilMemberArray,
    ratings:ratingsArray
  }
 
 
  dispatch(createRatings(details))
  .unwrap()
  .then((res)=>{
    setshow({open:true, text: 'SLI rated successfully', mood: 'success'})
    router.push('/panel/add-ratings/7') 
  })
  .catch((error)=>{
    setshow({open:true, text: 'Failed, please try again!', mood: 'error'})
    console.error(error)
  })
};

const Page = ({ params }) => (
  <RatingsProvider>
    <PageContent params={params} />
  </RatingsProvider>
);

export default Page;
