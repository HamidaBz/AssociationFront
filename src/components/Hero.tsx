import "../style/hero.css";

function Hero() {
  return (
    <div className="hero ">
      <header className="hero-header d-flex align-items-center text-center min-vh-50 min-vh-sm-75 min-vh-md-100">
        <div className="container ">
          <h1 className="display-3 fw-bold"> Bienvenue sur notre site</h1>
          <p className="mb-4">
            Ensemble, construisons de beaux projets pour l'avenir{" "}
          </p>
        </div>
      </header>
      <div className="hero-overlay shadow d-flex align-items-center justify-content-center">
        <div className="overlay-content col-5">
            <a className="btn btn-primary btn-lg">Découvrir</a>
            <a className="btn btn-outline-light btn-lg">Faire un don</a>
        </div>
      </div>

    </div>
  );
}

export default Hero;
