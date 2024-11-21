import { useState, useEffect } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { motion } from "framer-motion-3d"
import Image from 'next/image';
import styles from '@/app/page.module.css'

//These are the text and pictures that appear on the CD
function CDText({x, y, z, activenum}:{x: number, y: number, z: number, activenum: number}) {
    
    if (activenum === 1) {
        return (
            <Html position={[x-4.4, y+4.4, z]}>
                <div className={styles.cdhtml}>
                    <div className={styles.cdtitle}>
                        Portfolio Website V1
                    </div>
                    <div className={styles.cdinfo}>
                        <a target="_blank" href="https://react.dev/">
                            <Image width={200} height={200} className={styles.techlogo} src="/react.png" alt="" />
                        </a>
                        <a target="_blank" href="https://threejs.org/">
                            <Image width={200} height={200} className={styles.techlogo} src="/threejs.png" alt="" />
                        </a>
                        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                            <Image width={200} height={200} className={styles.techlogo} src="/html5.png" alt="" />
                        </a>
                        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                            <Image width={200} height={200} className={styles.techlogo} src="/css3.svg" alt="" />
                        </a>
                    </div>
                </div>
            </Html>
        )
    }
    if (activenum === 2) {
        return (
            <Html position={[x-4.4, y+4.4, z]}>
                <div className={styles.cdhtml}>
                    <div className={styles.cdtitle}>
                        Under Construction
                    </div>
                    <div className={styles.cdinfo}>
                        <Image width={200} height={200} className={styles.templogo} src="/underconstruction.png" alt="" />
                    </div>
                </div>
            </Html>
        )    
    }
    return (
        <Html position={[x-4.4, y+4.4, z]}>
            <div className={styles.cdhtml}>
                <div className={styles.cdtitle}>
                    
                </div>
                <div className={styles.cdinfo}>
                    
                </div>
            </div>
        </Html>
    )
}



//This is the full CD plus the text from the previous function. It also controls the movement of the CD
export function CDR({onShow, x, y, z, active, activenum}: { onShow: () => void, x: number, y: number, z: number, active: boolean, activenum: number}) {
    const { nodes, materials } = useGLTF('/very_simple_cd-_disc.glb')
  
    const [hovered, setHover] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered && !active ? "pointer" : "auto"), [hovered, active])
    const onPointerOver = () => setHover(true);
    const onPointerOut = () => setHover(false);

    const variants = {
        slide: { x: x+2.5, y: y, z: z },
        in: {x: -6.25, y: 5, z: z, rotateX: Math.PI/-2},
        out: {x: x, y: y, z: z, rotateX: 0}   
    }

    return (
      <group dispose={null}>
          <CDText x={x} y={y} z={z} activenum={activenum} />
          <motion.mesh variants={variants} animate={!active && hovered ? "slide" : active ? "in" : "out"}
            transition={{ type:"spring", bounce: 0.05 }}
            scale={2} onClick={onShow} onPointerOver={onPointerOver} onPointerOut={onPointerOut} position={[x, y, z]}
              castShadow
              receiveShadow
              //@ts-expect-error TS is dumb
              geometry={nodes.Object_2.geometry}
              material={materials.None}  
          />
      </group>
    )
  }
  
  useGLTF.preload('/very_simple_cd-_disc.glb')