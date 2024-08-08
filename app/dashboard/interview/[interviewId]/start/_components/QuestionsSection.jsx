import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

const QuestionsSection = ({ mockInterviewQuestion,activeQuestionIndex }) => {
    const textToSpeach=(text)=>{
        if('speechSynthesis' in window){
            const speech=new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        }
        else{
            alert('Your browser does not support text to speech conversion')
        }
    }
    return mockInterviewQuestion&&(
        <div className='p-5 border rounded-lg my-10'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => (
                    <h2 className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex==index&&'bg-slate-500 text-black'}`} key={index}>Question #{index + 1}</h2>
                ))}
              
            </div>
            <h2 className='my-5 text-md md:text-lg  '>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
            <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}/>

            <div className='border rounded-lg p-5 bg-yellow-300 border-yellow-500 mt-20'>
                <h2 className='flex gap-2 items-center text-black'>
                    <Lightbulb/>
                        <strong>Note:</strong>
                    
                </h2>
                <h2 className='text-sm text-black my-2'>Click on the Enable camera and microphone button to commence your AI assisted mock interview.You will be asked 5 questions that you can answer,followed by which you will be given a report on your performance</h2>
            </div>
        </div>
    );
};

export default QuestionsSection;
