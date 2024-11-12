import styles from "../assets/styles/cartBtn.module.css";

export default function CartButton() {
  return (
    <button className={styles.cartBtn}>
      <i className="fa-solid fa-cart-shopping"></i>
    </button>
  );
}
