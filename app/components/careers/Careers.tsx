import ApplyButton from "./Button";
import styles from "./Careers.module.css";
import Jobs from "./jobs";

function Careers() {
    return ( 
        <section className={styles.careersPage}>
            <section className={styles.openings}>
                <h5>CAREERS</h5>
                <h1>We’re looking for <br/>innovative talent to join <br/>our team. See all positions <br/>and submit your CV.</h1>
                <ApplyButton CustomStyles={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    Openings
                </ApplyButton>
            </section>
            <section>
                <Jobs/>
            </section>
        </section>
     );
}

export default Careers;