import { useContext } from "react";
import { advanced, arcade, pro } from "../../assets/images";

import GoBack from "../shared/GoBack";
import { PlansContext } from "../../pages/Main";
import { useNavigate } from "react-router-dom";
import { Plan } from "../../types";

const SelectPlan = () => {
  const { plan, setPlan, setPayPer, isToggled, setIsToggled } =
    useContext(PlansContext);
  const handleChoosePlan = (plan: Plan) => {
    setPlan(plan);
  };

  const navigate = useNavigate();

  const handlePayPer = () => {
    setIsToggled(!isToggled);
    if (!isToggled) {
      setPayPer("yearly");
    } else {
      setPayPer("monthly");
    }
  };

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
      <div className="flex gap-3 h-40 w-full justify-between mt-10 ">
        <div
          className={`flex flex-col p-4  justify-between items-start border  rounded-lg w-full cursor-pointer  ${
            plan === "arcade"
              ? "bg-slate-100 border-sky-800"
              : "bg-transparent border-neutral-200"
          }`}
          onClick={() => handleChoosePlan("arcade")}
        >
          <img src={arcade} />
          <h3>
            <span className="font-medium text-sky-900">Arcade</span>
            <span className="block text-xs text-slate-500">
              {!isToggled ? "$9/mo" : "$90/yr"}
            </span>
            {isToggled && (
              <span className="block text-sky-900 text-xs">2 months free</span>
            )}
          </h3>
        </div>
        <div
          className={`flex flex-col p-4 justify-between items-start border border-neutral-200 rounded-lg w-full cursor-pointer ${
            plan === "advanced"
              ? "bg-slate-100 border-sky-800"
              : "bg-transparent border-neutral-200"
          }`}
          onClick={() => handleChoosePlan("advanced")}
        >
          <img src={advanced} />
          <h3>
            <span className="font-medium text-sky-900">Advanced</span>
            <span className="block text-xs text-slate-500">
              {!isToggled ? "$12/mo" : "$120/yr"}
            </span>
            {isToggled && (
              <span className="block text-sky-900 text-xs">2 months free</span>
            )}
          </h3>
        </div>
        <div
          className={`flex flex-col p-4 justify-between items-start border border-neutral-200 rounded-lg w-full cursor-pointer ${
            plan === "pro"
              ? "bg-slate-100 border-sky-800"
              : "bg-transparent border-neutral-200"
          }`}
          onClick={() => handleChoosePlan("pro")}
        >
          <img src={pro} />
          <h3>
            <span className="font-medium text-sky-900">Pro</span>
            <span className="block text-xs text-slate-500">
              {!isToggled ? "$15/mo" : "$150/yr"}
            </span>
            {isToggled && (
              <span className="block text-sky-900 text-xs">2 months free</span>
            )}
          </h3>
        </div>
      </div>
      <div className="w-full rounded-lg flex justify-center mt-6 bg-slate-100 py-4">
        <div className="h-full  flex  gap-4 items-center">
          <span
            className={`${
              !isToggled ? "text-sky-950" : "text-slate-500"
            } font-medium`}
          >
            Monthly
          </span>
          <div
            className={`relative  w-10 h-5 bg-sky-950   rounded-full transition duration-200 ease-in-out focus:bg-red-500 cursor-pointer`}
            onClick={handlePayPer}
          >
            <div
              className="w-3 h-3 left-1 absolute top-1/2 - rounded-full bg-white"
              style={{
                transform: `translateY(-50%) translateX(${
                  isToggled ? "20.5px" : "0px"
                })`,
              }}
            ></div>
          </div>
          <span
            className={`${
              isToggled ? "text-sky-950" : "text-slate-500"
            } font-medium`}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className="mt-16 flex justify-between items-center">
        <GoBack to="/" />

        <button
          onClick={() => navigate("/addons")}
          className=" w-40 h-12 bg-sky-950 rounded-xl text-white text-lg font-medium flex items-center justify-center hover:bg-sky-800"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;
