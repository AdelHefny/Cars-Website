import styles from "./footer.module.css";

function SubButton() {
    return ( 
        <div className={styles.SubContainer}>
            <input type="text" className={styles.subInput}/>
            <button className={styles.subBtn}>Subscribe</button>
        </div>
     );
}

export default SubButton;