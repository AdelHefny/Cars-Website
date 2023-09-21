import styles from "./footer.module.css"
import {data} from "./data.js"
import Image from "next/image";

function Footer() {
    return ( 
        <section className={styles.footer}>
           <section>
           {/* {data.map((ele)=> <Image 
           key={ele.Id}
           src={`${ele.title}`}
           width={20}
           height={20}
           alt={`${ele.title}`}/>)} */}
           </section>
        </section>
     );
}

export default Footer;