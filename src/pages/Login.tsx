export const Login = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full px-10 lg:px-32 xl:px-48">
          <img
            src="/assets/return_black.png"
            alt="return"
            className="h-8 w-8 lg:hidden"
          />
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold py-2">
            Sign in to your account
          </h1>
          <p className="text-sm lg:text-lg text-gray-400">
            Not registered?{" "}
            <span className="font-semibold text-black">create an account</span>
          </p>

          <form className="pt-10 lg:pt-12">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col">
                <label className="">Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="p-2 focus:outline-none focus:border-b-black border-b-2"
                />
              </div>

              <div className="flex flex-col">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="p-2 focus:outline-none focus:border-b-black border-b-2"
                />
              </div>
            </div>

            <div className="pt-5 xl:pt-10 flex items-center justify-between text-sm">
              <div className="flex gap-x-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>

              <div>Forgot password?</div>
            </div>

            <div className="pt-5 xl:pt-10">
              <div className="bg-black p-2 text-center text-white">
                <p>Sign In</p>
              </div>
            </div>

            <div className="pt-5 xl:pt-10 flex justify-between items-center xl:gap-x-3">
              <div className="border-b w-1/4 lg:w-1/3 xl:w-full"></div>

              <p className="text-sm w-2/4 lg:w-1/3 xl:w-full text-center">
                Or continue with
              </p>

              <div className="border-b w-1/4 lg:w-1/3 xl:w-full"></div>
            </div>

            <div className="pt-5 xl:pt-10 flex justify-between items-center gap-x-5">
              <div className="flex justify-center items-center gap-x-2 py-2 border w-full">
                <img src="/assets/Google.png" alt="" />
                <p className="text-sm">Google</p>
              </div>

              <div className="flex justify-center items-center gap-x-2 py-2 border w-full">
                <img src="/assets/GitHub.png" alt="" />
                <p className="text-sm">Github</p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:block relative h-full">
        <img
          src="/assets/onboarding_img.png"
          alt=""
          className="w-full h-[500px] xl:h-[650px]"
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
            opacity: 0.8,
          }}
        ></div>

        <div className="absolute top-0 left-0 right-0 pt-[140px] xl:pt-[200px] h-full">
          <div className="bg-black h-full flex flex-col justify-between text-white">
            <div className="pl-20 pt-10 xl:pt-20">
              <div className="">
                <img src="/assets/return_icon.png" alt="" className="h-14" />

                <div className="pt-5 xl:pt-10 xl:pr-72">
                  <h1 className="text-3xl xl:text-4xl font-semibold">
                    Welcome to Slightly Techie Market
                  </h1>
                </div>

                <div className="flex gap-x-3 xl:gap-x-5 pt-5 xl:pt-10 pr-80 xl:pr-[530px]">
                  <div className="border-2"></div>

                  <div className="">
                    <p className="text-xl xl:text-2xl">
                      Where you can convert your points to anything except
                      Macbooks
                    </p>
                    <img src="/assets/Close.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-end text-white py-10 border-t border-gray-500">
              <div className="w-full">
                <p className="text-center text-sm xl:text-base">
                  Sign up to join Slightly Techie at app.slightlytechie.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
