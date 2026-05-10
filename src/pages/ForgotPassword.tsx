

export default function ForgotPassword() {
  return (
    <div>
        <section className="flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 h-80 md:h-auto">
            <img
            className=" object-cover w-full h-full"
            src="images/forgotpassword.jpg"
            alt="forgot password"
          />
        </div>
        <div className="flex flex-col gap-4 p-8 md:w-1/2">
            <h2 className="text-3xl font-bold">Forgot Password</h2>
            <p className="text-gray-600">Enter your registered email address. we'll send you a code to reset your password.</p>
            <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
            <input type="email" id="email" placeholder="daba@gmail.com" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 cursor-pointer">Send OTP</button>
        </div>
      </section>
    </div>
  )
}
