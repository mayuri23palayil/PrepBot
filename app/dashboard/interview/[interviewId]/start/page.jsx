"use client"
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react"
import QuestionsSection from "./_components/QuestionsSection";
import RecordAns from "./_components/RecordAns";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function StartInterview({params}) {

  const [interviewData,setInterviewData]=useState();
  const[mockInterviewQuestion,setMockInterviewQuestion]=useState();
  const[activeQuestionIndex,setActiveQuestionIndex]=useState(0);

  useEffect(()=>{
    GetInterviewDetails();

  },[]);
  const GetInterviewDetails=async()=>{
    const result=await db.select().from(MockInterview)
    .where(eq(MockInterview.mockId,params.interviewId))

    const jsonMockResp=JSON.parse(result[0].jsonMockResp)
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);


    
  }
    
  return (
    <div> 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/*   Questions    */}

      < QuestionsSection mockInterviewQuestion={mockInterviewQuestion}
      activeQuestionIndex={activeQuestionIndex}
      />

       {/* Video/Audio recording   */}
       <RecordAns

mockInterviewQuestion={mockInterviewQuestion}
activeQuestionIndex={activeQuestionIndex}
interviewData={interviewData}
       
       />

    </div>

    <div className="flex gap-6 justify-end ">
     {activeQuestionIndex>0&& <Button className="bg-blue-900 text-white" onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
      {activeQuestionIndex!=mockInterviewQuestion?.length-1&&<Button  className=" text-white bg-blue-900 mb-2" onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
      {activeQuestionIndex==mockInterviewQuestion?.length-1&&<Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback" }><Button>End Session</Button> </Link>}
    </div>


    </div>
  )
}

export default StartInterview