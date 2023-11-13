import Search from "@/app/ui/dashboard/search.jsx/search";
import styles from "@/app/ui/user/user.module.css";
const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search here for users ..." />
      </div>

      <table className={styles.table}></table>
    </div>
  );
};

export default UsersPage;
