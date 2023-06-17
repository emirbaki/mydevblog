import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">C#</span>
            <span className="chip">C++</span>
            <span className="chip">MSSQL</span>
            <span className="chip">Postgres</span>
            <span className="chip">.NET</span>
            <span className="chip">GitHub</span>
            <span className="chip">Jira</span>
            <span className="chip">AWS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Next.JS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">Figma</span>
            <span className="chip">Python</span>
            <span className="chip">HLSL</span>
            <span className="chip">Unity</span>
            <span className="chip">UE5</span>
            <span className="chip">Flutter</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
