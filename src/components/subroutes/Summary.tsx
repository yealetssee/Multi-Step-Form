import { useContext } from "react";
import { PlansContext } from "../../pages/Main";
import { Link, useNavigate } from "react-router-dom";
import { GoBack } from "..";

const Summary = () => {
  const { plan, price, payPer, addons, addonNames } = useContext(PlansContext);
  const navigate = useNavigate();
  return (
    <>
      <h1>
        <span className=" font-bold text-sky-950 text-4xl">Finishing up</span>
        <span className="text-base block text-slate-500 mt-4">
          Double-check everything looks OK before confirming.
        </span>
      </h1>
      <div className="mt-10 bg-slate-100 w-full py-5 px-6  rounded-lg">
        <div className="flex justify-between w-full items-center border-b border-slate-300 pb-7">
          <div>
            <p className="capitalize text-sky-950 font-bold text-lg">
              {plan}
              {`(${payPer})`}
            </p>

            <Link className=" underline text-slate-500" to={"/plan"}>
              Change
            </Link>
          </div>
          <span className="text-sky-950 font-bold text-lg">{`$${price[plan]}/${
            payPer === "monthly" ? "mo" : "yr"
          }`}</span>
        </div>
        {Object.keys(addons).map((addon) => {
          if (addons[addon]) {
            return (
              <div
                key={addon}
                className="flex justify-between w-full items-center mt-6"
              >
                <span className="text-slate-500 capitalize">
                  {addonNames[addon]}
                </span>
                <span className="text-sky-900 font-medium">
                  {`+${price[addon]}$/${payPer === "monthly" ? "mo" : "yr"}`}
                </span>
              </div>
            );
          }
        })}
      </div>
      <div className="py-5 px-6 flex justify-between items-center w-full">
        <span className="text-slate-500">
          Total {`${payPer === "monthly" ? "(per month)" : "(per year)"}`}
        </span>
        <span className="font-bold text-2xl text-sky-700">9euro</span>
      </div>
      <div className="mt-16 flex justify-between items-center">
        <GoBack to="/addons" />

        <button
          onClick={() => navigate("/addons")}
          className=" w-40 h-12 bg-sky-950 rounded-xl text-white text-lg font-medium flex items-center justify-center hover:bg-sky-800"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default Summary;
