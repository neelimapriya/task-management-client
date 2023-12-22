
const Complete = ({data,refetch}) => {

    const { titles, priority, descriptions, deadlines } = data;
  
  
   

    return (
        <div>
             <div className="card bg-blue-200 shadow-xl">
        <div className="card-body">
          <h2 className=" text-xl uppercase font-semibold text-center">{titles}</h2>
          <p>{priority}</p>
          <p>{descriptions}</p>
          <p>{deadlines}</p>
          <div className="card-actions justify-end">
            <h2 className="p-2 rounded-lg text-white text-center  font-semibold bg-green-700">Task Complete</h2>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Complete;