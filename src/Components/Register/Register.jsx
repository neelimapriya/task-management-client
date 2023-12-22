
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { updateProfile } from "firebase/auth";
import useAuth from "../Hook/useAuth";
import useAxiosPublic from "../Hook/useAxiosPublic";
import SocialLogin from "../Hook/SocialLogin";

const Image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const Image_hosting_Api=`https://api.imgbb.com/1/upload?key=${Image_hosting_key}`
// console.log(Image_hosting_key)
// console.log(Image_hosting_Api)
const Register = () => {
  const { createUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();



  const {
    register,
    handleSubmit,
    reset ,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    console.log(data.photo[0]);
     // image upload to imgbb and then get an url
     const imageFile= {image: data?.photo[0]}
     const res=await axiosPublic.post(Image_hosting_Api, imageFile, {
         headers:{
             'Content-Type':'multipart/form-data'
         }
     })
     

    //  photoUrl
     console.log(res.data.data.display_url)
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // updateUserProfile(loggedUser,{data.name, data.photoURL:res.data?.data?.display_url} )
        updateProfile(loggedUser,{
          displayName:data.name,
          photoURL:res.data.data.display_url
        })
          .then(() => {
            // save user in database
            const userInfo = {
              name: data.name,
              email: data.email,
              occupation: data.occupation,
              image:res.data?.data?.display_url
            };
            axiosPublic.post("/users", userInfo).then((res) => {
                console.log(res.data)
            if (res.data.insertedId) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Account created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              reset()
              navigate("/");
            }
          });
      })
      .catch((error) => console.log(error));
    });
  };

  return (
    <div>
         <div className=" text-black h-52 ">
        <h2 className="pt-32 flex justify-center items-center text-4xl font-serif font-semibold">
          Create Your Account
        </h2>
      </div>
      <div className="hero pb-20">
        <div className="card  w-full  shadow-2xl max-w-sm ">
         
          <form onSubmit={handleSubmit(onSubmit)} className="card-body text-black  rounded-lg ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-serif text-xl">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name && <p className="text-red-500 drop-shadow-lg">Name is required</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-serif text-xl">Occupation</span>
              </label>
              <input
                {...register("occupation", { required: true })}
                name="occupation"
                type="text"
                placeholder="Your occupation"
                className="input input-bordered"
              />
              {errors.occupation && <p className="text-red-500 drop-shadow-lg">occupation is required</p>}
            </div>
            <div className="form-control">
               <label className="label">
                <span className="label-text  text-black font-serif text-xl">Upload your photo</span>
              </label>

            
               <input
              {...register("photo", {required:true})}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
              {errors.photo && (
                <p className="text-red-600">photo is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-black font-serif text-xl">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-black font-serif text-xl">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,})/,
                })}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less then 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one upper case character, one lower case
                  character and one special character.
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="text-xl font-semibold bg-blue-600 hover:bg-green-600 text-white font-serif cursor-pointer py-3 rounded-lg"
              />
            </div>
            <SocialLogin></SocialLogin>

          </form>
          <p className="text-center pb-3 text-black font-serif text-lg">
            <small>
              Already have an account ?{" "}
              <Link className="text-yellow-600 font-bold text-lg" to="/login">
               Please Login.
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;