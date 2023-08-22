import { InfoForm, SelectPlan } from "../components";
import { sidebarDesktop } from "../assets/images";
import { Link, Route, Routes } from "react-router-dom";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export const PlansContext = createContext<{
  plan: Plan;
  setPlan: Dispatch<SetStateAction<Plan>>;
}>({ plan: "arcade", setPlan: () => {} });

type Plan = "arcade" | "advanced" | "pro";

const Main = () => {
  const [plan, setPlan] = useState<Plan>("arcade");
  return (
    <main className=" h-auto bg-white p-4 flex w-[1000px] rounded-lg  ">
      <div
        style={{ backgroundImage: `url(${sidebarDesktop})` }}
        className=" h-auto  bg-cover bg-center p-10 rounded-lg w-[500px]  "
      >
        <ul className="uppercase">
          <Link to={"/"}>
            <li className="flex gap-4  text-xl items-center ">
              <div className="w-10 h-10 flex items-center justify-center  border-white  border rounded-full text-center text-white">
                1
              </div>{" "}
              <div className="">
                <span className="text-base text-slate-300">step1 </span>
                <h3 className="text-lg font-medium text-white -mt-1 ">
                  your info
                </h3>
              </div>
            </li>
          </Link>
          <Link to={"/plan"}>
            <li className="flex gap-4 text-xl mt-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center  border-white  border rounded-full text-center text-white">
                2
              </div>{" "}
              <div className="">
                <span className="text-base text-slate-300">step2 </span>
                <h3 className="text-lg font-medium text-white -mt-1">
                  select plan
                </h3>
              </div>
            </li>
          </Link>
          <Link to={"/addons"}>
            <li className="flex gap-4 text-xl mt-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center   border-white  border rounded-full text-center text-white">
                3
              </div>{" "}
              <div className="">
                <span className="text-base text-slate-300"> step3</span>
                <h3 className="text-lg font-medium text-white -mt-1">
                  add-ons
                </h3>
              </div>
            </li>
          </Link>
          <Link to={"summary"}>
            <li className="flex gap-4 text-xl mt-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center  border-white  border rounded-full text-center text-white">
                4
              </div>{" "}
              <div className="">
                <span className="text-base text-slate-300">step4 </span>
                <h3 className="text-lg font-medium text-white -mt-1">
                  summary
                </h3>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="w-full px-24 pt-10">
        <PlansContext.Provider value={{ plan, setPlan }}>
          <Routes>
            <Route path="/" element={<InfoForm />} />
            <Route path="/plan" element={<SelectPlan />} />
            <Route path="/addons" element={<div>addon</div>} />
            <Route path="/summary" element={<div>summary</div>} />
          </Routes>
        </PlansContext.Provider>
      </div>
    </main>
  );
};

export default Main;
