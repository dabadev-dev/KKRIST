import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className= "w-full">
      <section className="flex flex-col gap-4 p-8">
            <h2 className="text-3xl font-bold">Welcome</h2>
            <p className="text-gray-600">Please login here</p>
            <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
            <input type="email" id="email" placeholder="daba@gmail.com" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
            <input type="password" id="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <div className="flex items-center">
                <input type="checkbox" name="remember" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-700 font-medium">Remember me</label>
                <span className="ml-auto text-sm text-gray-600"><Link to="/auth/forgot-password" className="text-gray-800 hover:text-gray-600 font-semibold">Forgot Password?</Link></span>
            </div>
            <Link to="/dash/profil">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 cursor-pointer">Login</button>
            </Link>
      </section>
    </div>
  )
}
