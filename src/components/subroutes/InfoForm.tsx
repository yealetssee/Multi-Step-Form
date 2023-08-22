import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type FormData = {
  name: string;
  password: string;
  email: string;
  phone: string;
};

const InfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  const handleNextStep = async () => {
    if (isValid) {
      navigate("/plan");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>
        <span className=" font-bold text-sky-950 text-4xl">Personal info</span>
        <span className="text-base block text-slate-500 mt-4">
          Please provide your name, email address, and phone number.
        </span>
      </h1>

      <div className="inputs mt-10 flex flex-col gap-8">
        <div className="w-full">
          <div className="flex w-full justify-between">
            <label
              htmlFor="name"
              className="capitalize text-sky-900 text-base font-medium"
            >
              name
            </label>
            {errors.name && (
              <p className="text text-red-500 font-bold">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="w-full px-4 p-1 mt-2  border h-14 rounded-lg border-neutral-300 focus-within:border-sky-800 focus-within:border-2">
            <input
              className=" text-xl w-full h-full border-0  font-bold text-sky-900 outline-none  "
              id="name"
              type="text"
              placeholder="e.g Stephen King"
              {...register("name", { required: "This field is required" })}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <label
              htmlFor="password"
              className="capitalize text-sky-900 text-base font-medium"
            >
              password
            </label>
            {errors.password && (
              <p className="text text-red-500 font-bold">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="w-full px-4 py-1 mt-2  border h-14 rounded-lg border-neutral-300 focus-within:border-sky-800 focus-within:border-2">
            <input
              className=" text-xl w-full h-full border-0 outline-none text-sky-900 font-bold  "
              id="password"
              type="password"
              placeholder="must contain at least 7 characters"
              {...register("password", {
                required: "this field is required",
                minLength: {
                  value: 7,
                  message: "Password must contain at least 7 characters",
                },
              })}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <label
              htmlFor="email"
              className="capitalize text-sky-900 text-base font-medium"
            >
              email address
            </label>
            {errors.email && (
              <p className="text text-red-500 font-bold">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full px-4 py-1 mt-2  border h-14 rounded-lg border-neutral-300 focus-within:border-sky-800 focus-within:border-2">
            <input
              className=" text-xl w-full h-full border-0 outline-none text-sky-900 font-bold "
              id="email"
              type="email"
              placeholder="e.g stephenking@lorem.com"
              {...register("email", { required: "This field is required" })}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <label
              htmlFor="phone"
              className="capitalize text-sky-900 text-base font-medium"
            >
              phone number
            </label>
            {errors.phone && (
              <p className="text text-red-500 font-bold">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="w-full px-4 py-1 mt-2  border h-14 rounded-lg border-neutral-300 focus-within:border-sky-800 focus-within:border-2 ">
            <input
              className=" text-xl w-full h-full border-0 outline-none text-sky-900 font-bold  "
              id="phone"
              type="number"
              placeholder="e.g +1 234 567 890"
              {...register("phone", { required: "This field is required" })}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-end">
        <button
          onClick={handleNextStep}
          className=" w-40 h-12 bg-sky-950 rounded-xl text-white text-lg font-medium flex items-center justify-center hover:bg-sky-800"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default InfoForm;
