import { advanced } from "../../assets/images";

const SelectPlan = () => {
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
      <div className="flex gap-3">
        <div className="flex flex-col p-4 justify-between items-start">
          <img src={advanced} />
        </div>
        <div className="flex flex-col p-4 justify-between items-start"></div>
        <div className="flex flex-col p-4 justify-between items-start"></div>
      </div>
    </div>
  );
};

export default SelectPlan;
