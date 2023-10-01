'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
    const bannerPic = ['/img/vaccine.jpg','/img/vaccine2.jpg','/img/vaccine3.jpg','/img/vaccine4.jpg']
    const [index,setIndex] = useState(0);
    const router = useRouter()
    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={bannerPic[index%4]} 
            alt="vaccine" 
            fill={true}
            objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1 className="text-4xl">Get Vaccine for Yourself and Your Family</h1>
                <div className="text-xl">Let's we check hospitals for you</div>
            </div>
            <button className="absolute bottom-0 right-5 m-2 z-30 rounded-md bg-sky-600 border border-cyan-600 
            hover:border-transparent hover:bg-indigo-600 px-3 py-2 shadow-sm text-white font-semibold" 
            onClick={(e)=>{e.stopPropagation();e.preventDefault(); router.push('/hospital')}}>Observe Hospital</button>
        </div>
    );
}