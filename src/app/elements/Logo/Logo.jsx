import Link from "next/link";
import styles from "./Logo.module.css";
import { Montserrat } from "next/font/google";

const LogoFont = Montserrat({ subsets: ["latin"],weight:["900"] });


export default function Logo() {
  return (
      <Link href="/" className={`${styles.logo} ${LogoFont.className} `}>HEXSHOP</Link>
      )
}