import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./data";
import  Button  from "@/app/elements/Button/Button";
import  Logo  from "@/app/elements/Logo/Logo";
import DarkMode from "../DarkMode/DarkMode";



export default function Navbar() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        <DarkMode />
        {links.map(link =>
        <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        )}
        <Button/>
      </div>
    </div>
  );
}
