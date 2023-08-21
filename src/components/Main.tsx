import { sidebarDesktop } from "../assets/images";
import { Link, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <main className=" h-auto bg-white p-4 flex w-[800px] rounded-lg">
      <div
        style={{ backgroundImage: `url(${sidebarDesktop})` }}
        className="h-full w-60 bg-cover bg-center p-5 rounded-lg "
      >
        <ul>
          <Link to={"/"}>
            <li className="flex gap-4  text-xl items-center ">
              <div className="w-10 h-10 flex items-center justify-center  border-white  border rounded-full text-center">
                1
              </div>{" "}
              <div className="">
                <span className="text-base text-slate-300">step1 </span>
                <h3 className="text-xl font-bold text-white -mt-2">
                  your info
                </h3>
              </div>
            </li>
          </Link>
          <Link to={"/plan"}>
            <li className="flex gap-4 text-xl mt-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center  border-white  border rounded-full text-center">
                2
              </div>{" "}
              <div className="">
                <span className="text-base text-slate-300">step2 </span>
                <h3 className="text-xl font-bold text-white -mt-2">
                  select plan
                </h3>
              </div>
            </li>
          </Link>
          <Link to={"/addons"}>
            <li className="flex gap-4 text-xl mt-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center   border-white  border rounded-full text-center">
                3
              </div>{" "}
              <div className="">
                <span className="text-base text-slate-300"> step3</span>
                <h3 className="text-xl font-bold text-white -mt-2">add-ons</h3>
              </div>
            </li>
          </Link>
          <Link to={"summary"}>
            <li className="flex gap-4 text-xl mt-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center  border-white  border rounded-full text-center">
                4
              </div>{" "}
              <div className="">
                <span className="text-base text-slate-300">step4 </span>
                <h3 className="text-xl font-bold text-white -mt-2">summary</h3>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<div>info</div>} />
          <Route path="/plan" element={<div>plan</div>} />
          <Route path="/addons" element={<div>addon</div>} />
          <Route path="/summary" element={<div>summary</div>} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
