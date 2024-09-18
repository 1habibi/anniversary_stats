import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import { MediaTypes } from "./components/charts/MediaTypes";
import { MessagesByTime } from "./components/charts/MessagesByTime";
import { MostPopularEmojies } from "./components/charts/MostPopularEmojies";
import { MostPopularPhrases } from "./components/charts/MostPopularPhrases";
import { MostPopularStickers } from "./components/charts/MostPopularStickers";
import { MostPopularWords } from "./components/charts/MostPopularWords";
import UsersMessagesCount from "./components/charts/UsersMessagesCount";

function App() {
  const parallax = useRef<IParallax>(null!);
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const goToPage = (page: number) => {
    if (page >= 0 && page < 11) {
      parallax.current.scrollTo(page);
      setCurrentOffset(page);
    }
  };

  const handlePrev = () => {
    if (currentOffset > 0) {
      goToPage(currentOffset - 1);
    }
  };

  const handleNext = () => {
    if (currentOffset < 11) {
      goToPage(currentOffset + 1);
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(106.5deg,_rgba(255,215,185,0.91)_23%,_rgba(223,159,247,0.8)_93%)]" />

      <Parallax ref={parallax} pages={11}>
        <ParallaxLayer className="flex items-center flex-col justify-center px-4" offset={0} speed={1}>
          <h1 className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[45px] tracking-wider">Привет, Дашуня!</h1>
          <p className="text-white opacity-60">(управляй кнопочками внизу)</p>
        </ParallaxLayer>

        <ParallaxLayer className="flex items-center flex-col justify-center px-4" offset={1} speed={1}>
          <p className="mb-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[45px] tracking-wider">
            Мы вместе уже целых <span className="text-[#e11d47] font-black text-[55px]">34 месяца!!</span>
          </p>
          <p className="mb-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[35px] tracking-wider">И за это время накопилась боооооольшая история нашего диалога 🤫</p>
          <p className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[35px] tracking-wider">Посмотрим немного интересной статистики 👇</p>
        </ParallaxLayer>

        <ParallaxLayer className="flex items-center justify-center px-4" offset={2} speed={1}>
          <h2 className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[150px]">
            Всего сообщений - <span className="text-[#e11d47] font-black">320.900</span> <span className="text-[20px]">(🤯🤯🤯)</span>
          </h2>
        </ParallaxLayer>

        <ParallaxLayer className="flex flex-col px-4 py-8" offset={3} speed={1}>
          <h2 className="text-white font-bold text-[100px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Сколько смсок натыкали?..</h2>
          <div className="flex justify-around flex-grow overflow-hidden">
            <img className="min-w-[600px]" src="/gifs/printing_cat.webp" alt="printing_cat.webp" />
            <UsersMessagesCount />
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="flex flex-col px-4 py-8" offset={4} speed={1}>
          <h2 className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[100px] mb-4">Самые частоиспользуемые слова</h2>
          <div className="flex-grow overflow-hidden">
            <MostPopularWords />
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="flex flex-col px-4 py-8" offset={5} speed={1}>
          <h2 className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[100px] mb-4">Самые популярные смайлики</h2>
          <div className="flex-grow overflow-hidden">
            <MostPopularEmojies />
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="flex flex-col px-4 py-8" offset={6} speed={1}>
          <h2 className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[100px] mb-4">Типы сообщений</h2>
          <div className="flex-grow overflow-hidden">
            <MediaTypes />
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="flex flex-col px-4 py-8" offset={7} speed={1}>
          <h2 className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[100px] mb-4">В какое время мы общаемся чаще?</h2>
          <div className="flex-grow overflow-hidden">
            <MessagesByTime />
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="flex flex-col px-4 py-8" offset={8} speed={1}>
          <h2 className="text-white font-bold text-[100px] mb-4">Наши любимые стикеры</h2>
          <div className="h-full flex justify-around items-center">
            <MostPopularStickers></MostPopularStickers>
            <div className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-[40px] text-white font-bold flex flex-col gap-[50px]">
              <p>
                Средняя длина текстовых сообщений: <span className="text-[#e11d47] font-black">14.15 символов</span>
              </p>
              <p>
                Больше отправил смайликов Богданчик - <span className="text-[#e11d47] font-black">14184</span>
              </p>
              <p>
                Самая позитивная Дашуня - <span className="text-[#e11d47] font-black">0.006322464</span>
              </p>
              <p>
                Богданчик немножко грустнее - <span className="text-[#e11d47] font-black">0.004614746</span> <br /> <span className="opacity-[80%] text-[15px]">1 - супервеселый; 0 - дединсайд</span>
              </p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="flex flex-col px-4 py-8" offset={9} speed={1}>
          <h2 className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[100px] mb-4">Самые частые фразы</h2>
          <div className="flex-grow overflow-hidden">
            <MostPopularPhrases />
          </div>
        </ParallaxLayer>

        <ParallaxLayer className="flex items-center flex-col justify-center px-4" offset={10} speed={1}>
          <div className="pb-[50px]">
            <img src="/img/monkeys.jpg" alt="monkeys.jpg" />
          </div>
          <p className="text-center opacity-[85%] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-white font-bold text-[25px] tracking-wider">
            Я невероятно рад что познакомился и связал свою жизнь именно с тобой. Ты самая прекрасная девушка из всех, которых я когда-то встречал. Я очень ценю тебя и дорожу нашими отношенями. Так
            сильно жду момента, когда мы будем жить вместе и изучать этот мир вместе.. Мне невероятно комфортно рядом с тобой и проводить время вместе. Желаю нашим отношениям еще большего роста и с
            легкостью преодолеть все трудности, которые предстанут на нашем пути!
            <br className="mb-2" /> Я. Тебя. Люблю.
            <br className="mb-2" /> 💗
          </p>
        </ParallaxLayer>
      </Parallax>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
        <button onClick={handlePrev} disabled={currentOffset === 0} className="bg-white text-black px-4 py-2 rounded disabled:opacity-50">
          Назад
        </button>
        <button onClick={handleNext} disabled={currentOffset === 11} className="bg-white text-black px-4 py-2 rounded disabled:opacity-50">
          Вперёд
        </button>
      </div>
    </div>
  );
}

export default App;
