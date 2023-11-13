import Search from "@/ui/dashboard/search.jsx/search";
import styles from "../../../ui/user/user.module.css";
import Image from "next/image";
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

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
<td>john@gmail.com</td>
<td>13.11.2023</td>
<td>Admin</td>
<td>Active</td>
<td>
  <Link href="/">
  <button className={`${styles.button} ${styles.view}`}>View</button>
  </Link>
  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
