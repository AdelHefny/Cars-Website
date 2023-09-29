import Image from "next/image";
import styles from "./products.module.css"
import solarCharging from "@/public/images/technology/solarCharging.jpg"

function Products() {
    return ( 
        <section className={styles.products}>
            <section className={styles.description}>
                <section>
                    <h5>THE AUTONO DIGITAL PRODUCTS</h5>
                    <h1>We’ve developed an app so that each vehicle can drive autonomously and make decisions based on real-time information and situational awareness.</h1>
                </section>
                <Image
                src={solarCharging}
                width={640}
                height={840}
                alt="solar Charging image"
                />
            </section>
            <section className={styles.productTech}>
                <section>
                    <h5>ADVANCED CYBER SECURITY</h5>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </section>
                <section>
                    <h5>REAL-TIME INFORMATION</h5>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </section>
            </section>
        </section>
     );
}

export default Products;