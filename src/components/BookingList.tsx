"use client"

import { deleteReservation } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList(){
    const item = useAppSelector((state)=>state.reduxPersistedReducer.bookSlice.reservationItems)
    const dispatch = useDispatch<AppDispatch>()
    return(
        <div className="flex flex-col justify-center items-center h-[88vh]">
        {   
            (item.length!=0)?
            item.map((reservationItem:any)=>(
                
                <table className="table-auto border-separate border-spacing-x-8 border-spacing-y-2 bg-sky-100 rounded-md font-semibold py-5"><tbody>
                <tr><td className="text-2xl pb-5">Your Appointment</td></tr>
                <tr><td>First Name</td><td>{reservationItem.fname}</td></tr>
                <tr><td>Last Name</td><td>{reservationItem.lname}</td></tr>
                <tr><td>Citizen ID Card</td><td>{reservationItem.idCard}</td></tr>
                <tr><td>Your Picked Hospital</td><td>{reservationItem.pickedHospital}</td></tr>
                <tr><td>Appointment Date</td><td>{reservationItem.appointmentDate}</td></tr>
                <tr><td></td><td className="pt-5"><button className="rounded-md bg-sky-600 border border-cyan-600 hover:border-transparent hover:bg-indigo-600 px-3 py-2 shadow-sm text-white font-semibold w-full" onClick={()=>dispatch(deleteReservation(reservationItem))}>Delete</button></td></tr>
                </tbody>
                </table>

            )):
            <div className="text-2xl bg-sky-100 rounded-md font-semibold p-10">“No Vaccine Booking”</div>
        }
        </div>
    )
}