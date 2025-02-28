'use client'; // Ensures this component runs only on the client-side in Next.js

import Image from 'next/image';
import styles from './style.module.scss'; 
import { useEffect, useRef } from 'react'; 
import { slideUp } from './animation'; 
import { motion } from 'framer-motion'; 
import Rounded from '@/common/RoundedButton'; 

export default function Home() {
  useEffect(() => {
    // Ensure body allows scrolling
    document.body.style.overflow = 'auto';
  }, []);
  return (
    <motion.main
      variants={slideUp} 
      initial="initial" 
      animate="enter" 
      className={styles.landing} 
    >
      {/* Background Image */}
      <div className={styles.background}>
        <Image src="/images/bene9.png" fill={true} alt="background" />
      </div>

      {/* Centered Content */}
      <div className={styles.content}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.mainHeading}>
            Bene <span className={styles.highlight}>Proof-of-Funding</span>
          </h1>
          <h2 className={styles.subHeading}>Fundraising Platform</h2>
          
          <div className={styles.description}>
            <p>Safe & Secure</p> 
          </div>
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          <Rounded link="https://bene-evm.stability.nexus/">
            <p>Launch Bene on EVM</p>
          </Rounded>
          <Rounded link="https://bene-ergo.stability.nexus/">
            <p>Launch Bene on ERGO</p>
          </Rounded>
        </div>
      </div>
    </motion.main>
  );
}
