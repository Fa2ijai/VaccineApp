import Image from "next/image";
import styles from "./card.module.css"

export default function InfoCard() { 
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/vaccine-virus.jpg'} 
                alt="InfoCard"
                fill = {true}
                objectFit='cover'
                />
            </div>
            <div className={styles.cardText}>
                <h2>Sinovac</h2>
                <div style={{fontSize :'1em'}}>The vaccine is safe and effective for all individuals aged 18 and above. In line with the WHO Prioritization Roadmap and the WHO Values Framework, older adults, health workers and immunocompromised persons should be prioritised.</div>
            </div>
        </div>
    );

}