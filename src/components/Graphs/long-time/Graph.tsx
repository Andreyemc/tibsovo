import graphImage from "../../../assets/graphs/3.svg";
import InfoIcon from "../../InfoIcon";

const LongTimeGraphsImage = () => {
  return (
    <div>
      <div className="flex flex-col px-4 md:px-8 pb-4 md:py-[17px]">
        <div className="flex flex-col relative">
          <div className="flex items-start justify-between">
            <div className="text-[#61279E] text-[48px] md:text-[80px] font-semibold leading-[120%] md:leading-[110%] tracking-[-1.92px] md:tracking-[-4px]">
              92%
            </div>
            {/* Info Icon - visible on mobile only, positioned to the right */}
            <div className="md:hidden">
              <InfoIcon
                size={24}
                color="#9D9CA2"
                opacity={1}
                className="flex-shrink-0"
 text="Tibsovo. Инструкция по применению. Servier Pharmaceuticals LLC; 2023."
              />
            </div>
          </div>
          <div className="text-[#151518] text-sm md:text-base font-normal leading-[140%] md:leading-[22px] md:mt-1 md:max-w-[48%]">
            пациентов были живы через 2 года
          </div>
        </div>
      </div>
      {/* Graph Image */}
      <div className="flex flex-col px-4 pt-8 md:px-8 md:pb-4 md:py-[30px]">
        <img src={graphImage} alt="Graph" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default LongTimeGraphsImage;
