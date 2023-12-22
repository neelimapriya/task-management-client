import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Complete = ({data,refetch}) => {

    const { titles, priority, descriptions, deadlines,_id } = data;
    const axiosPublic=useAxiosPublic()
  
    const handleDelete =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this task!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result)=>{
            if (result.isConfirmed) {
                axiosPublic.delete(`/task/${id}`).then((res) => {
                  // console.log(res.data)
                  if (res.data.deletedCount > 0) {
                    
                    Swal.fire({
                      title: "Deleted!",
                      text: `${titles} deleted`,
                      icon: "success",
                    });
                    refetch()
                  }
                });
              }
          })
    
      }
   

    return (
        <div>
             <div className="card bg-blue-200 shadow-xl">
        <div className="card-body">
          <h2 className=" text-xl uppercase font-semibold text-center">{titles}</h2>
          <p>{priority}</p>
          <p>{descriptions}</p>
          <p>{deadlines}</p>
          <div className="card-actions justify-end">
            <h2 className="p-2 btn rounded-lg text-white text-center  font-semibold bg-green-700">Task Complete</h2>
            <button  onClick={() => handleDelete(_id)} className="btn bg-red-700 text-white">Delete Task</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Complete;