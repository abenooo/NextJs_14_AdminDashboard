import Search from "@/componet/dashboard/search.jsx/search";
import styles from "../../../componet/user/user.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/componet/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import moment from "moment";
const UsersPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  // console.log(q)
  const users = await fetchUsers(q);
  // console.log(users, "users");

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>
                {moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "not Active"}</td>
              <td>
                <Link href="/dashboard/users/${user.id}">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default UsersPage;
