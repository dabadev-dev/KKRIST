import { FaStar } from 'react-icons/fa';
import type {PropsCard, PropsBestseller, PropsCustomer, PropsStory, PropsProduct} from '../types/type';  
import { Link } from 'react-router-dom';


export default function Card({ title, buttonText, image }: PropsCard) {
  return (
    <div className=''>
      <div
        className=" relative flex items-end p-4 h-120 w-full bg-center bg-no-repeat bg-cover rounded-lg"
        style={{ backgroundImage: `url(${image})` }}>
        <p className="text-black/20 absolute top-4 right-4 text-6xl font-black">{title}</p>
        <p className=" bg-white p-3 w-full rounded-xl text-center text-2xl font-bold text-gray-600">{buttonText}</p>
      </div>
    </div>
  );          
}

export function Bestseller({ title, title2, price, image }: PropsBestseller) {
  return (
    <div className=" flex flex-col bg-white overflow-hidden">
      <div className="h-120 w-full bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${image})` }}>
      </div>
      <div className="flex flex-col p-4 space-y-2">
        <p className="text-gray-600 font-black">{title}</p>
        <p className="text-gray-600 font-semibold">{title2}</p>
        <p className="text-xl font-semibold text-gray-600">{price}</p>
      </div>
    </div>
  );
}

export function CustomerSay({ image, name, feedback, subtitle }: PropsCustomer) {
  return (
    <div className=" bg-white p-6  space-y-2 rounded-lg">
      <div className='flex text-yellow-300'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
      <p className="text-gray-600">{feedback}</p>
      <div className='flex gap-4 items-center mt-6'>
          <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover" />
          <div className='gap-4'>
              <p className="text-lg font-bold">{name}</p>
              <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
      </div>
    </div>
  );
}

export function Story({ Image, icon, text, description }: PropsStory) {
  return (
    <div className="">
      <div className="w-full">
        <img src={Image} alt={text} className="h-120 w-full p-2 object-cover" />
      </div>
      <div className="flex flex-col gap-2 mb-4 mt-40">
        <div className='text-xl'>{icon}</div>
        <h3 className="text-xl font-bold">{text}</h3>
        <p className="text-gray-600 text-xl">{description}</p>
      </div>
    </div>
  );
}

export function Product({ title, title2, price, image }: PropsProduct) {
  return (
    <div className=" flex flex-col bg-white overflow-hidden">
      <Link to="/product/:id">
        <div className="h-120 w-full bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${image})` }}>
        </div>
      </Link>
      <div className="flex flex-col p-4 space-y-2">
        <p className="text-gray-600 font-black">{title}</p>
        <p className="text-gray-600 font-semibold">{title2}</p>
        <p className="text-xl font-semibold text-gray-600">{price}</p>
      </div>
    </div>
  );
}
