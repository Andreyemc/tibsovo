import { useState } from "react";
import icon1 from "../assets/sixth/icons/1.svg";
import icon2 from "../assets/sixth/icons/2.svg";
import icon3 from "../assets/sixth/icons/3.svg";
import IconListItem from "./IconListItem";
import SafetyModal from "./SafetyModal";

function Safety() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const listItems = [
    {
      text: "Наиболее частыми нежелательными реакциями были утомляемость (43 %), \nтошнота (42 %), боль в животе (35 %), диарея (35 %), снижение аппетита (24 %), \nасцит (23 %), рвота (23 %), анемия (19 %) и сыпь (15 %).",
      icon: icon3, // 3.svg - первый кружочек
    },
    {
      text: "Наиболее частыми серьезными нежелательными реакциями были \nасцит (2 %), гипербилирубинемия (2 %) и холестатическая желтуха (2 %).",
      icon: icon1, // 1.svg - второй кружочек
    },
    {
      text: "Частота прекращения применения ивосидениба из-за развития нежелательных \nреакций составила 2 %. Нежелательными реакциями, приводившими \nк прекращению лечения, были асцит (1 %) и гипербилирубинемия (1 %).",
      icon: icon2, // 2.svg - третий кружочек
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-stretch justify-start bg-white py-10 px-4 md:px-6 2xl:px-0 md:py-12 md:pt-16 md:pb-8 overflow-hidden">
      {/* Главный контейнер */}
      <div className="w-full md:max-w-[1360px] mx-auto flex flex-col items-stretch justify-start gap-8 md:gap-0">
        {/* Внутренний контейнер с контентом */}
        <div className="w-full flex flex-col items-stretch justify-start gap-3 md:gap-0">
          {/* Заголовок секции */}
          <h2 className="text-[#61279E] text-xs md:text-base font-semibold leading-[120%] tracking-[0.36px] md:tracking-[0.48px] uppercase">
            Безопасность
          </h2>

          {/* Блок с основным заголовком и подзаголовком */}
          <div className="mt-0 md:mt-4 w-full max-w-[1243px] flex flex-col items-stretch justify-start gap-4 md:gap-0">
            {/* Основной заголовок */}
            <h3 className="text-[#61279E] text-2xl md:text-[40px] font-semibold leading-[120%] md:leading-[44px] tracking-[-0.48px] md:tracking-[-1.2px]">
              Терапия препаратом ТИБСОВО
              <span className="text-2xl md:text-[40px]">®</span>{" "}
              характеризуется удовлетворительной переносимостью.{" "}
                <br />
              Профиль безопасности ТИБСОВО
              <span className="text-2xl md:text-[40px]">®</span> хорошо
              изучен
            </h3>

            {/* Подзаголовок */}
            <p className="text-[#151518] text-sm md:text-xl font-normal leading-[140%] md:leading-[28px] mt-0 md:mt-6 whitespace-normal md:whitespace-pre-line break-words">
              Безопасность монотерапии ТИБСОВО® пациентов с местнораспространенной или метастатической холангиокарциномой с мутацией в гене IDH1 R132, ранее получавших лечение, как минимум, в рамках одной линии системной терапии:
            </p>
          </div>
        </div>

        {/* Блок со списком элементов */}
        <div className="relative mt-0 md:mt-12 px-4 lg:px-0 lg:ml-16 w-full mx-auto flex flex-col items-stretch justify-start overflow-visible">
          {listItems.map((item, index) => (
            <div key={index} className={index > 0 ? "mt-6 md:mt-12" : ""}>
              <IconListItem
                icon={item.icon}
                text={item.text}
                color="#87A9E2"
                gradientOpacity={0.8}
                textClassName="text-xs md:text-xl leading-[140%] md:leading-[28px] md:whitespace-pre-line"
                iconSize={72}
              />
            </div>
          ))}
        </div>

        {/* Блок с кнопкой */}
        <div className="mt-0 md:mt-12 w-full flex flex-col items-start justify-start">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center rounded-lg px-8 md:px-8 py-4 gap-2 overflow-hidden bg-[#E74C39] hover:opacity-90 transition-opacity text-sm md:text-base text-white font-semibold leading-[140%] md:leading-[1.4] w-full md:w-auto cursor-pointer"
          >
            <span className="text-white">
              Безопасность в исследовании ClarIDHy
            </span>
          </button>
        </div>
      </div>

      {/* Safety Modal */}
      <SafetyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default Safety;
