import Head from "next/head";
import { useEffect, useState } from "react";
import Jewel from "../components/Jewel";
import styles from "../styles/Home.module.scss";

const JEWELS = [
  {
    name: "Bless",
    id: "bless",
    image: "/images/bless.jpg",
    price: 6
  },
  {
    name: "Soul",
    id: "soul",
    image: "/images/soul.jpg",
    price: 5
  },
  {
    name: "Life",
    id: "life",
    image: "/images/life.jpg",
    price: 4
  },
  {
    name: "Creation",
    id: "creation",
    image: "/images/creation.jpg",
    price: 3
  },
  {
    name: "Chaos",
    id: "chaos",
    image: "/images/chaos.jpg",
    price: 1
  }
];

export default function Home() {
  const [jewelsCount, setJewelsCount] = useState({
    bless: 0,
    soul: 0,
    life: 0,
    creation: 0,
    chaos: 0
  });
  const [zenCount, setZenCount] = useState(0);

  useEffect(() => {
    setZenCount(
      Object.values(jewelsCount).reduce((acc, curr) => acc + curr, 0)
    );
  }, [jewelsCount]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Calculadora de joyas</h1>
          <h3 className={styles.description}>
            Poné la cantidad de joyitas que tenés en el baul de joyas y calculá
            cuánto zen tenes
          </h3>
        </div>

        <div className={styles.totalWrapper}>
          <p>Total:</p>
          <p className={styles.zenCount}>{zenCount} kk</p>
        </div>

        <section className={styles.jewelsWrapper}>
          {JEWELS.map((jewel) => (
            <Jewel
              data={jewel}
              key={jewel.id}
              setJewelsCount={setJewelsCount}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
