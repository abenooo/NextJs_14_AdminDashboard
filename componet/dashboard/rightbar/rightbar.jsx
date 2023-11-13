import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdReadMore } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 Minute to learn</span>
          <p className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            non possimus similique quia rerum id aut ad odio, architecto eaque
            nisi, nostrum quasi asperiores veniam in saepe beatae, placeat
            ipsum.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 Minute to learn</span>
          <p className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            non possimus similique quia rerum id aut ad odio, architecto eaque
            nisi, nostrum quasi asperiores veniam in saepe beatae, placeat
            ipsum.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
