import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hi! My name is Emir Baki, if you haven&apos;t already figured it out that by
              now. I&apos;m an industrial engineering student who is focusing on
              game development for about 3 years right now.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I am currently working on indie games with my team. On the other hand, I am looking
              for internships which are essential and necessary to graduate from university eventually.
              In this summer, I am going to work as a Software Engineer Intern in Baykar Technology.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              For my hobbies, I like to do readings about Stoicism and Theology. In my free time,
              I mostly play competitive games like LoL, CS:GO with my friends. And if I got roasted in the games and become
              too tense about it, I switch to the EU4 and try to chill out until I am satisfied.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
