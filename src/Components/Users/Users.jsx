import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";

const Users = () => {
  const axiosPublic = useAxiosPublic();

  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allUsers");
      return res.data;
    },
  });
  console.log(user);

  return (
    <div className="min-h-screen ">
      <h2 className="pt-20 md:pt-52 text-center text-2xl font-semibold font-serif ">
        All users of our app.
      </h2>
      <div>
        <div className="overflow-x-auto mt-5 w-1/2 mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-green-700 text-xl">
                <th></th>
                <th>Name</th>
                <th>Occupation</th>
                
              </tr>
            </thead>
            <tbody>
                {
                    user?.map((data,i) =><tr key={data._id}>
                        <th>{i+1}</th>
                        <td className="uppercase">{data?.name}</td>
                        <td>{data?.occupation}</td>
                       
                      </tr>)
                }
             
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
