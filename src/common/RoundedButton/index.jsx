"use client";
import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../Magnetic';

const Rounded = ({ children, backgroundColor = "#FFA500", link, ...attributes }) => {
  const circle = useRef(null);
  const timeline = useRef(null);
  let timeoutId = null;
  
  // Check if link is external (starts with http) or internal
  const isExternalLink = link && (link.startsWith('http') || link.startsWith('https'));
  
  // Only use basePath for internal links - for GitHub Pages deployment
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const processedLink = isExternalLink ? link : (basePath + link);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <a href={processedLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <div
          className={styles.roundedButton}
          style={{ overflow: "hidden" }}
          onMouseEnter={manageMouseEnter}
          onMouseLeave={manageMouseLeave}
          {...attributes}
        >
          {children}
          <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
        </div>
      </a>
    </Magnetic>
  );
};

export default Rounded;