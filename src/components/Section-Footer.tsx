import { FaPhoneVolume } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SectionFooter() {
  return (
    <div>
        <footer className="bg-gray-800 text-white">
            <div className=" md:px-16 py-10">
                <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-start gap-8">
                    <div className="flex flex-col gap-2 items-center md:items-start">
                        <Link to="/home"><img className="w-32 bg-white " src="images/logo.png" alt="Logo" /></Link>
                        <a href="#" className="flex hover:text-gray-400 gap-2"><FaPhoneVolume /> 77 777 77 77</a>
                        <a href="#" className="flex hover:text-gray-400 gap-2"><MdOutlineMailOutline /> contact@krist.com</a>
                        <a href="#" className="flex hover:text-gray-400 gap-2"><GrLocation /> 3891 Ranchivew Dr. Richardson, California 62639</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold">Information</h3>
                        <a href="#" className="hover:text-gray-400">My Account</a>
                        <a href="#" className="hover:text-gray-400">Login</a>
                        <a href="#" className="hover:text-gray-400">My Cart</a>
                        <a href="#" className="hover:text-gray-400">My Wishlist</a>
                        <a href="#" className="hover:text-gray-400">Checkout</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold">Service</h3>
                        <a href="#" className="hover:text-gray-400">About Us</a>
                        <a href="#" className="hover:text-gray-400">Careers</a>
                        <a href="#" className="hover:text-gray-400">Delivery Information</a>
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
                    </div>
                    <div className="flex flex-col gap-2 px-4">
                        <h3 className="text-lg font-bold">Subscribe</h3>
                        <p>Enter your email below to be the first to know about new collection and products launches.</p>
                        <div className="flex">
                            <input type="email" placeholder="  Your email  →" className="w-full px-4 py-2 border border-gray-600 rounded-l-md" />
                        </div>
                    </div>
                </div>
                <hr className="border-gray-600 my-4" />
                <div className="container mx-auto px-4">
                    <p className="text-center">
                    &copy; {new Date().getFullYear()} Krist All rights are reserved.
                    </p>
                </div>
            </div>
        </footer>
    </div>
  )
}
