import { Link } from "react-router-dom";

export default function Section_1() {
  return (
      <section className="relative w-full h-160 md:h-200 flex flex-col md:flex-row items-center md:justify-between bg-gray-200 rounded overflow-hidden mb-10">
        <div className=" flex flex-col justify-center items-center md:items-start p-4 md:ml-40 space-y-2 z-10 w-full ">
          <p className="font-semibold text-2xl">Classic Exclusive</p>
          <h2 className="text-6xl font-bold">Women's Collection</h2>
          <p className="text-gray-600 text-3xl font-semibold">UPTO 40% OFF</p>
          <Link className="z-10" to="/shop">
            <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-600 cursor-pointer">
              Shop Now →
            </button>
          </Link>
        </div>
        <div className=" w-full h-full ">
          <img
            className="absolute z-10 object-cover md:w-1/2 md:right-0 md:top-0"
            src="images/image-1.png"
            alt="image1"
          />
        </div>
          <div className="absolute z-0 right-0 bottom-0">
            <p className="text-white/30 text-[25rem] font-bold ">BEST</p>
          </div>
      </section>
  );
}
