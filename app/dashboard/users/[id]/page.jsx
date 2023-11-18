import React from "react";
import styles from "../../../../componet/dashboard/user/singleUser/singleUser.module.css";
import Image from "next/image";
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      {/* left side */}
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      {/* right side */}
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text " name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="text " name="email" placeholder="JohnDoe@admin.com" />
          <label>Password</label>
          <input type="text " name="password" placeholder="***********" />
          <label>Phone</label>
          <input type="text " name="phone" placeholder="+251-123-456-7890" />
          <label>Address</label>
          <textarea type="text " name="address" placeholder="Addis Ababa" />
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
