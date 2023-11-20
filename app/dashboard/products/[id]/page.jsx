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
        Iphone
      </div>
      {/* right side */}
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text " name="title" placeholder="title" />
          <label>Price</label>
          <input type="text " name="price" placeholder="1000$" />
          <label>Stock</label>
          <input type="text " name="stock" placeholder="10" />
          <label>Color</label>
          <input type="text " name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text " name="size" placeholder="xl" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
