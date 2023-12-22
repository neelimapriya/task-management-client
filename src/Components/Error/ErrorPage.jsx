import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-black pt-20 min-h-screen">
            <h2 className="text-5xl text-red-600 text-center font-bold">404</h2>
            <p className="text-center text-white">Not Found</p>
            <div className="flex justify-center mt-5">
            <Link className="text-2xl bg-green-700 text-white p-3 rounded-lg cursor-pointer " to='/'>Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;