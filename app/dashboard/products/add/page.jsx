import styles from "../../../../componet/dashboard/products/addProduct/addProduct.module.css";
const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Please select category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="des"
          id="des"
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
