import Navbar from "../components/Navbar/Navbar";

export default function MainLayout({ action, children }) {
  return (
    <>
      <Navbar action={action} />
      {children}
    </>
  );
}
