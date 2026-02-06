import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginAndSignup() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  // Login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Signup
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // OTP
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  // Message
  const [message, setMessage] = useState("");

  /* ---------------- SIGNUP ---------------- */
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        signupData
      );

      setMessage(res.data.message);
      setShowOtp(true);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  /* ---------------- OTP VERIFY ---------------- */
  const verifyOtp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        {
          email: signupData.email,
          otp,
        }
      );

      setMessage(res.data.message);
      setShowOtp(false);

      // 👉 Switch to Login after OTP
      setIsLogin(true);

      // 👉 Prefill login email
      setLoginData((prev) => ({
        ...prev,
        email: signupData.email,
      }));
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP");
    }
  };

  /* ---------------- LOGIN ---------------- */
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData
      );

      setMessage(res.data.message);

      // 👉 OPTIONAL: save token if backend sends it
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // 👉 Redirect to Home page
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

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

        {/* FORMS */}
        <div className="flex w-full h-full">

          {/* LOGIN */}
          <div className="w-1/2 flex items-center justify-center">
            <form className="w-3/4" onSubmit={handleLogin}>
              <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-3 border rounded-lg"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-3 border rounded-lg"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />

              <button className="w-full bg-[#DB2A7B] text-white py-3 rounded-lg">
                Login
              </button>

              {message && (
                <p className="text-center text-sm text-red-600 mt-2">
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* SIGNUP */}
          <div className="w-1/2 flex items-center justify-center">
            <form className="w-3/4" onSubmit={handleSignup}>
              <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 px-4 py-3 border rounded-lg"
                value={signupData.name}
                onChange={(e) =>
                  setSignupData({ ...signupData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-3 border rounded-lg"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-3 border rounded-lg"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
              />

              <button className="w-full bg-[#DB2A7B] text-white py-3 rounded-lg">
                Sign Up
              </button>
            </form>
          </div>

          {/* OTP MODAL */}
          {showOtp && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-white">
              <form className="w-[360px] p-8 rounded-2xl shadow-xl text-center">
                <h2 className="text-3xl font-bold mb-4 text-green-600">
                  Verify OTP
                </h2>

                <input
                  type="text"
                  maxLength="6"
                  placeholder="Enter OTP"
                  className="w-full mb-4 px-4 py-3 border rounded-lg text-center"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  type="button"
                  onClick={verifyOtp}
                  className="w-full bg-green-600 text-white py-3 rounded-lg"
                >
                  Verify OTP
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginAndSignup;
