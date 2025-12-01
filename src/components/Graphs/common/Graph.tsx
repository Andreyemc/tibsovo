import graphImage from "../../../assets/graphs/1.svg";
import InfoIcon from "../../InfoIcon";

const CommonGraphsImage = () => {
  return (
    <div>
      <div className="flex flex-col px-4 md:px-8 pb-4 md:py-[17px]">
        <div className="flex flex-col relative">
          <div className="flex items-start justify-end">
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
        </div>
      </div>
      <div className="flex flex-col px-4 pt-8 md:px-8 md:pb-4 md:py-[30px]">
        <img src={graphImage} alt="Graph" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default CommonGraphsImage;
