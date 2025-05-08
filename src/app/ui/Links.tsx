import { useState } from "react"
import Image from 'next/image';
import styles from '@/app/page.module.css'

export default function Links() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="linksection" className={styles.linksection}>
            <div className={styles.linkcontent}>
                <div className={styles.bg}></div>

                <div className={styles.buttonbox}>
                    <input className={`${styles.portbutton} ${styles.fill}`} type="image" src="/portalbuttontop.png" onClick={() => setIsOpen(!isOpen)}></input>
                </div>
                <Image width={200} height={200} className={`${styles.portbuttonstand} ${styles.fill}`} src="/portalbutton.png" alt="" />

                <Image width={200} height={200} className={`${styles.hazard} ${styles.fill}`} src="/hazard.jpg" alt="" />

                <Image width={200} height={200} className={styles.p1L} src="/orgportalL.png" alt="" />
                <Image width={200} height={200} className={styles.p1R} src="/orgportalR.png" alt="" />

                <Image width={200} height={200} className={styles.p2L} src="/blueportalL.png" alt="" />
                <Image width={200} height={200} className={styles.p2R} src="/blueportalR.png" alt="" />

                <a className={styles.linkedin} href="https://www.linkedin.com/in/luca-bonini/" target="_blank">
                    <Image width={200} height={200} className={styles.fill} src="/linkedin.png" alt="" />
                </a>

                <a className={styles.github} href="https://github.com/LBonini1273" target="_blank">
                    <Image width={200} height={200} className={styles.fill} src="/github.png" alt="" />
                </a>

                <a className={styles.gmail} href="mailto:luca.bonini1273@gmail.com" target="_blank">
                    <Image width={200} height={200} className={styles.fill} src="/gmail.png" alt="" />
                </a>

                <a className={styles.resume} href="Luca_Bonini_Resume.pdf" download target="_blank">
                    <Image width={200} height={200} className={styles.fill} src="/resume.png" alt="" />
                </a>
            </div>
            <div className={styles.linkborder}>
            </div>
        </div>
    )
    }