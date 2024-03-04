import signature from "../assets/images/signature.png"
import Text from "../components/Text"
import { TextSize } from "../types"

const HomePage = () => {
  return (
    <>
      <div className="relative min-h-screen bg-[url(assets/images/space-bg.png)] bg-cover bg-center bg-no-repeat text-white">
        <div className="mx-auto grid min-h-screen max-w-screen-xl grid-cols-2 items-center px-[40px] lg:px-[60px]">
          <div className="space-y-12 ">
            <h1 className="font-anton text-5xl uppercase leading-[50px] md:text-8xl md:leading-[84px]">
              stay tuned
            </h1>
            <Text size={TextSize.large}>
              <span className="font-bold uppercase">Prepare to be amazed</span>{" "}
              - Do you know the wonders we dey cook for the top there? NBS heat,
              we go land soon so say you go see proper cookings
            </Text>
            <div>
              <img src={signature} alt="" className="" />
              <Text size={TextSize.large}>CEO, Dada Essilfie</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
