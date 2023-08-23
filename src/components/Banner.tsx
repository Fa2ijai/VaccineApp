import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/vaccine.jpg'} 
            alt="vaccine" 
            fill={true}
            objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1>Get Vaccine for Yourself and Your Family</h1>
                <div style={{fontSize :'1.5em', paddingTop :'10px'}}>Let's we check hospitals for you</div>
            </div>
        </div>
    );
}