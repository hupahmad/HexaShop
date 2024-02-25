import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    return Error("Failed to fetch data");
  }

  return res.json();
}

export default async function post({ params }) {
  console.log(params.id);
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={data.image}
            alt="post image"
            fill={true}
          />
          <span className={styles.author}>{data.category}</span>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt
          non nemo labore, quisquam porro obcaecati nobis eveniet ducimus culpa
          voluptatem atque veniam numquam mollitia suscipit debitis, consectetur
          deleniti maiores. Distinctio placeat perferendis facilis itaque
          provident pariatur nemo, odio laborum explicabo. Ex molestiae, optio
          corporis eos sed repellat? Deleniti qui, est enim voluptas voluptate
          nulla blanditiis incidunt tenetur similique nesciunt temporibus dolore
          nihil atque id excepturi voluptatibus, consectetur optio quibusdam.
          Dicta maxime temporibus nobis vel quasi eaque suscipit! Vel ipsum
          quasi magni quia eos! Aspernatur deserunt quo obcaecati modi
          consequuntur repudiandae est facilis perferendis illum vitae maxime,
          sunt iure, cumque ullam, accusantium incidunt ex harum quos quis
          voluptate assumenda quas voluptas et alias. Consequuntur culpa tempore
          unde mollitia impedit, repudiandae cupiditate vero quae ullam
          deserunt, quaerat dolores exercitationem tempora. Mollitia animi harum
          accusamus voluptatem consequatur odio maiores, cumque consequuntur
          quidem nemo eum quos, perspiciatis beatae? Odio nesciunt, consectetur
          voluptatibus accusantium eligendi, vero non temporibus quia
          recusandae, vitae molestias distinctio illum aut dolore architecto
          quisquam nulla earum assumenda. Iusto, reprehenderit praesentium.
          Corrupti maiores facere illum, laborum quibusdam ipsa delectus velit
          exercitationem esse sapiente consequuntur fugit quo. Molestias
          eligendi unde delectus impedit dolor hic expedita cumque magnam esse,
          quae voluptates aliquid quas?
        </p>
      </div>
    </div>
  );
}
