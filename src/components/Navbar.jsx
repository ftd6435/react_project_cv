import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let page = useLocation().pathname;

  function isCurrentPage(currentPage) {
    return page === currentPage ? "link active" : "link";
  }

  return (
    <nav>
      <div className="container nav_container">
        <h1 className="logo">
          Pathé <span>PK</span>
        </h1>
        <div className="links_container">
          <ul className="nav_links">
            <li className="nav_link">
              <Link className={isCurrentPage("/")} to={"/"}>
                Acceuil
              </Link>
            </li>

            <li className="nav_link">
              <Link
                className={isCurrentPage("/experiences-professionnelles")}
                to={"/experiences-professionnelles"}
              >
                Expériences
              </Link>
            </li>
            <li className="nav_link">
              <Link className={isCurrentPage("/formations")} to={"/formations"}>
                Formations
              </Link>
            </li>
            <li className="nav_link">
              <Link
                className={isCurrentPage("/competences")}
                to={"/competences"}
              >
                Compétences
              </Link>
            </li>
            <li className="nav_link">
              <Link className={isCurrentPage("/contact")} to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
          <a href="/CV_Mamadou Pathé_Diallo.zip" className="btn downloader">Telecharger CV</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
