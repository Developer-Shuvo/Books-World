const SignIn = () => {
  return (
    <>
      <div className="pt-5 pb-8">
         <div className="text-center">
            <h1 class="text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">Login</h1>
            <p class="text-lg sm:text-xl mt-4">Sign in to access your account</p>
          </div>
        <div class=" max-w-[600px] mx-auto space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10">
          {/* User Name */}
          <div>
            <label class=""> Username </label>
            <input
              type="text"
              placeholder="Username"
              class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            />
          </div>
          {/* E-mail */}
          <div class="">
            <label class=""> Email Address </label>
            <input
              type="email"
              placeholder="Info@example.com"
              class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            />
          </div>
          {/* Password */}
          <div>
            <label class=""> Password </label>
            <input
              type="password"
              placeholder="******"
              class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            />
          </div>

          <div>
            <button
              type="button"
              class="mt-5 w-full rounded-md bg-lime-700 p-2 text-center font-semibold text-white outline-none focus:ring"
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
