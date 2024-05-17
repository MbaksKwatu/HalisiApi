import React from "react";
import { FC } from "react";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import ButtonSecondary from "@/components/shared/ButtonSecondary";
import { Route } from "@/routers/types";

export interface CommonLayoutProps {
  children: React.ReactNode;
  params: {
    stepIndex: string;
  };
}

const CommonLayout: FC<CommonLayoutProps> = ({ children, params }) => {
  const index = Number(params.stepIndex) || 1;
  const nextHref = (
    index < 10 ? `/panel/add-ratings/${index + 1}` : `/panel/add-ratings/${1}`
  ) as Route;
  const backtHref = (
    index > 1 ? `/panel/add-ratings/${index - 1}` : `/panel/add-ratings/${1}`
  ) as Route;
  const nextBtnText = index > 6 ? "Complete" : "Continue";
  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
    >
      <div className="space-y-4">
        <div>
        <p>Parachichi SLI Rating</p>
          <span className="text-2xl font-semibold">{index}</span>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400">
            of 7
          </span>
         
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap ">{children}</div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary href={backtHref}>Go back</ButtonSecondary>
          <ButtonPrimary href={nextHref}>
            {nextBtnText || "Continue"}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
