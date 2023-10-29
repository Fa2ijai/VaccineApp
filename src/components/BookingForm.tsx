'use client'
import NameBox from "./NameBox"
import SSNBox from "./SSNBox"
import LocationDate from "./LocationDate"
import dayjs, { Dayjs } from "dayjs"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { BookingItem } from "../../interface"
import { addReservation } from "@/redux/features/bookSlice"


export default function BookingForm(){
    const dispatch = useDispatch<AppDispatch>()

    const [SSN,setSSN] = useState<String|null>(null)
    const [fname,setFname] = useState<String|null>(null)
    const [lname,setLname] = useState<String|null>(null)
    const [reserveDate,setReserveDate] = useState<Dayjs|null> (null)
    const [location,setLocation] = useState<String> ('Chula')

    const makeReservation = () => {
        if(SSN&&fname&&lname&&reserveDate&&location){
            const item:BookingItem ={
                fname: fname,
                lname: lname,
                idCard: SSN,
                pickedHospital: location,
                appointmentDate: dayjs(reserveDate).format("YYYY/MM/DD")
            }
            dispatch(addReservation(item))
        } 
    }
    return(
        <>
            <div className="text-3xl font-medium font-serif">Booking</div>
            <div className="w-fit space-y-3">
                <div className="text-md text-gray-600 font-serif">First Name and Last Name</div>
                <NameBox onFnameChange={(value:String)=>setFname(value)} onLnameChange={(value:String)=>setLname(value)}/>
                <div className="text-md text-gray-600 font-serif">Thai national ID card</div>
                <SSNBox onSSNChange={(value:String)=>setSSN(value)}/>
                <div className="text-md text-gray-600 font-serif">Appointment Date and Location</div>
                <LocationDate onDateChange={(value:Dayjs)=>setReserveDate(value)} onLocationChange={(value:String)=>setLocation(value)}></LocationDate>
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" onClick={makeReservation}>Book Appointment</button>
        </>
    )
}