import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "@/components/BookingForm";

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
            <BookingForm></BookingForm>
        </main>
    );
}
