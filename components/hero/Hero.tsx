import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter()
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hi, I&apos;m Emir Baki<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Game Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;ve experience of developing mobile games for 2 years and currently I am working on my indie games.
            I am also interested in AI, Computer Vision and Simulation Systems and trying to improve myself in these areas.
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
          
        </Reveal>
        <Reveal>
          <div className={styles.blogButton}>
            <StandardButton 
              onClick={() => router.push('/blog')}
            >
              Go to my blog
            </StandardButton>
          </div>
         
          
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
