import "../style/navigation-desktop-menu-bottom.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // nécessaire pour dropdown, modal, etc.
function NavigationDesktopMenuBottom() {
  return (
    <nav className="navigation-desktop-menu-bottom navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          AssoLogo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Je m'engage
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Je me forme
              </a>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn--plain btn--outlined" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav ms-auto  mb-lg-0 mt-2 ">
            <li className="nav-item dropdown me-3">
              <a className="nav-link dropdown-toggle p-0"
                 data-bs-toggle="dropdown" >
                 <i className="bi bi-person-fill ass-icon-size"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item"> Espace donateur </a></li>
                <li><a className="dropdown-item"> Espace adhérent </a></li>
              </ul>
            </li>
            <li className="nav-item ">
                <a className="btn btn--plain btn--color-primary btn-lg">Je fais un don</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavigationDesktopMenuBottom;
