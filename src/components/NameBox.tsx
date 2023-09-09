import { TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function NameBox(){
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[550px] px-10 py-5
        flex flex-row justify-center">
            <div className="flex items-end space-x-5">
                <AccountCircle className="my-0.5" />
                <TextField required id="fname" label="First Name" variant="standard"/>
                <TextField required id="lname" label="Last Name" variant="standard" />
            </div>
    </div>
);
}