import LocationDate from "@/components/LocationDate";
import NameBox from "@/components/NameBox";
import SSNBox from "@/components/SSNBox";


export default function Booking() {
    return(
        <main className="w-[100%] flex flex-col items-center space-y-5 mt-5">
            
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
