import Scheme from "./Scheme";
import r1 from "../assets/roles/1.svg";
import r2 from "../assets/roles/2.svg";
import r3 from "../assets/roles/3.svg";
import IconListItem from "./IconListItem";
import effectImage from "../assets/effect.svg";

const MechanismOfAction = () => {
  const items = [
    {
      icon: r1,
      text: "mIDH1 способствует онкогенезу, катализируя продукцию 2-ГГ, что приводит \n к нарушению эпигенетической регуляции и клеточного метаболизма.",
    },
    {
      icon: r2,
      text: "Перед началом приема препарата ТИБСОВО® требуется подтвердить наличие \n у пациентов мутации в гене IDH1 R132 с использованием подходящего \n диагностического теста.",
    },
    {
      icon: r3,
      text: "ТИБСОВО® — мощный низкомолекулярный ингибитор мутантного фермента IDH1,\n являющийся первым представителем своего класса и целенаправленно \n воздействующий на все известные мутантные варианты IDH1",
    },
  ];
  return (
    <div className="w-full pt-8 pb-2 md:py-18 md:px-5 md:pb-14">
      <div
        className="px-2 md:px-0 mx-auto w-full md:max-w-[1360px] rounded-[16px] md:rounded-[20px] pt-8 md:pt-16 pb-2 md:pb-4 relative overflow-hidden bg-[#E74C39] bg-[right_top] bg-auto bg-no-repeat"
        style={{
          backgroundImage: `url("${effectImage}")`,
        }}
      >
        <div className="flex flex-col gap-8 md:gap-12 px-0 md:px-4">
          {/* Первый блок - Текст */}
          <div className="flex flex-col w-full px-4 md:px-8 pb-0 md:pb-8">
            {/* Верхний заголовок */}
            <div className="flex flex-col gap-3 md:gap-0">
              <h3 className="text-white text-xs md:text-base font-semibold leading-[120%] tracking-[0.36px] md:tracking-[0.48px] uppercase">
                Механизм действия
              </h3>

              {/* Контент */}
              <div className="flex flex-col mt-0 md:mt-4 gap-4 md:gap-0">
                {/* Большой заголовок */}
                <h2 className="text-white text-2xl md:text-[40px] font-semibold leading-[120%] md:leading-[110%] tracking-[-0.48px] md:tracking-[-1.2px]">
                  Роль мутации гена IDH1 при холангиокарциноме
                </h2>

                {/* Текст описания */}
                <p className="text-white text-sm md:text-xl font-normal leading-[140%] md:leading-[28px] mt-0 md:mt-6">
                  Мутации IDH1 диагностируются примерно в 10–20% случаев{" "}
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  внутрипеченочной хронической кавернозной ангиопатии (ХКА):
                </p>
              </div>
            </div>

            {/* Список пунктов */}
            <div className="flex flex-col gap-6 md:gap-10 mt-6 md:mt-12 w-full px-0 md:px-14 md:pr-0">
              {items.map((item, index) => (
                <IconListItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  color="#FFFFFF"
                  showGradient={true}
                  gradientOpacity={0.8}
                  textClassName="text-white text-xs md:text-xl leading-[140%] md:leading-[28px]"
                  boxShadow="0 0 20px 0 rgba(231, 76, 57, 0.08)"
                  iconSize={72}
                />
              ))}
            </div>
          </div>
          <Scheme />
        </div>
      </div>
    </div>
  );
};

export default MechanismOfAction;
