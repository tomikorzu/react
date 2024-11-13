import Navbar from "../components/Navbar/Navbar";

export default function MainLayout({ action, productsCount, children }) {
  return (
    <>
      <Navbar action={action} productsCount={productsCount} />
      {children}
    </>
  );
}
