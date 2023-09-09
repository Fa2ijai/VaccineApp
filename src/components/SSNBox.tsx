import { TextField } from "@mui/material";

export default function SSNBox(){
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[550px] px-10 py-5
        flex flex-row justify-center">
            <TextField required fullWidth  id="idcard" label="ID Card" variant="standard"/>
        </div>
);
}