import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>CodeX Ethiopia</div>
      <div className={styles.text}>@ All Right Reserved 2023.</div>
    </div>
  );
};

export default Footer;
