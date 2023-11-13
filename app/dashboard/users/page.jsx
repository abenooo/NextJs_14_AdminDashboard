import Search from "@/app/ui/dashboard/search.jsx/search";
import styles from "@/app/ui/user/user.module.css";
import Link from "next/link";
const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search here for users ..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}></table>
    </div>
  );
};

export default UsersPage;
