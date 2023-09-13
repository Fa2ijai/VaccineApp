import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

export default function InfoCard({hospitalName,imgRef,rating,OnRating}:{hospitalName: string,imgRef:string,rating:number,OnRating:Function }) { 
    return (
        <InteractiveCard>
            <div className='w-[250px] h-[300px] rounded-lg border-2 shadow-lg'>
                <div className='w-full h-4/6 relative'>
                    <Image src={imgRef} 
                    alt="InfoCard"
                    fill = {true}
                    className="object-contain rounded-t-lg"
                    />
                </div>
                <div className='h-2/6 w-full pl-5 pr-5 font-serif'>
                    <h2 className="text-base" >{hospitalName}</h2>
                    <Rating onChange={(e,newvalue)=>{e.stopPropagation(); OnRating(hospitalName,newvalue);rating=newvalue||0}} value={rating} precision={0.5}></Rating>
                </div>
               
            </div>
        </InteractiveCard>
    );

}
