import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { customerSay } from '../types/data'
import { CustomerSay } from './card'
import { useState } from 'react';

export default function Section_5() {
  const [cardSlide, setCardSlide] = useState<number>(0);

  const nextCardSlide = () => {
    if (cardSlide < customerSay.length - 3) {
      setCardSlide(cardSlide + 1);
    }
  };

  const prevCardSlide = () => {
    if (cardSlide > 0) {
      setCardSlide(cardSlide - 1);
    }
  };

  return (
    <div>
      <section className="p-4 mb-10 sm:mt-10 bg-gray-100">
          <div className=" md:max-w-7xl md:mx-auto sm:p-4 pb-10 pt-10 ">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                        What our Customers Say's
                    </h2>
                    <div className=" hidden  md:flex space-x-4 text-gray-600 text-xl">
                        <button onClick={prevCardSlide} className="bg-black text-white size-12 flex justify-center items-center rounded-lg">
                        <FaArrowLeft />
                        </button>
                        <button onClick={nextCardSlide} className="bg-gray-200 text-black size-12 flex justify-center items-center rounded-lg">
                        <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {customerSay.slice(cardSlide, cardSlide + 3).map((customer, index) => (
                    <CustomerSay key={index} {...customer} />
                ))}
                </div>
          </div>
        </section>
    </div>
  )
}
