import LocationDate from "@/components/LocationDate";
import NameBox from "@/components/NameBox";
import SSNBox from "@/components/SSNBox";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";


export default async function Booking() {
    const session = await getServerSession(authOptions);
    
    if(!session || !session.user.token) return null

    
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return(
        <main className="w-[100%] flex flex-col items-center space-y-5 mt-5">
            <div className="text-3xl font-medium">{profile.data.name} Profile</div>
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
            </table>
            <div className="text-3xl font-medium font-serif">Booking</div>
            <div className="w-fit space-y-3">
                <div className="text-md text-gray-600 font-serif">First Name and Last Name</div>
                <NameBox/>
                <div className="text-md text-gray-600 font-serif">Thai national ID card</div>
                <SSNBox/>
                <div className="text-md text-gray-600 font-serif">Appointment Date and Location</div>
                <LocationDate></LocationDate>
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">Book Appointment</button>
        </main>
    );
}
