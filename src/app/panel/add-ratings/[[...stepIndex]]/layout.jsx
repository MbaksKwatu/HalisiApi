'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonPrimary from '@/components/shared/ButtonPrimary';
import ButtonSecondary from '@/components/shared/ButtonSecondary';
import { useSearchParams } from "next/navigation";

const CommonLayout = ({ children, params }) => {
  const router = useRouter();
  const index = Number(params.stepIndex) || 1;
  const searchParams = useSearchParams()
  const sliId = searchParams.get('id')

  const handleNext = () => {
    const nextIndex = index < 7 ? index + 1 : 1;
    router.push(`/panel/add-ratings/${nextIndex}?id=${sliId}`);
  };

  const handleBack = () => {
    const prevIndex = index > 1 ? index - 1 : 1;
    router.push(`/panel/add-ratings/${prevIndex}?id=${sliId}`);
  };

  const nextBtnText = index > 6 ? 'Complete' : 'Continue';

  return (
    <div className="nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
      <div className="space-y-4">
        <div>
          <p>Parachichi SLI Rating</p>
          <span className="text-2xl font-semibold">{index}</span>
          <span className="text-lg text-neutral-500 dark:text-neutral-400"> of 7</span>
        </div>

        <div className="listingSection__wrap">{children}</div>

        {index !== 7 && index !== 6 && ( 
          <div className="flex justify-end space-x-5">
            <ButtonSecondary onClick={handleBack}>Go back</ButtonSecondary>
            <ButtonPrimary onClick={handleNext}>{nextBtnText || 'Continue'}</ButtonPrimary>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonLayout;
