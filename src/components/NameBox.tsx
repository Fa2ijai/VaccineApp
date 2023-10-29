'use client'
import { TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";

export default function NameBox({onFnameChange,onLnameChange}:{onFnameChange:Function,onLnameChange:Function}){
    
    const [fname,setFname] = useState<String|null>(null)
    const [lname,setLname] = useState<String|null>(null)
    
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[550px] px-10 py-5
        flex flex-row justify-center">
            <div className="flex items-end space-x-5">
                <AccountCircle className="my-0.5" />
                <TextField required id="fname" label="First Name" variant="standard" onChange={(e)=>{setFname(e.target.value);onFnameChange(e.target.value)}}/>
                <TextField required id="lname" label="Last Name" variant="standard" onChange={(e)=>{setLname(e.target.value);onLnameChange(e.target.value)}}/>
            </div>
    </div>
);
}