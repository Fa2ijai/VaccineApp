'use client'
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select,MenuItem } from "@mui/material";


export default function LocationDate(){
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[550px] px-10 py-5
        flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-whire"/>
            </LocalizationProvider>
            <Select variant='standard' name='lacation' className="h-[2em] w-[200px]">
                <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
                <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
                <MenuItem value='Thammasat '>Thammasat</MenuItem>
            </Select>
        </div>
         
    );
}