import { cn } from "../lib/utils";

const Welcome = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("bg-black text-[#D9D9D9] h-full flex flex-col font-inter", {
        className,
      })}
      {...props}
    >
      <div className="max-h-48 xl:max-h-64 flex-1 bg-top bg-no-repeat bg-cover bg-[url(/assets/onboarding_img.png)] relative">
        <div
          style={{
            height: "100%",
            background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
          }}
        />
      </div>

      <div className="p-10 lg:pl-28 flex-1 flex flex-col justify-center">
        <img
          src="/public/assets/return_icon.png"
          className="mb-5 lg:mb-7 w-12 xl:w-20"
          alt="..."
        />

        <h2 className="text-4xl lg:text-5xl lg:leading-[4rem] xl:text-6xl lg:max-w-sm xl:max-w-md font-semibold mb-5 lg:mb-8 xl:mb-14">
          Welcome to Slightly Techie Market
        </h2>

        <div className="relative lg:py-2 xl:py-8 pl-8 pr-0 w-64 xl:w-80 border-l-4 border-[#D9D9D9]">
          <p className="text-md lg:text-lg xl:text-2xl">
            Where you can convert your points to anything except Macbooks
          </p>
          <span className="h-7 w-7 xl:h-10 xl:w-10 bottom-0 right-5 xl:bottom-5 absolute block bg-[url(/assets/Close.png)] bg-no-repeat bg-contain bg-center"></span>
        </div>
      </div>

      <div className="py-5 xl:py-8 px-5 text-center text-sm xl:text-base border-t border-[#262626]">
        Sign up to join Slightly Techie at{" "}
        <a className="font-bold" href="https://app.slightlytechie.com">
          app.slightlytechie.com
        </a>
      </div>
    </div>
  );
};

export default Welcome;
