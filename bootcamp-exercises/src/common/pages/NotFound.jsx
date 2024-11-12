import "../assets/styles/notFound.css";

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="main-center fade-in page-404">
      <h1 className="h1-error">404</h1>
      <h2 className="h2-error">ooops ! page not found</h2>
      <p className="p-error">
        Sorry the page you are looking for does not exist, Please return to Home
      </p>
      <Link to={"/"} className="btn error-btn">
        Return Home
      </Link>
    </main>
  );
}
