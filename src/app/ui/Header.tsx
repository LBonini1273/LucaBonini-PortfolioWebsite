import { motion } from "framer-motion"
import styles from '@/app/page.module.css'
export default function Header() {

    return (
        <header>
            <motion.div className={styles.lJoycon} initial={{ y:-1000 }} transition={{delay:4}} animate={{ y:0 }}>

            </motion.div>
            <motion.div className={styles.screen} initial={{ y:-1000 }} transition={{delay:1, duration:2}} animate={{ y:0 }}>
                <motion.div className={styles.picdiv} initial={{ x:-450 }} transition={{delay:6, duration:1}} animate={{ x:0 }}>
                    <motion.img className={styles.me} src="/OnlygoodpicIhaveedit.jpg" alt=""/>
                </motion.div>
                
                <motion.div className={styles.aboutcopy} tabIndex={0} initial={{ y:-450 }} transition={{delay:6, duration:1}} animate={{ y:0 }}>
                    <p className={styles.abouttext}>Hello there, I&apos;m Luca Bonini and I am a Web Developer looking to expand my knowledge and experience in the field. </p>
                    <p className={styles.abouttext}>My passion for using my creativity both in an artistic and problem-solving sense makes me an invaluable asset to any team, and my strong drive to further my skills and knowledge on my own time makes me a worthwhile investment. </p>
                    <p className={styles.abouttext}>If the theme of my website didn&apos;t give it away I love playing video games as well as reading, listening to music, and in general just learning and trying new things.</p>
                </motion.div>
                <motion.div className={styles.barbox} initial={{ y:-450 }} transition={{delay:6, duration:1}} animate={{ y:0 }}>
                    <div className={styles.lredbar}/>
                    <div className={styles.rredbar}/>
                </motion.div>
            </motion.div>
            <motion.div className={styles.rJoycon} initial={{ y:-1000 }} transition={{delay:4}} animate={{ y:0 }}>

            </motion.div>        
        </header>
    )
}