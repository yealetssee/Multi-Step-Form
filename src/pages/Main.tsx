import { Addons, InfoForm, SelectPlan, Summary, ThankYou } from "../components";
import { sidebarDesktop } from "../assets/images";
import { Link, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import {
  ContextType,
  PayPer,
  Plan,
  Price,
  addonNames,
  addons,
  priceList,
} from "../types";

export const PlansContext = createContext<ContextType>({
  plan: "arcade",
  payPer: "monthly",
  addons: {
    services: false,
    storage: false,
    profile: false,
  },
  totalPrice: 0,
  addonNames: {
    services: "Online services",
    storage: "Larger storage",
    profile: "Customizable profile",
  },
  price: {
    arcade: 9,
    advanced: 12,
    pro: 15,
    services: 1,
    storage: 2,
    profile: 2,
  },
  isToggled: false,
  setIsToggled: () => {},
  setAddons: () => {},
  setPlan: () => {},
  setPayPer: () => {},
  setTotalPrice: () => {},
});

const Main = () => {
  const [plan, setPlan] = useState<Plan>("arcade");
  const [payPer, setPayPer] = useState<PayPer>("monthly");
  const [addons, setAddons] = useState<addons>({
    services: false,
    storage: false,
    profile: false,
  });
  const addonNames: addonNames = {
    services: "Online services",
    storage: "Larger storage",
    profile: "Customizable profile",
  };
  const [isToggled, setIsToggled] = useState(false);
  const priceList: priceList = {
    arcade: { yearly: 90, monthly: 9 },
    advanced: { yearly: 120, monthly: 12 },
    pro: { yearly: 150, monthly: 15 },
    services: { yearly: 10, monthly: 1 },
    storage: { yearly: 20, monthly: 2 },
    profile: { yearly: 20, monthly: 2 },
  };
  const price = Object.keys(priceList).reduce((acc, key) => {
    acc[key] = priceList[key][payPer];
    return acc;
  }, {} as Price);

  // console.log(price);
  const calculateTotalPrice = () => {
    let total = price[plan];
    if (addons.services) total += price.services;
    if (addons.storage) total += price.storage;
    if (addons.profile) total += price.profile;
    return total;
  };
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [calculateTotalPrice()]);

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
        <PlansContext.Provider
          value={{
            plan,
            setPlan,
            payPer,
            setPayPer,
            addons,
            setAddons,
            isToggled,
            setIsToggled,
            price,
            addonNames,
            totalPrice,
            setTotalPrice,
          }}
        >
          <Routes>
            <Route path="/" element={<InfoForm />} />
            <Route path="/plan" element={<SelectPlan />} />
            <Route path="/addons" element={<Addons />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/thanks" element={<ThankYou />} />
          </Routes>
        </PlansContext.Provider>
      </div>
    </main>
  );
};

export default Main;
