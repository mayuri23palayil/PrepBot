import { Button } from '@/components/ui/button';
import React from 'react';

function InterviewItemCard({ interview }) {
  const onStart = () => {
    window.location.href = `/dashboard/interview/${interview?.mockId}`;
  };

  const onFeedbackClick = () => {
    window.location.href = `/dashboard/interview/${interview?.mockId}/feedback`;
  };

  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-primary">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-700">
        {interview?.jobExperience} Years Of Experience
      </h2>
      <h2 className="text-xs text-gray-500">
        Created At: {interview?.createdAt}
      </h2>
      <div className="flex justify-between mt-2">
      <Button size="sm" className="w-full mr-2 bg-blue-900" onClick={onStart}>
  Start
</Button>
<Button size="sm" variant="outline" className="mr-2" onClick={onFeedbackClick}>
  Get Feedback
</Button>
      </div>
    </div>
  );
}

export default InterviewItemCard;
