import { motion, useTime, useTransform } from "framer-motion"
import { useState } from "react"
import Image from 'next/image';
import styles from '@/app/page.module.css'

export default function Links() {
    const [isOpen, setIsOpen] = useState(false);
    
    const time = useTime();

    const rotate = useTransform(time, [0, 4000], [0, 360], {clamp: false});
    const bgcolor = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, #12c1ea, #f07129, #12c1ea)`;
    })
    return (
        <div id="linksection" className={styles.linksection}>
            <div className={styles.linkcontent}>
                <div className={styles.bg}></div>

                <div className={styles.buttonbox}>
                    <motion.input className={`${styles.portbutton} ${styles.fill}`} type="image" src="/portalbuttontop.png" initial={{ scale: 1.1 }} whileTap={{ scale: 1 }} onClick={() => setIsOpen(!isOpen)}></motion.input>
                </div>
                <Image width={200} height={200} className={`${styles.portbuttonstand} ${styles.fill}`} src="/portalbutton.png" alt="" />

                <Image width={200} height={200} className={`${styles.hazard} ${styles.fill}`} src="/hazard.jpg" alt="" />

                <motion.img initial={{ y: -6}} className={styles.p1L} src="/orgportalL.png" alt="" />
                <motion.img initial={{ y: -6}} className={styles.p1R} src="/orgportalR.png" alt="" />

                <motion.img initial={{ y: -6}} className={styles.p2L} src="/blueportalL.png" alt="" />
                <motion.img initial={{ y: -6}} className={styles.p2R} src="/blueportalR.png" alt="" />

                <motion.a className={styles.linkedin} href="https://www.linkedin.com/in/luca-bonini/" target="_blank" initial={{ x: -800, y: -15, display: "none" }} animate={isOpen ? {x:0, display: "block"} : {x:-800, display: "none"}}>
                    <Image width={200} height={200} className={styles.fill} src="/linkedin.png" alt="" />
                </motion.a>

                <motion.a className={styles.github} href="https://github.com/LBonini1273" target="_blank" initial={{ x: -800, y: -20, display: "none" }} animate={isOpen ? {x:0, display: "block"} : {x:-800, display: "none"}}>
                    <Image width={200} height={200} className={styles.fill} src="/github.png" alt="" />
                </motion.a>

                <motion.a className={styles.gmail} href="mailto:luca.bonini1273@gmail.com" target="_blank" initial={{ x: 800, display: "none" }} animate={isOpen ? {x:0, display: "block"} : {x:800, display: "none"}}>
                    <Image width={200} height={200} className={styles.fill} src="/gmail.png" alt="" />
                </motion.a>

                <motion.a className={styles.resume} href="Luca_Bonini_Resume.pdf" download target="_blank" initial={{ x: 800, display: "none" }} animate={isOpen ? {x:0, display: "block"} : {x:800, display: "none"}}>
                    <Image width={200} height={200} className={styles.fill} src="/resume.png" alt="" />
                </motion.a>
            </div>
            <motion.div className={styles.linkborder} style={{background:bgcolor}}>
            </motion.div>
        </div>
    )
    }