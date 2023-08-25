import React, { useContext } from "react";
import "./Checkbox.css";
import { PlansContext } from "../pages/Main";

type AddonType = {
  id: string;
  labelH2: string;
  labelH4: string;
  price: number;
  checked: boolean;
};

const AddonBox: React.FC<AddonType> = ({
  id,
  labelH2,
  labelH4,
  price,
  checked,
}) => {
  const { payPer, setAddons } = useContext(PlansContext);
  const handleChange = (e: { target: { id: any; checked: any } }) => {
    const { id, checked } = e.target;
    setAddons((prev) => {
      return { ...prev, [id]: checked };
    });
  };

  return (
    <div
      className={`w-full h-20  border-solid border-2   rounded-lg flex items-center px-6 justify-between ${
        checked
          ? "border-sky-700 bg-slate-100"
          : "border-neutral-200 bg-transparent"
      } `}
    >
      <div className="flex gap-7 items-center">
        <input
          className="checkbox  appearance-none bg-white w-6 h-6 border border-slate-300 rounded-md checked:bg-sky-700"
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
        />

        <label htmlFor={id}>
          <h2 className="text-sky-950 font-bold text-lg capitalize">
            {labelH2}
          </h2>
          <h4 className=" text-slate-500 text-sm capitalize ">{labelH4}</h4>
        </label>
      </div>
      <span className="text-sky-700">
        +${price}/{payPer === "monthly" ? "mo" : "yr"}
      </span>
    </div>
  );
};

export default AddonBox;
