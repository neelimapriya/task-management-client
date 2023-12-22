import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Todo = ({ data,refetch }) => {
  const { titles, priority, descriptions, deadlines } = data;
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


  return (
    <div>
      <div className="card bg-blue-200 shadow-xl">
        <div className="card-body">
          <h2 className=" text-xl uppercase font-semibold text-center">{titles}</h2>
          <p>{priority}</p>
          <p>{descriptions}</p>
          <p>{deadlines}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleMakeOngoing(data)} className="btn bg-blue-700 text-white">Make Ongoing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
