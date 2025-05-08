import styles from '@/app/page.module.css'

export default function Nav() {
    return (
        <nav>
            <div id="about" className={styles.about}>
                <a href="#">
                    <p>About Me</p>
                </a>
            </div>
            <div id="proj" className={styles.proj}>
                <a href="#projects">
                    <p>Projects</p>
                </a>
            </div>
            <div id="links" className={styles.links}>
                <a href="#linksection">
                    <p>Links</p>
                </a>
            </div>
        </nav>
        )
    }