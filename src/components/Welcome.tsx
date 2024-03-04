import { cn } from "../lib/utils"

const Welcome = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "font-inter flex h-full flex-col bg-black text-[#D9D9D9]",
        className,
      )}
      {...props}
    >
      <div className="relative max-h-48 flex-1 bg-[url(/assets/onboarding_img.png)] bg-cover bg-top bg-no-repeat xl:max-h-64">
        <div
          style={{
            height: "100%",
            background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
          }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-center p-10 lg:pl-28">
        <img
          src="/assets/return_icon.png"
          className="mb-5 w-12 lg:mb-7 xl:w-20"
          alt="..."
        />

        <h2 className="mb-5 text-4xl font-semibold lg:mb-8 lg:max-w-sm lg:text-5xl lg:leading-[4rem] xl:mb-14 xl:max-w-md xl:text-6xl">
          Welcome to Slightly Techie Market
        </h2>

        <div className="relative w-64 border-l-4 border-[#D9D9D9] pl-8 pr-0 lg:py-2 xl:w-80 xl:py-8">
          <p className="text-md lg:text-lg xl:text-2xl">
            Where you can convert your points to anything except Macbooks
          </p>
          <span className="absolute bottom-0 right-5 block h-7 w-7 bg-[url(/assets/Close.png)] bg-contain bg-center bg-no-repeat xl:bottom-5 xl:h-10 xl:w-10"></span>
        </div>
      </div>

      <div className="border-t border-[#262626] px-5 py-5 text-center text-sm xl:py-8 xl:text-base">
        Sign up to join Slightly Techie at{" "}
        <a className="font-bold" href="https://app.slightlytechie.com">
          app.slightlytechie.com
        </a>
      </div>
    </div>
  )
}

export default Welcome
