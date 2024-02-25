import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/");

  if (!res.ok) {
    return Error("Failed to fetch data");
  }

  return res.json();
}

export default async function products() {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((product) => {
        return (
          <Link
            key={product.id}
            className={styles.post}
            href={`/products/${product.id}`}
          >
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={product.image}
                fill={true}
                alt="post image"
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.text}>{product.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
