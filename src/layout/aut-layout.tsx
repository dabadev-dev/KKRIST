import { Outlet, useLocation } from "react-router-dom";


export default function AuthLayout() {
    const location = useLocation();
    const isLogin = location.pathname === "/auth/login";


  return (
    <div className='grid grid-cols-2 gap-5 h-screen'>
      <img src={isLogin ? "https://i.pinimg.com/736x/b4/f5/2d/b4f52d9e78a99c69c5afe081804e0022.jpg"
        :"https://i.pinimg.com/736x/09/39/4b/09394bb8a6b911d46990870a126d3e72.jpg"
      } alt="" />
      <div className=' flex items-center justify-center'>
        <Outlet/>
      </div>
    </div>
  )
}
