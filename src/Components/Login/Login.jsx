
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import SocialLogin from "../Hook/SocialLogin";


const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location", location.state);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Logged In successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <div className=" text-black h-52">
        <h2 className="pt-32 flex justify-center items-center text-4xl font-serif font-semibold">
          My Account
        </h2>
      </div>
      <div className=" min-h-screen  ">
        <div className="hero-content ">
          <div className="card  w-full  shadow-2xl max-w-sm ">
            <form onSubmit={handleLogin} className="card-body text-black font-serif">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-serif text-xl">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input text-black input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-serif text-xl">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="text-xl font-semibold bg-blue-600 text-white hover:bg-green-600 cursor-pointer py-3 rounded-lg"
                />
              </div>
            </form>
            <p className="text-center flex justify-center pb-3 text-black font-serif text-lg">
              <small>
                New here ?{" "}
                <Link className="text-yellow-600 font-semibold " to="/register">
                  Create an account.
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;