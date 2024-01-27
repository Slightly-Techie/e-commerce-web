import signature from "../assets/images/signature.png";
import Text from "../components/Text";
import { TextSize } from "../types";

const HomePage = () => {
  return (
    <div className="relative text-white bg-[url(assets/images/space-bg.png)] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="max-w-screen-xl px-[40px] lg:px-[60px] mx-auto grid grid-cols-2 min-h-screen items-center">
        <div className="space-y-12 ">
          <h1 className="text-5xl leading-[50px] md:text-8xl md:leading-[84px] font-anton uppercase">
            stay tuned
          </h1>
          <Text size={TextSize.large}>
            <span className="font-bold uppercase">Prepare to be amazed</span> -
            Do you know the wonders we dey cook for the top there? NBS heat, we
            go land soon so say you go see proper cookings
          </Text>
          <div>
            <img src={signature} alt="" className="" />
            <Text size={TextSize.large}>CEO, Dada Essilfie</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
