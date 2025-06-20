import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import { usePathname } from 'next/navigation';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
    
    // For Next.js App Router, we need to get basePath differently
    const pathname = usePathname();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`${basePath}/images/bene.png`}
                            />
                        </div>
                        <h2>Have a Question?</h2>
                    </span>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#FFA500"} className={styles.button} link="https://discord.com/channels/995968619034984528/1311251432359591967">
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                        <Rounded link="https://x.com/StabilityNexus">
                            <p>Stability Nexus</p>
                        </Rounded>
                        {/* <Rounded link="https://x.com/DjedAlliance">
                            <p>Djed Alliance</p>
                        </Rounded> */}
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            {/* <h3>Version</h3> */}
                            <p>Stability Nexus</p>
                        </span>
                    </div>
                    <div className={styles.socials}>
                        <Magnetic>
                            <a className={styles.socialLink} href="https://discord.com/channels/995968619034984528/1311251432359591967">
                                <Image 
                                    src={`${basePath}/icons/discord-color.svg`}
                                    alt="Discord"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a className={styles.socialLink} href="https://t.me/StabilityNexus">
                                <Image 
                                    src={`${basePath}/icons/telegram-color.svg`}
                                    alt="Telegram"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a className={styles.socialLink} href="https://www.linkedin.com/company/stability-nexus/">
                                <Image 
                                    src={`${basePath}/icons/linkedin-color.svg`}
                                    alt="LinkedIn"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}