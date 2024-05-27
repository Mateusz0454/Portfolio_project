import styles from './Contact.module.css';
import {getImageUrl} from '../img'

export function Contact() {

    return (
       <footer id='contact'>
         <section className={styles.footer}>
            <div className={styles.text}>
                <h2>Contact</h2>
            </div>
            <ul className={styles.links}> 
                <li className={styles.link}>
                    <img src={getImageUrl("media/mail.png")} 
                    alt="email icon"
                    />
                 
                    <a href="mailto:mateusz55749@gmail.com"></a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("media/linkedin.png")} 
                    alt="Linkedin icon" 
                    className='img' />
                    <a href="https://www.linkedin.com/myname"></a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("media/github.png")} 
                    alt="github icon" 
                    className='img' />
                    <a href="https://www.github.com/Tweensky "></a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("media/discord.png")} 
                    alt="discord icon" 
                    className="img" />
                    <a href="https://discordapp.com/users/947810138734075944"></a>
                </li>
            </ul>  
            <div className={styles.break}></div>
            <div className={styles.textFoot}>
                <p> Copyright &copy; 2023 Mateusz. All Rights Reserved.</p>
            </div>
           
        </section>
       </footer>
    );
}