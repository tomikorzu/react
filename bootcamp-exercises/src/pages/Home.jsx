import { Link } from "react-router-dom";

import "../assets/styles/home.css";

export default function Home() {
  return (
    <main className="fade-in home-main">
      <Link to={"/counter"}>Counter</Link>
    </main>
  );
}
