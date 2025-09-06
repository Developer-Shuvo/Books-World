import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👁 Eye Icons

const SignUp = () => {
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white text-gray-900 pt-5 pb-8">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">
          Sign Up
        </h1>
        <p className="text-lg sm:text-xl mt-4">
          Sign Up For New Experience of Books World
        </p>
      </div>

      <div className="max-w-[600px] mx-auto mt-10 space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100">
        <form>
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              required
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              required
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              required
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
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

          {/* Country */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Country</label>
            <select
              id="country"
              required
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring cursor-pointer"
            >
              <option value="">Select Country</option>
              <option value="BD">Bangladesh</option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="PK">Pakistan</option>
              <option value="NP">Nepal</option>
              <option value="LK">Sri Lanka</option>
              <option value="MM">Myanmar</option>
            </select>
          </div>

          {/* Terms & Condition */}
          <div className="flex items-start mt-3">
            <input
              type="checkbox"
              name="accept"
              className="mt-1 mr-2"
              required
            />
            <p className="text-gray-800 text-sm">
              I accept the
              <Link
                to="/"
                className="mx-1 cursor-pointer text-blue-500 underline"
              >
                terms of use
              </Link>
              and
              <Link
                to="/"
                className="ml-1 cursor-pointer text-blue-500 underline"
              >
                privacy policy
              </Link>
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-lime-700 px-5 py-2 font-semibold text-white outline-none focus:ring"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
