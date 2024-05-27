import styles from './About.module.css';
import { getImageUrl } from '../img'

export function About() {

    return (
       <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("sitting.png")} 
            alt="2"
            className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/Junior_F_D.png")} alt="img1" className={styles.img}/>
                    <div className={styles.aboutItemsText}>
                        <h3>Junior Fontend Developer</h3>
                        <p>
                            I am a Junior Frontend Developer with 1 year experience in<br /> building website 
                        </p>
                    </div>
                    
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/Junior_B_D.png")} alt="img2"  className={styles.img}/>
                    <div className={styles.aboutItemsText}>
                        <h3>Junior Backend Developer</h3>
                        <p>
                            I have experience in building website on technology such as Django
                        </p>
                    </div>
                    
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/it_adm.png")} alt="img3"  className={styles.img}/>
                    <div className={styles.aboutItemsText}>
                        <h3>It administrator</h3>
                        <p>
                            I&apos;am experience with onfigure device IT and washing.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
       </section>

    );
}