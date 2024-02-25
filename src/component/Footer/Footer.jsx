import Image from "next/image";
import styles from "./Footer.module.css";
import { icons } from "./data";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2024 Hexashop. All rights reserved.</div>
      <div className={styles.social}>
        {icons.map((icon) => (
          <Image
            key={icon.id}
            src={`/images/icons/${icon.media}.png`}
            width={30}
            height={30}
            alt={`Hexashop ${icon.media} link`}
            className={styles.icons}
          />
        ))}
      </div>
    </div>
  );
}
