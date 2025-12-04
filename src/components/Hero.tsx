import heroImage from "../assets/hero.svg";
import heroImageMob from "../assets/hero-mob.svg";

function Hero() {
  const scrollToEfficiency = () => {
    const element = document.getElementById('efficiency');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    {
      value: "до 63%",
      description:
        "снижение риска прогрессирования заболевания <br /> или смерти (ОР, 0.37 [95% ДИ, 0.25-0.54]; P<0.0001)<sup>5,6</sup>",
      fullWidth: true,
    },
    {
      value: "32%",
      description: "12-мес ВБП на терапии \n ТИБСОВО®<sup>5,6</sup>",
      fullWidth: false,
    },
    {
      value: "22%",
      description: "6-мес ВБП на терапии \n ТИБСОВО®<sup>5,6</sup>",
      fullWidth: false,
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[594px] md:min-h-auto">
      {/* Background Image - Mobile */}
      <img
        src={heroImageMob}
        alt=""
        className="absolute top-[38px] max-h-[200px] right-0 h-auto object-contain pointer-events-none md:hidden"
        aria-hidden="true"
      />
      {/* Background Image - Desktop */}
      <img
        src={heroImage}
        alt=""
        className="absolute max-w-[35%] top-[0] right-0 h-auto object-contain pointer-events-none hidden md:block"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] pl-4 pr-4 mt-[56px] pt-[24px] pb-10 md:pl-5 md:pr-5 md:pt-[100px] lg:pl-10 lg:pr-10 lg:pt-[71px] 2xl:px-0">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-1 md:gap-1">
          <h1 className="max-w-[55%] md:max-w-[66%] text-[#61279E] text-[32px] md:text-4xl lg:text-[64px] font-semibold leading-[110%] tracking-[-0.96px] md:tracking-[-2.56px]">
            ТИБСОВО
            <span className="text-[32px] md:text-4xl lg:text-[64px]">®</span>
          </h1>
          <p className="text-[#61279E] text-[24px] md:text-[40px] font-semibold leading-[110%] max-w-full md:max-w-[63%] tracking-[-0.96px] pb-4">
            Ивосидениб: мощный ингибитор мутантного фермента
            изоцитратдегидрогеназы первого типа (IDH1)
          </p>
          <p className="text-[#151518] text-sm md:text-xl font-normal leading-[140%] max-w-full md:max-w-[675px]">
            Ивосидениб (ТИБСОВО®) является единственным препаратом таргетной
            терапии, направленной на мутацию IDH1, который включен в клинические
            рекомендации ESMO (I-A) и NCCN (категория 1) для пациентов с
            холангиокарциномой<sup>3,4</sup>.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-8 md:mt-10 lg:mt-[125px] flex flex-col gap-2 w-full md:max-w-[560px]">
          {/* First large card */}
          <h2 className="text-[#61279E] text-xs md:text-xl font-semibold leading-[120%] tracking-[-0.36px] md:tracking-[-0.48px] mb-2">
            Исследование ClarIDHy
          </h2>
          <div className="relative rounded-2xl md:rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 md:p-5 lg:p-5.5 flex flex-col justify-center items-start gap-2 md:gap-3">
            <div className="text-[#61279E] text-2xl md:text-[44px] font-semibold leading-[110%] tracking-[-0.72px] md:tracking-[-1.32px]">
              {stats[0].value}
            </div>
            <div
              className="text-[#151518] text-xs md:text-base font-normal leading-[140%]"
              dangerouslySetInnerHTML={{ __html: stats[0].description }}
            />

            {/* Info Icon */}
            <div 
              className="absolute right-5 top-4 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
              onClick={scrollToEfficiency}
            >
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00098 15V1"
                  stroke="#636466"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.002 9.99902L6.001 15L1 9.99902"
                  stroke="#636466"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Two smaller cards - always in row, 1/2 width each on mobile */}
          <div className="flex flex-row items-stretch gap-2">
            {stats.slice(1).map((stat, index) => (
              <div
                key={index}
                className="relative rounded-2xl md:rounded-[20px] bg-[rgba(224,219,244,0.4)] p-4 md:p-5 lg:p-5 flex flex-col justify-center items-start gap-2 md:gap-3 w-1/2 flex-1"
              >
                <div
                  className="text-[#61279E] text-2xl md:text-[44px] font-semibold leading-[110%] tracking-[-0.72px] md:tracking-[-1.32px]"
                  dangerouslySetInnerHTML={{ __html: stat.value }}
                />
                <div
                  className="text-[#151518] text-xs md:text-base font-normal leading-[140%]"
                  dangerouslySetInnerHTML={{ __html: stat.description }}
                />
                {/* Info Icon */}
                <div 
                  className="absolute right-5 top-4 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                  onClick={scrollToEfficiency}
                >
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00098 15V1"
                      stroke="#636466"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.002 9.99902L6.001 15L1 9.99902"
                      stroke="#636466"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="relative py-4 md:py-2 flex flex-col justify-center items-start gap-2 md:gap-3">
            <div className="text-[#151518] text-[10px] md:text-xs font-normal leading-[140%]">
              ОР — отношение рисков, ДИ — доверительный интервал, <br />
              ВБП — выживаемость без прогрессирования
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
