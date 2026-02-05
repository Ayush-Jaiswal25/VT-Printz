import { useState } from "react";

function LoginAndSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-56">
      <div className="relative w-[900px] h-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* SLIDING PANEL */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-[#DB2A7B] text-white flex flex-col items-center justify-center transition-transform duration-700 ease-in-out z-20 ${
            isLogin ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">
            {isLogin ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="mb-6 text-center px-6">
            {isLogin
              ? "Login with your personal info"
              : "Sign up and start your journey with us"}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-[#DB2A7B] transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>

        {/* FORMS CONTAINER */}
        <div className="flex w-full h-full">

          {/* LOGIN */}
          <div className="w-1/2 flex items-center justify-center">
            <form className="w-3/4">
              <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DB2A7B]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DB2A7B]"
              />
              <button className="w-full bg-[#DB2A7B] text-white py-3 rounded-lg hover:opacity-90 transition">
                Login
              </button>
            </form>
          </div>

          {/* SIGNUP */}
          <div className="w-1/2 flex items-center justify-center">
            <form className="w-3/4">
              <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DB2A7B]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DB2A7B]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DB2A7B]"
              />
              <button className="w-full bg-[#DB2A7B] text-white py-3 rounded-lg hover:opacity-90 transition">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginAndSignup;