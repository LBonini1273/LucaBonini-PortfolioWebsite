import { motion } from "framer-motion"
import styles from '@/app/page.module.css'

export default function Nav() {
    return (
        <nav>
            <motion.div id="about" className={styles.about} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{delay:7.5, duration:0.25}}>
                <a href="#">
                    About Me
                </a>
            </motion.div>
            <motion.div id="proj" className={styles.proj} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{delay:8, duration:0.25}}>
                <a href="#tvback">
                    Projects
                </a>
            </motion.div>
            <motion.div id="links" className={styles.links} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{delay:8.5, duration:0.25}}>
                <a href="#linksection">
                    Links
                </a>
            </motion.div>
        </nav>
        )
    }