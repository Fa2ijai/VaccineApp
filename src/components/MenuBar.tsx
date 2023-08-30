import Image from "next/image";
import TopMenu from "./TopMenu";

export default function MenuBar(){
    return(
        <div className="h-[70px] w-screen fixed top-0 left-50 right-0 z-20 flex flex-row-reverse bg-white border-b-2">
            <Image src='/img/vaccine-6592893_1280.png' alt="logo" 
            height={0} width={0} sizes="100vh" className="h-full w-auto"/>
            <TopMenu title="Booking" pageRef="/booking"/>
        </div> 
    );
}