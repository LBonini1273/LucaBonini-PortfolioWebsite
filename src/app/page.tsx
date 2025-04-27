'use client'

import Image from "next/image";
import styles from '@/app/page.module.css'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrthographicCamera, Html } from '@react-three/drei'
import Nav from '@/app/ui/Nav';
import Links from '@/app/ui/Links';
import Header from '@/app/ui/Header';
import { CDR } from '@/app/ui/Cd';
import Eject from '@/app/ui/Eject';
import Shelf from "@/app/ui/Shelf";

useGLTF.preload('/very_simple_cd-_disc.glb')

//Booleans for Controlling which CD is active
let p1Active = false;
let p2Active = false;
let p3Active = false;

//Function that creates and controls what content is shown on the TV based on the active CD
function TVSet() {
  const [activeProj, setActiveProj] = useState(0);

  const handleClick = () => {
    setActiveProj(0);
    p1Active = false;
    p2Active = false;
    p3Active = false;
  };

  if (activeProj === 1) {
    p1Active = true;
    p2Active = false;
    p3Active = false;

    return (
      <div className={styles.tvset}>
        <div id='tvback' key={activeProj} className={styles.tvback}>
          <h1>
            <div className={styles.projcopy}>
              <p className={styles.projtext}>I understand how contentious it can be to list one&apos;s portfolio website as a project, but that is exactly why I did my best to create something from scratch that was uniquely my own.</p>
              <p className={styles.projtext}>I designed the layout myself and used HTML, CSS, React, and Three to create the frontend. I then used Next.js for the backend and Vercel to host the website. 
              I also used libraries such as React Three Fiber, Drei, and Motion for React to add additional features such as the animations.</p>
              <p className={styles.projtext}>Not only was this an opportunity for me to refine my exsisting knowledge, but I was also able to learn a lot of new things in the process.
              Be sure to checkout my GitHub repo to see how it evolves over time.</p> 
            </div>
            <a className={styles.repolink} href='https://github.com/LBonini1273/LucaBonini-PortfolioWebsite' target="_blank"/>
            <Image width={200} height={200} className={styles.imgs} src="/github.png" alt="" />
            <div className={styles.tvstatic}></div>
          </h1>
        </div>
        <div className={styles.canvbox}> 
          <div className={styles.canv}>
            <Canvas>
            <OrthographicCamera makeDefault position={[0, 0, 9]} zoom={27.3} /> 
            <ambientLight intensity={0.8} />
            <pointLight intensity={1} position={[0, 6, 0]} />
            <Html position={[2, 6.1, 2]}>
              <div className={styles.consolelogo}>ProjBox</div>
            </Html>
            <Shelf />
            <Eject onShow={handleClick} />
            <CDR onShow={() => setActiveProj(1)} x={-11.4} y={-2.5} z={4} active={p1Active} activenum={1}/>
            <CDR onShow={() => setActiveProj(2)} x={0.6} y={-2.5} z={4} active={p2Active} activenum={2}/>
            <CDR onShow={() => setActiveProj(3)} x={12.6} y={-2.5} z={4} active={p3Active} activenum={2}/> 
            </Canvas>
          </div>
        </div> 
      </div>
    )
  }
  
  if (activeProj === 2) {
    p1Active = false;
    p2Active = true;
    p3Active = false;
    
    return (
      <div className={styles.tvset}>
        <div id='tvback' key={activeProj} className={styles.tvback}>
          <h1>
            <p className={styles.tempcopy}>Please try a different disc. We can&apos;t play this one.</p>
            <div className={styles.tvstatic}></div>
          </h1>
        </div>
        <div className={styles.canvbox}> 
          <div className={styles.canv}>
            <Canvas>
            <OrthographicCamera makeDefault position={[0, 0, 9]} zoom={27.3} />
            <ambientLight intensity={0.8} />
            <pointLight intensity={1} position={[0, 6, 0]} />
            <Html position={[2, 6.1, 2]}>
              <div className={styles.consolelogo}>ProjBox</div>
            </Html>
            <Shelf />
            <Eject onShow={handleClick} />
            <CDR onShow={() => setActiveProj(1)} x={-11.4} y={-2.5} z={4} active={p1Active} activenum={1}/>
            <CDR onShow={() => setActiveProj(2)} x={0.6} y={-2.5} z={4} active={p2Active} activenum={2}/>
            <CDR onShow={() => setActiveProj(3)} x={12.6} y={-2.5} z={4} active={p3Active} activenum={2}/>    
            </Canvas>
          </div>
        </div> 
      </div>
    )
  }

  if (activeProj === 3) {
    p1Active = false;
    p2Active = false;
    p3Active = true;
    
    return (
      <div className={styles.tvset}>
        <div id='tvback' key={activeProj} className={styles.tvback}>
          <h1>
            <p className={styles.tempcopy}>Please try a different disc. We can&apos;t play this one.</p>
            <div className={styles.tvstatic}></div>
          </h1>
        </div>
        <div className={styles.canvbox}> 
          <div className={styles.canv}>
            <Canvas>
            <OrthographicCamera makeDefault position={[0, 0, 9]} zoom={27.3} />
            <ambientLight intensity={0.8} />
            <pointLight intensity={1} position={[0, 6, 0]} />
            <Html position={[2, 6.1, 2]}>
              <div className={styles.consolelogo}>ProjBox</div>
            </Html>
            <Shelf />
            <Eject onShow={handleClick} />
            <CDR onShow={() => setActiveProj(1)} x={-11.4} y={-2.5} z={4} active={p1Active} activenum={1}/>
            <CDR onShow={() => setActiveProj(2)} x={0.6} y={-2.5} z={4} active={p2Active} activenum={2}/>
            <CDR onShow={() => setActiveProj(3)} x={12.6} y={-2.5} z={4} active={p3Active} activenum={2}/>      
            </Canvas>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id='projects' className={styles.tvset}>
      
        <div className={styles.tvback}>
          <h1>
            <p className={styles.tempcopy}>Please insert one of the adjacent discs to play.</p>
          </h1>
        </div>
        <div className={styles.projbox}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%"/>
            <rect y="30%" width="50%" height="12.5%" fill="#8e0002"/>
            <rect y="75%" width="100%" height="25%" fill="#434344"/>
            <text x="57.5%" y="47.5%" fill="#8e0002" className={styles.projboxlogo}>ProjBox</text>
            <circle cx="89%" cy="35%" r="4.5%" fill="#434344"/>
            <svg viewBox="0 0 100 100">
              <polygon points="245,25 238,35 252,35" fill="#8e0002"/>  
            </svg>
            <rect x="87.6%" y="37%" width="2.75%" height="5%" fill="#8e0002"/>
            <circle cx="89%" cy="35%" r="4.5%" fill="transparent"/>   
          </svg>
        </div>
      
      <div className={styles.projectshelf}>

      </div>
    </div>
  )    
}

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <TVSet />
      <Links />
    </div>    
  );
}
