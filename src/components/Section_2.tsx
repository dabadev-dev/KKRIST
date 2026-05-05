import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./card";
import { cardLists } from "../types/data";


export default function Section_2() {
  const [cardSlide, setCardSlide] = useState<number>(0);

  const nextCardSlide = () => {
    if (cardSlide < cardLists.length - 4) {
      setCardSlide(cardSlide + 1);
    }
  };

  const prevCardSlide = () => {
    if (cardSlide > 0) {
      setCardSlide(cardSlide - 1);
    }
  };

  return (
    <section className="max-w-7xl mx-auto space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-medium">Shop by categories</h2>
        <div className="flex items-center gap-5">
          <button
            onClick={prevCardSlide}
            className="bg-gray-200 p-2 text-black cursor-pointer rounded size-12 flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextCardSlide}
            className="bg-black p-2 text-white cursor-pointer rounded size-12 flex items-center justify-center "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardLists.slice(cardSlide, cardSlide + 4).map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}