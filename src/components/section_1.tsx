
export default function Section_1() {
  return (
    <div>
      <section className="relative w-full h-160 md:h-140 flex flex-col md:flex-row items-center md:justify-between bg-gray-200 rounded overflow-hidden mb-10">
                <div className=" flex flex-col justify-center items-center md:items-start p-4 md:ml-40 space-y-2 z-10 w-full ">
                  <p className="font-semibold">Classic Exclusive</p>
                  <h2 className="text-3xl font-bold">Women's Collection</h2>
                  <p className="text-gray-600 font-semibold">UPTO 40% OFF</p>
                  <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-600 cursor-pointer">
                    {" "}
                    Shop Now →
                  </button>
                  <div className=" absolute w-full h-full right-0 top-0 flex justify-center items-center">
                    <p className="text-white/30 text-[12rem] font-bold ">BEST</p>
                  </div>
                </div>
                <div className=" w-full h-full ">
                  <img
                    className="absolute object-cover md:w-1/2 md:right-0 md:top-0"
                    src="images/image1.jpg"
                    alt="image1"
                  />
                </div>
              </section>
    </div>
  )
}
