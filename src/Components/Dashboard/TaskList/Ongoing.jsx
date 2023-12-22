import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Ongoing = ({ data,refetch }) => {
  const { titles, priority, descriptions, deadlines } = data;
  const axiosPublic=useAxiosPublic()

  const handleMakeComplete=(data)=>{
    axiosPublic.patch(`/complete/${data?._id}`).then((res)=>{
        console.log(res.data)
        if(res.data.modifiedCount >0){
            refetch()
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${titles} is completed now`,
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
          <p className="uppercase font-serif">priority: {priority}</p>
          <p>{descriptions}</p>
          <p className="text-sm">Deadline: {deadlines}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleMakeComplete(data)} className="btn bg-yellow-600 text-white">Make Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
