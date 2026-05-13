import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Product } from "../components/card";
import { categorie, colorList, productLists, sizeLists } from "../types/data";
import { SlArrowRight, SlArrowUp } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";

export default function ProductPage() {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-16">
      <section className=" mb-10 mt-10 flex flex-col md:flex-row">
        <div className="w-1/4 flex flex-col gap-4 px-4">
          <p className="text-sm flex items-center gap-1 mb-4">
            Shop <SlArrowRight className=" px-0.5 cursor-pointer" /> All
            Products
          </p>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold">Product Categories</h2>
              <span className="cursor-pointer">
                <SlArrowUp />
              </span>
            </div>
            {categorie.map((cat, index) => (
              <div
                key={index}
                className="text-sm flex items-center justify-between gap-2 mb-2"
              >
                <label className="flex items-center gap-2 capitalize text-sm">
                  <input type="checkbox" name={cat} />
                  {cat}
                </label>
                <span className="cursor-pointer font-bold">
                  <FiPlus />
                </span>
              </div>
            ))}
          </div>
          <hr className="text-gray-300" />
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold">Filter by Price</h2>
              <span className="cursor-pointer">
                <SlArrowUp />
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Price: 0Fcfa - 2000Fcfa
            </p>
            <input type="range" name="" id="" className="w-full rounded-2xl" />
          </div>
          <hr className="text-gray-300" />
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold">Filter by Color</h2>
              <span className="cursor-pointer">
                <SlArrowUp />
              </span>
            </div>
            {colorList.map((color, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <div className=" flex gap-2">
                  <span className={`w-4 h-4 rounded-sm ${color.color}`}></span>
                  <label className="text-sm">{color.name}</label>
                </div>
                <span className="text-sm">({color.count})</span>
              </div>
            ))}
          </div>
          <hr className="text-gray-300" />
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold">Filter by Size</h2>
              <span className="cursor-pointer">
                <SlArrowUp />
              </span>
            </div>
            {sizeLists.map((size, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name={size.name} />
                  {size.name}
                </label>
                <span className="text-gray-500 text-sm">({size.count})</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4">
          <h2 className="text-2xl text-center font-bold mb-8 mt-10">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productLists.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
      <div className="">
        <div className="flex justify-end items-center gap-3 mb-10">
          <div>
            <FaArrowLeft />
          </div>
          <button className="bg-gray-200 p-2 text-black text-2xl cursor-pointer rounded size-12 flex items-center justify-center">
            {" "}
            1{" "}
          </button>
          <button className="bg-gray-200 p-2 text-black text-2xl cursor-pointer rounded size-12 flex items-center justify-center">
            {" "}
            2{" "}
          </button>
          <button className="bg-gray-200 p-2 text-black text-2xl cursor-pointer rounded size-12 flex items-center justify-center">
            {" "}
            3{" "}
          </button>
          <button className="bg-gray-200 p-2 text-black text-2xl cursor-pointer rounded size-12 flex items-center justify-center">
            {" "}
            4{" "}
          </button>
          <button className="bg-gray-200 p-2 text-black text-2xl cursor-pointer rounded size-12 flex items-center justify-center">
            {" "}
            5{" "}
          </button>
          <div>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
