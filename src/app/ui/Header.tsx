import styles from '@/app/page.module.css'
import Image from "next/image"
export default function Header() {

    return (
        <header>
            {/*Intro for PC Screens*/}
            <div className={styles.lJoycon}>

            </div>
            <div className={styles.screen}>
                <div className={styles.picdiv}>
                    <Image width={200} height={200} className={styles.me} src="/OnlygoodpicIhaveedit.jpg" alt=""/>
                </div>
                
                <div className={styles.aboutcopy} tabIndex={0}>
                    <p className={styles.abouttext}>Hello there, I&apos;m Luca Bonini and I am a Web Developer looking to expand my knowledge and experience in the field. </p>
                    <p className={styles.abouttext}>My passion for using my creativity both in an artistic and problem-solving sense makes me an invaluable asset to any team, and my strong drive to further my skills and knowledge on my own time makes me a worthwhile investment. </p>
                    <p className={styles.abouttext}>If the theme of my website didn&apos;t give it away I love playing video games as well as reading, listening to music, and in general just learning and trying new things.</p>
                </div>
                <div className={styles.barbox}>
                    <div className={styles.lredbar}/>
                    <div className={styles.rredbar}/>
                </div>
            </div>
            <div className={styles.rJoycon}>

            </div>

            {/*Intro for Mobile Screens*/}
            <div className={styles.gboyscreen}>
                <Image className={styles.me} src="/OnlygoodpicIhaveedit.jpg" width={200} height={200} alt=""/>
                <p className={styles.abouttext}>Hello there, I&apos;m Luca Bonini and I am a Web Developer looking to expand my knowledge and experience in the field. </p>
                <p className={styles.abouttext}>My passion for using my creativity both in an artistic and problem-solving sense makes me an invaluable asset to any team, and my strong drive to further my skills and knowledge on my own time makes me a worthwhile investment. </p>
                <p className={styles.abouttext}>If the theme of my website didn&apos;t give it away I love playing video games as well as reading, listening to music, and in general just learning and trying new things.</p>
            </div>
            <div className={styles.gboybuttons}/>
        </header>
    )
}