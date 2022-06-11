/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import styles from "./Jewel.module.scss";

const Jewel = ({ data, setJewelsCount }) => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = count;

    setJewelsCount((prev) => ({
      ...prev,
      [data.id]: count * data.price
    }));
  }, [count, setJewelsCount, data.id, data.price]);

  return (
    <div className={styles.jewel} key={data.name}>
      <img className={styles.jewelImg} src={data.image} alt="Soul" />

      <div className={styles.jewelData}>
        <div className={styles.jewelInfo}>
          <div className={styles.jewelName}>Jewel of {data.name}</div>
          <div className={styles.jewelPrice}>{data.price}M zen</div>
        </div>

        <div className={styles.jewelCount}>
          <button
            className={styles.jewelButton}
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <input
            ref={inputRef}
            className={styles.jewelInput}
            type="number"
            defaultValue={count}
            onChange={(e) => setCount(parseInt(e.target.value || 0))}
          />
          {/* <span className={styles.jewelCountValue}>{count}</span> */}
          <button
            className={styles.jewelButton}
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jewel;
