import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';

export default function Index() {
    const phrase = "Bene is a decentralized fundraising platform on the Ergo blockchain. Projects create funding requests with specific token amounts and deadlines. If all tokens are sold before the deadline, the project receives the funds; otherwise, contributors can refund their tokens for ERGs. This ensures a secure and transparent funding process.";
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => (
                            <span key={index} className={styles.mask}>
                                <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>
                                    {word}
                                </motion.span>
                            </span>
                        ))
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                Seamless fundraising on Ergo & EVM! Secure, transparent, and trustless—Bene empowers you to raise and support projects across multiple blockchains.
                </motion.p>

            </div>
        </div>
    );
}
