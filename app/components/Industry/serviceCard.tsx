import Image from "next/image";
import styles from "./Industry.module.css"

type serviceCardProps = {
    card: {
        id:number,
        title:string,
        img:string,
        width:number,
        height:number
    }
}

function ServiceCard({card}:serviceCardProps) {
    return ( 
        <section className={styles.serviceCard}>
            <Image
            className={`${card.img}`}
            src={`/images/Services/${card.img}.jpg`}
            width={card.width}
            height={card.height}
            alt={card.title}
            />
            <h4>{card.title}</h4>
        </section>
     );
}

export default ServiceCard;