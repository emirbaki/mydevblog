import styles from "./headinglinks.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import githubIcon from '@/app/icons/github-mark.svg'
import twitterIcon from '@/app/icons/Logo_of_Twitter.svg'
import instagramIcon from '@/app/icons/instagram-logo.svg'
import linkedinIcon from '@/app/icons/icons8-linkedin.svg'

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link href="https://www.linkedin.com/in/emir-baki-demirci-896a0b1b1/" target="_blank" rel="nofollow">
        <Image priority src={linkedinIcon} alt='linkedin icon' width={18} height={18}></Image>
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://github.com/emirbaki" target="_blank" rel="nofollow">
        <Image priority src={githubIcon} alt='github icon' width={18} height={18}></Image>
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://twitter.com/sumsukkafa" target="_blank" rel="nofollow">
          <Image priority src={twitterIcon} alt='twitter icon' width={18} height={18}></Image>
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://www.instagram.com/emirbaki.d/" target="_blank" rel="nofollow">
          <Image priority src={instagramIcon} alt='instagram icon' width={18} height={18}></Image>
        </Link>
      </motion.span>
    </div>
  );
};
