'use client'

import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "../../public/hooks/useWindowListener";

export default function PromoteCard(){
    const [playing,setPlaying] = useState(true)
    useWindowListener('contextmenu',(e)=>{e.preventDefault()})
    return(
        <div className="w-[80%] shadow-lg rounded-lg mx-[10%] my-5  p-2 flex flex-row bg-teal-50">
        <VideoPlayer vdoSrc='/video/getvaccine.mp4' isPlaying={playing}></VideoPlayer>
        <div className="m-5 flex flex-col gap-y-28">
            <div className="text-xl font-serif">Get your vaccine today</div>
            <button className="block w-[100px] my-2 rounded-full bg-sky-600 border border-cyan-600 
            hover:border-transparent hover:bg-indigo-600 px-3 py-2 shadow-sm text-white font-semibold" 
            onClick={()=>{setPlaying(!playing)}}>{playing? 'Pause':'Play'}</button>
        </div>
        </div>
    );
}