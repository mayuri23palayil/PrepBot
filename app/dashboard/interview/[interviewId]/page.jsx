"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb,WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';


// Dynamically import the Webcam component
const WebcamComponent = dynamic(() => import('react-webcam'), { ssr: false });

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, [params.interviewId]);

  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };

  const handleUserMedia = () => {
    console.log('Webcam enabled');
  };

  const handleUserMediaError = (error) => {
    console.error('Webcam error', error);
    setWebCamEnabled(false);
  };

  return (
    <div className='my-10 flex justify-center flex-col items-center'>
      <h2 className='font-bold text-blue-900 text-3xl'>Let's Begin!</h2>
      <div className>
        {webCamEnabled ? (
          <WebcamComponent
            onUserMedia={handleUserMedia}
            onUserMediaError={handleUserMediaError}
            style={{
              height: 300,
              width: 300,
            }}
          />
        ) : (
          <>
            <WebcamIcon className='h-73 my-7 w-full p-15 bg-secondary rounded-lg border' />
            <Button className="bg-blue-900" onClick={() => setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
          </>
        )}
      </div>
      <div className='p-5 border rounded-lg border-blue-900  bg-black mt-8'>
      <h2 className='text-white'>  <Lightbulb/><strong>Note</strong> </h2>
      <h2 className='flex text-white gap-2 items-center'>Click on the Enable Web Cam and Microphone button to commence your AI assisted mock interview.You will be asked 5 questions that you can answer,followed by which you will be given a report on your performance</h2>
      </div>
      <div>
        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
        <Button className="mt-5 bg-blue-900">Start Interview</Button>
        </Link>
      </div>
      
    </div>
  );
}

export default Interview;
