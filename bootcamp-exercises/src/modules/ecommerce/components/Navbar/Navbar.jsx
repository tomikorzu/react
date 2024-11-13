import CartButton from "../CartButton/CartButton";
import "./navbar.css";
import SearchInput from "../SearchInput/SearchInput";

export default function Navbar({ action, productsCount }) {
  return (
    <>
      <header className="navbar-header">
        <h1
          onClick={() => window.location.reload()}
          style={{ cursor: "pointer" }}
        >
          Ecommerce
        </h1>
        <SearchInput action={action} />
        <CartButton productsCount={productsCount} />
      </header>
    </>
  );
}
