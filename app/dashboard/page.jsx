import { UserButton } from '@clerk/nextjs';
import React from 'react'
import ADDNEW from './_components/AddNew';
import InterviewList from './_components/InterviewList';

function Dashboard() {
  return (
    <div className='p-1'>


     <h2 className='font-bold text-3xl mt-4 text-blue-900'>Welcome to PrepGemini!</h2>
     <h2 className='text-gray-600 mt-2'>Click on Add New to attend a new session</h2>

     <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
      <ADDNEW/>
     </div>
{/* List of previous interviews taken */}
<InterviewList/>


    </div>
  )
}

export default Dashboard;