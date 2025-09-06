import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👁 Eye Icons
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="pt-5 pb-8">
        <div className="text-center">
          <h1 class="text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">
            Login
          </h1>
          <p class="text-lg sm:text-xl mt-4">Sign in to access your account</p>
        </div>
        <div class=" max-w-[600px] mx-auto space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10">
          {/* E-mail */}
          <div class="">
            <label class="block mb-2 text-sm font-semibold">
              {" "}
              Email Address{" "}
            </label>
            <input
              type="email"
              placeholder="Info@example.com"
              class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            />
          </div>
          {/* Password with Eye Icon */}
          <div className="relative">
            <label className="block mb-2 text-sm font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"} // 👈 Show or Hide Password
              id="password"
              placeholder="Minimum 8 digit"
              required
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 pr-10 outline-none focus:ring"
            />
            {/* Eye Icon */}
            <span
              className="absolute right-3 top-[50%] translate-y-[30%] cursor-pointer text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {!showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <div className="">
            <button
              type="button"
              class="mt-5  rounded-md bg-lime-700 w-full py-2 font-semibold text-white outline-none focus:ring"
            >
              Get Started
            </button>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default SignIn;
