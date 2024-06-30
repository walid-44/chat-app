const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-fill p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-600"> Chat App</span>
        </h1>

        <form action="">
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
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't Have an account ?"}
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2"> Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
