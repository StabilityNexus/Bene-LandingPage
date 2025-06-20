'use client'; // Ensures this component runs only on the client-side in Next.js

import Image from 'next/image';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Rounded from '@/common/RoundedButton';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  const [imageSrc, setImageSrc] = useState('');
  
  useEffect(() => {
    // Ensure body allows scrolling
    document.body.style.overflow = 'auto';
    
    // Wait for the domain-check.js script to run
    // It will set window.basePath properly based on the environment
    setTimeout(() => {
      const imgPath = window.basePath 
        ? `${window.basePath}/images/bene9.png` 
        : '/images/bene9.png';
      
      setImageSrc(imgPath);
      
      console.log('Setting image path:', {
        windowBasePath: window.basePath,
        resultingImagePath: imgPath
      });
    }, 50);
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
        {imageSrc && <Image src={imageSrc} fill={true} alt="background" priority />}
      </div>

      {/* Centered Content */}
      <div className={styles.content}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.mainHeading}>
            Bene<br />
            <span className={styles.highlight}>Proof-of-Funding</span>
          </h1>
          <h2 className={styles.subHeading}>Fundraising Platform</h2>
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
