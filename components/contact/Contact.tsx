import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Send me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/emir-baki-demirci-896a0b1b1/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link href="https://twitter.com/sumsukkafa" target="_blank" rel="nofollow">
              Twitter
            </Link>{" "}
            if that&apos;s easier for you.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:emirbaki.068@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>emirbaki.068@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
