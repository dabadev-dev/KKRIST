import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 h-80 md:h-auto">
            <Link to="/home" className="absolute top-10 left-10" ><img className="w-32 " src="images/logo.png" alt="Logo" /></Link>
            <img
            className=" object-cover w-full h-full"
            src="images/login.jpg"
            alt="login"
          />
        </div>
        <div className="flex flex-col gap-4 p-8 md:w-1/2">
            <h2 className="text-3xl font-bold">Welcome</h2>
            <p className="text-gray-600">Please login here</p>
            <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
            <input type="email" id="email" placeholder="daba@gmail.com" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
            <input type="password" id="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <div className="flex items-center">
                <input type="checkbox" name="remember" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-700 font-medium">Remember me</label>
                <span className="ml-auto text-sm text-gray-600"><Link to="/forgot-password" className="text-gray-800 hover:text-gray-600 font-semibold">Forgot Password?</Link></span>
            </div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 cursor-pointer">Login</button>
        </div>
      </section>
    </div>
  )
}
