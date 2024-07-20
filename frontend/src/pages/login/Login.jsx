import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleLogin = async  (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error("Please Enter UserName Or Password");
    }
    await login(username, password);
    console.log(username, password);
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-fill p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-600"> Chat App</span>
        </h1>

        <form onSubmit={handleLogin}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter User Name"
              className="input input-bordered w-full h-10s"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-300">
                password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10s"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't Have an account ?"}
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
