import styles from './Exp.module.css';
import { getImageUrl } from '../img'
import skills from '../../data/skills.json'
export function Exp() {

    return (
        <section className={styles.container} id='exp'>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                    );
                })}
                </div>
            </div>
        </section>

    );
}