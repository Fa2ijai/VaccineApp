'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
    const bannerPic = ['/img/vaccine.jpg','/img/vaccine2.jpg','/img/vaccine3.jpg','/img/vaccine4.jpg']
    const [index,setIndex] = useState(0);
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
        </div>
    );
}