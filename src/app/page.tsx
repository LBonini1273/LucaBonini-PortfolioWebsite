'use client'

import Image from "next/image";
import styles from '@/app/page.module.css'
import { useState } from 'react'
import Nav from '@/app/ui/Nav';
import Links from '@/app/ui/Links';
import Header from '@/app/ui/Header';

//Booleans for Controlling which CD is active
let p1Active = false;
let p2Active = false;
let p3Active = false;

//Function that creates and controls what content is shown on the TV based on the active CD
function TVSet() {
  const activeProj = 0;

  if (p1Active = true) {
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
          </div>
        </div> 
      </div>
    )
  }
  
  if (p2Active = true) {
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
          </div>
        </div> 
      </div>
    )
  }

  if (p3Active = true) {
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
