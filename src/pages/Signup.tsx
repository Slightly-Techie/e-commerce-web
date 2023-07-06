import { Link, useNavigate } from "react-router-dom"
import google from '../assets/Google.png'
import github from '../assets/GitHub.png'
import cartImage from '../assets/cart_image.png'
import close from '../assets/Close.png'
import responsiveCart from '../assets/responsiveCart.png'
import { useState } from "react"

const Signup = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<Boolean>(false)

    const handleOnSubmit = (e:any) =>{
        e.preventDefault();
        setLoading(true)

        try {
            setLoading(false)
            navigate("/homepage")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="flex w-full h-screen md:w-full md:flex md:items-center md:justify-center ">
        <div className="flex items-center justify-center bg-white flex-col w-1/2">
            <div className="md:hidden md:flex-start md:items-start md:justify-start">
                <img src={responsiveCart} className="item-start" />
            </div>
            <p className="font-bold text-[36px] leading-[43px] pb-3 font-inter">Create account</p>
            <p className="flex text-[18px] leading-[21.78px] font-inter-light">
                Already have an account? 
                <Link to="" className="cursor-pointer">
                    <span className="ml-2 font-bold">Sign In</span>
                </Link>
            </p>

            <form className="pt-10" onSubmit={handleOnSubmit}>
                <div className="flex flex-start flex-col">
                    <label className="text-[16px] leading-[19.36px] font-inter font-light">Username</label>
                    <input type="text" className="pt-2 border-b-2 w-full focus:outline-none placeholder:text-[12px] placeholder:leading-4 font-inter" placeholder="Enter your username" />
                </div>

                <div className="flex flex-start flex-col pt-5">
                    <label className="font-normal text-[16px] leading-[19.36px] font-inter">Email</label>
                    <input type="email" className="pt-2 border-b-2 w-full focus:outline-none placeholder:text-[12px] placeholder:leading-4 font-inter" placeholder="Enter your email" />
                </div>

                <div className="flex flex-start flex-col pt-5">
                    <label id="password" className="font-normal text-[16px] leading-[19.36px] font-inter">Password</label>
                    <input type="password" className="pt-2 border-b-2 w-full focus:outline-none placeholder:text-[12px] placeholder:leading-4 font-inter" placeholder="Enter your password" />
                    <small>Must be at least 8 characters.</small>
                </div>

                <button className="flex bg-black w-full mt-10 py-3 px-5 shadow-lg hover:translate-x-0.5 hover:translate-y-0.5">
                    {loading && (
                        <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                    <p className="text-white text-center mx-auto font-inter text-sm">Create Account</p>
                </button>

                <div className="flex items-center font-inter font-normal text-sm pt-5">
                    <hr className="w-[5rem]" />
                    <p className="px-2">Or Continue With</p>
                    <hr className="w-[5rem] "/>
                </div>

                <div className="flex justify-between pt-8">
                    <button className="flex px-[25px] py-2 bg-[#D9D9D9] border-black">
                        <img src={google} className="w-[26px] h-[22px] mr-2" />
                        <p className="font-inter font-normal">
                            Google
                        </p>
                    </button>

                    <button className="ml-5 flex px-[25px] py-2 bg-[#D9D9D9] border-black">
                        <img src={github} className="w-[26px] h-[22px] mr-2" />
                        <p className="font-inter font-normal">
                            GitHub
                        </p>
                    </button>
                </div>
            </form>
        </div>

        <div className="hidden lg:flex bg-stn h-[100vh] justify-end bg-no-repeat flex-col w-1/2 ">
            <div className="h-full backdrop-brightness-50">
                <div className="h-[20vh]"></div>
                
                <div className="h-[80vh] bg-black ">
                    <div className="ml-[140px]">
                        <div className="pt-16">
                            <img src={cartImage} className="w-[76px] h-[76px]" />

                            <div className="">
                                <p className="font-inter font-bold text-[#D9D9D9] text-[56px] leading-[67px] pb-5">
                                    Welcome to <br/> Slightly Techie <br/> Market.
                                </p>

                                <div className="border-l-[5px] ">
                                <p className="text-[#D9D9D9] py-2 px-5 ">
                                    Where you can convert <br/>your points to anything <br/> except Macbooks
                                </p>
                                <img src={close} className="ml-[150px]" />
                                </div>
                            </div>
                        </div>
                        <div className="pt-12 py-[6px]" >
                            <p className=" w-full text-[#D9D9D9] cursor-pointer">
                                Sign up to join Slightly Techie at  app.slightlytechie.com
                            </p>
                        </div>
                    </div>
                

                </div>
                
            </div>
        
        </div>
    </div>
  )
}

export default Signup