import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import Link from "next/link";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <Link href='/'>
      <h1>emirbakidemirci:$<span className='cursor'>| </span></h1>
      </Link>
      <MyLinks />
    </header>
  );
};
