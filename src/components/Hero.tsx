import '../style/hero.css'

function Hero(){
    return (
        <section className="hero d-flex align-items-center text-center min-vh-50 min-vh-sm-75 min-vh-md-100">
            <div className="hero-overlay"></div>
            <div className="container overlay-content">
                <h1 className="display-3 fw-bold"> Bienvenue sur notre site</h1>
                <p className="mb-4">Ensemble, construisons de beaux projets pour l'avenir </p>
                <a className="btn btn-primary btn-lg">Découvrir</a>
                <a className="btn btn-outline-light btn-lg">Faire un don</a>
            </div>
        </section>
    );
}

export default Hero;