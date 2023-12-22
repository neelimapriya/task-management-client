import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const Todo = ({ data,refetch }) => {
  const { titles, priority, descriptions, deadlines, _id } = data;
  const axiosPublic=useAxiosPublic()

  const handleMakeOngoing=(data)=>{
    axiosPublic.patch(`/ongoing/${data?._id}`).then((res)=>{
        console.log(res.data)
        if(res.data.modifiedCount >0){
            refetch()
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${titles} is ongoing now`,
                showConfirmButton: false,
                timer: 2000,
              });
        }
    })
  }

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
          <div className="card-actions ">
            <button onClick={()=>handleMakeOngoing(data)} className="btn bg-blue-700 text-white">Make Ongoing</button>
            <button  onClick={() => handleDelete(_id)} className="btn bg-red-700 text-white">Delete Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
