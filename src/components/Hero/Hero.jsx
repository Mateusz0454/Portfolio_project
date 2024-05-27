import styles from './Hero.module.css';
import { getImageUrl } from '../img';

export function Hero() {

    return (
       <section className={styles.container}>
            <div className={styles.content}> 
                <h2 className={styles.title}>Hi, I&apos;am a Matthew (:</h2>
                <p className={styles.desc}>
                I&apos;m a full-stack developer with 5 years of experience using: React and
          NodeJS or Python-django-react. 
                </p>
                <a href="mailto:mateusz.miszczak44@email.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img src={getImageUrl("hero/avataaars.png")} alt="img" className={styles.heroImg} />
            <div className={styles.topBlur} />
       </section>

    );
}