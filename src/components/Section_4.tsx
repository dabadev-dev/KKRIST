import { Link } from "react-router-dom";

export default function Section_4() {
  

  return (
    <div>
      <section className="max-w-7xl mx-auto space-y-10 flex flex-col md:flex-row items-center justify-between overflow-hidden ">
          <div className="space-y-4 md:w-1/2">
                <h1 className="text-2xl font-semibold">Deal of the Month</h1>
                <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters
                </p>
                <div className="flex space-x-4 ">
                <div className="border border-gray-300 bg-white text-black px-2 py-2 rounded-md hover:bg-gray-200 text-center">
                    <span className="font-bold text-2xl">120</span>
                    <p className="font-semibold">Days</p>
                </div>
                <div className="border border-gray-300 bg-white text-black px-2 py-2 rounded-md hover:bg-gray-200 text-center">
                    <span className="font-bold text-2xl">18</span>
                    <p className="font-semibold">Hours</p>
                </div>
                <div className="border border-gray-300 bg-white text-black px-2 py-2 rounded-md hover:bg-gray-200 text-center">
                    <span className="font-bold text-2xl">15</span>
                    <p className="font-semibold">Mins</p>
                </div>
                <div className="border border-gray-300 bg-white text-black px-2 py-2 rounded-md hover:bg-gray-200 text-center">
                    <span className="font-bold text-2xl">10</span>
                    <p className="font-semibold">Secs</p>
                </div>
                </div>
                <Link to="product">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 cursor-pointer">
                {" "}
                View All Products →
                </button>
                </Link>
            </div>
            <div className="w-full md:w-1/2 flex md:justify-end items-center">
                <img
                className="w-full max-w-md object-cover rounded-lg"
                src="images/image2.png"
                alt="Deal of the Month"
                />
          </div>
        </section>
    </div>
  )
}
