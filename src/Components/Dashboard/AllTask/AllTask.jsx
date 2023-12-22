import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Todo from "../TaskList/Todo";
import Ongoing from '../TaskList/Ongoing'
import Complete from "../TaskList/Complete";

const AllTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data: task = [],
    isPending: 
    refetch,
  } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getTask?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(task);

  const todo= task.filter(item=> item?.type === 'todo')
  console.log(todo)
  const ongoing= task.filter(item=> item?.type === 'ongoing')
  console.log(ongoing)
  const complete= task.filter(item=> item?.type === 'complete')
  console.log(complete)

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold font-serif text-center">
        Your TODO List
      </h2>

      <div className="flex flex-col md:flex-row text-center justify-evenly ">
        <div>
            <h2 className="text-2xl font-semibold underline mb-2">TODO List</h2>
            <div className="grid justify-center gap-2">
                {
                    todo?.map(data => <Todo key={data?._id} data={data}refetch={refetch}></Todo>)
                }
            </div>
        </div>
        <div>
            <h2 className="text-2xl font-semibold underline mb-2">Ongoing Task</h2>
            <div className="grid justify-center gap-2">
                {
                    ongoing?.map(data =><Ongoing key={data._id} data={data} refetch={refetch}></Ongoing>)
                }
            </div>
        </div>
        <div>
            <h2 className="text-2xl font-semibold underline mb-2"> Task Completed</h2>
            <div className="grid justify-center gap-2">
                {
                    complete?.map(data =><Complete key={data._id} data={data} refetch={refetch}></Complete>)
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
