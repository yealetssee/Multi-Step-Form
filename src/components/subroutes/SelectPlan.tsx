import { useState } from "react";
import { advanced, arcade, pro } from "../../assets/images";

const SelectPlan = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <h1>
        <span className=" font-bold text-sky-950 text-4xl">
          Select your plan
        </span>
        <span className="text-base block text-slate-500 mt-4">
          you have the option of monthly or yearly billing
        </span>
      </h1>
      <div className="flex gap-3 h-40 w-full justify-between mt-10">
        <div className="flex flex-col p-4  justify-between items-start border border-neutral-200 rounded-lg w-full cursor-pointer">
          <img src={arcade} />
          <h3>
            <span className="font-medium text-sky-900">Arcade</span>
            <span className="block text-xs text-slate-500">
              {!isClicked ? "$9/mo" : "$90/yr"}
            </span>
            {isClicked && (
              <span className="block text-sky-900 text-xs">2 months free</span>
            )}
          </h3>
        </div>
        <div className="flex flex-col p-4 justify-between items-start border border-neutral-200 rounded-lg w-full cursor-pointer">
          <img src={advanced} />
          <h3>
            <span className="font-medium text-sky-900">Advanced</span>
            <span className="block text-xs text-slate-500">
              {!isClicked ? "$12/mo" : "$120/yr"}
            </span>
            {isClicked && (
              <span className="block text-sky-900 text-xs">2 months free</span>
            )}
          </h3>
        </div>
        <div className="flex flex-col p-4 justify-between items-start border border-neutral-200 rounded-lg w-full cursor-pointer">
          <img src={pro} />
          <h3>
            <span className="font-medium text-sky-900">Pro</span>
            <span className="block text-xs text-slate-500">
              {!isClicked ? "$15/mo" : "$150/yr"}
            </span>
            {isClicked && (
              <span className="block text-sky-900 text-xs">2 months free</span>
            )}
          </h3>
        </div>
      </div>
      <div className="w-full rounded-lg flex justify-center mt-6 bg-slate-100 py-4">
        <div className="h-full  flex  gap-4 items-center">
          <span
            className={`${
              !isClicked ? "text-sky-950" : "text-slate-500"
            } font-medium`}
          >
            Monthly
          </span>
          <div
            className={`relative  w-10 h-5 bg-sky-950   rounded-full transition duration-200 ease-in-out focus:bg-red-500 cursor-pointer`}
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            <div
              className="w-3 h-3 left-1 absolute top-1/2 - rounded-full bg-white"
              style={{
                transform: `translateY(-50%) translateX(${
                  isClicked ? "20.5px" : "0px"
                })`,
              }}
            ></div>
          </div>
          <span
            className={`${
              isClicked ? "text-sky-950" : "text-slate-500"
            } font-medium`}
          >
            Yearly
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
