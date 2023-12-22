import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Profile = () => {
    const {user}=useAuth()
    const email=user?.email
    console.log(email)
    const axiosPublic= useAxiosPublic()

    const {data: profile = {}, isPending: loading, refetch}=useQuery({
        queryKey:['profile', email],
        queryFn:async()=>{
            const res =await axiosPublic.get(`/userInfo?email=${email}`)
            return res.data;
        }
    })
    console.log(profile)
    const { image, name, occupation}=profile


    return (
        <div className="p-5 text-center space-y-2">
            <img className="w-32 md:w-52 mx-auto rounded-lg" src={image} alt="" />
            <p className="text-xl font-semibold ">Name: {name}</p>
            <p className="text-lg font-semibold ">Email: {profile?.email}</p>
            <p className="text-lg font-semibold ">Occupation: {occupation}</p>
        </div>
    );
};

export default Profile;