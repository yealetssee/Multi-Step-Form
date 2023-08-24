import { useNavigate } from "react-router-dom";
import { AddonBox, GoBack } from "..";
import { useContext } from "react";
import { PlansContext } from "../../pages/Main";

const Addons = () => {
  const navigate = useNavigate();
  const { addons } = useContext(PlansContext);
  console.log(addons);

  return (
    <div>
      <h1>
        <span className=" font-bold text-sky-950 text-4xl">Pick add-ons</span>
        <span className="text-base block text-slate-500 mt-4">
          Add-ons help enhance your gaming experience
        </span>
      </h1>

      <div className="w-full mt-8 flex flex-col gap-5">
        <AddonBox
          id="services"
          labelH2="online services"
          labelH4="acces to multiplayer games"
          price={1}
          checked={addons.services}
        />
        <AddonBox
          id="storage"
          labelH2="larger storage"
          labelH4="extra 1TB of cloud save"
          price={2}
          checked={addons.storage}
        />
        <AddonBox
          id="profile"
          labelH2="customizable profile"
          labelH4="custom theme on your profile"
          price={2}
          checked={addons.profile}
        />
      </div>

      <div className="mt-16 flex justify-between items-center">
        <GoBack to={"/plan"} />

        <button
          onClick={() => navigate("/summary")}
          className=" w-40 h-12 bg-sky-950 rounded-xl text-white text-lg font-medium flex items-center justify-center hover:bg-sky-800"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Addons;
