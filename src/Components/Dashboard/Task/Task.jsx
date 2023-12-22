import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const email = user?.email;
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // save user in database
    const userInfo = {
      titles: data.titles,
      priority: data.priority,
      descriptions: data.descriptions,
      email: email,
      type:'todo',
      deadlines: data.deadlines,
    };
    axiosPublic.post("/addTask", userInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Task Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/dashboard/allTAsk");
      }
    });
  };

  return (
    <div>
      <h2 className="text-center pt-10 text-2xl font-serif font-semibold">Add your task here</h2>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body text-black  rounded-lg "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-serif text-xl">
                Titles
              </span>
            </label>
            <input
              {...register("titles", { required: true })}
              name="titles"
              type="text"
              placeholder="title"
              className="input input-bordered"
            />
            {errors.titles && (
              <p className="text-red-500 drop-shadow-lg">Title is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-serif text-xl">
                Descriptions
              </span>
            </label>
            <input
              {...register("descriptions", { required: true })}
              name="descriptions"
              type="text"
              placeholder="Your descriptions"
              className="input input-bordered"
            />
            {errors.descriptions && (
              <p className="text-red-500 drop-shadow-lg">
                descriptions is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text  text-black font-serif text-xl">
                deadlines
              </span>
            </label>
            <input
              {...register("deadlines", { required: true })}
              name="deadlines"
              type="text"
              placeholder="deadlines"
              className="input input-bordered"
            />
            {errors.deadlines && (
              <p className="text-red-600">Deadlines is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-black font-serif text-xl">
                Priority
              </span>
            </label>
            <input
              {...register("priority", { required: true })}
              name="priority"
              type="text"
              placeholder="Low, moderate, high, etc."
              className="input input-bordered"
            />
            {errors.priority && (
              <p className="text-red-600">Priority is required</p>
            )}
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign Up"
              className="text-xl font-semibold bg-blue-600 hover:bg-green-600 text-white font-serif cursor-pointer py-3 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Task;
