'use client'
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select,MenuItem } from "@mui/material";
import {Dayjs} from "dayjs";
import { useState } from "react";



export default function LocationDate({onDateChange,onLocationChange}:{onDateChange:Function,onLocationChange:Function}){
    
    const [reserveDate,setReserveDate] = useState<Dayjs|null> (null)
    const [location,setLocation] = useState<String> ('Chula')
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[550px] px-10 py-5
        flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-whire"
                value={reserveDate}
                onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
            <Select variant='standard' name='lacation' className="h-[2em] w-[200px]"
                value = {location} onChange={(e)=>{setLocation(e.target.value);onLocationChange(e.target.value)}}>
                <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
                <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
                <MenuItem value='Thammasat '>Thammasat</MenuItem>
            </Select>
        </div>
         
    );
}