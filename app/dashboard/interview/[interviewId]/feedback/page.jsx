"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


function Feedback({params}) {
    const [feedbackList, setFeedbackList] = useState([]);
    const router=useRouter();

    useEffect(() => {
        GetFeedback();
    }, [params.interviewId]); 

    const GetFeedback = async () => {
        try {
            const result = await db.select()
                .from(UserAnswer)
                .where(eq(UserAnswer.mockIdRef, params.interviewId))
                .orderBy(UserAnswer.id);
            console.log(result);
            setFeedbackList(result);
        } catch (error) {
            console.error("Failed to fetch feedback:", error);
        }
    }

    return (
        <div className='p-10'>
            <h2 className='text-3xl font-bold text-blue-900'> Congratulations! </h2>
            <h2 className='text-black font-bold text-xl mt-4'>Here is the feedback of your interview</h2>
            

            {feedbackList && feedbackList.map((item, index) => (
                <Collapsible key={index}  className='mt-7'>
                    <CollapsibleTrigger className="p-2 bg-secondary rounded-lg flex justify-between gap-7 my-2 text-left w-full">
                        {item.question} <ChevronsUpDown className='h-5 w-5'/>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                    <div className='flex flex-col gap-4 text-base'>
    <h2 className='text-red-600 p-2 border bg-red-100  rounded-lg'>
        <strong>Rating:</strong> {item.rating}
    </h2>
    <h2 className='p-2 border rounded-lg text-blue-800 bg-blue-200'>
        <strong>Your response:</strong> {item.userAns}
    </h2>
    <h2 className='p-2 border rounded-lg text-purple-900 bg-purple-300'>
        <strong>Correct response:</strong> {item.correctAns}
    </h2>
    <h2 className='p-2 border rounded-lg text-green-900 bg-green-200'>
        <strong>Feedback:</strong> {item.feedback}
    </h2>
</div>


                    </CollapsibleContent>
                </Collapsible>
            ))}
            <Button  className="text-white bg-blue-900 mt-4" onClick={()=>router.replace('/dashboard')}>Go Back</Button>
        </div>
    )
}

export default Feedback
