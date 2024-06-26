import styles from './Navbar.module.css';
export function Navbar() {

    return (
        <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Portfolio
        </a>
        <div className={styles.menu}>
          <ul
            className={styles.menuItems}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#exp">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

    );
}