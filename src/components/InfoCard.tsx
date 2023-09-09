import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function InfoCard({hospitalName,imgRef}:{hospitalName: string,imgRef:string}) { 
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
                </div>
            </div>
        </InteractiveCard>
    );

}
