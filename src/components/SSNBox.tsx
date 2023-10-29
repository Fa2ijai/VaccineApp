'use client'
import { TextField } from "@mui/material";
import { useState } from "react";

export default function SSNBox({onSSNChange}:{onSSNChange:Function}){

    const [SSN,setSSN] = useState<String|null>(null)

    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[550px] px-10 py-5
        flex flex-row justify-center">
            <TextField required fullWidth  id="idcard" label="ID Card" variant="standard" onChange={(e)=>{setSSN(e.target.value);onSSNChange(e.target.value)}}/>
        </div>
);
}