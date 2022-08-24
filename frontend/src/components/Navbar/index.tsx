import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import { ReactComponent as IMDbIcon } from '../../assets/img/imdb-icon.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="imdb-nav-content">
                    <IMDbIcon />
                    <form className="form-inline my-2 my-lg-0 imdb-search">
                        <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar na IMDb" aria-label="Pesquisar" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                    </form>
                    <a href="https://github.com/DanielXav" target="_blank" rel="noreferrer">
                        <div className="imdb-contact-container">
                            <GithubIcon />
                            <p className="imdb-contact-link">/danielxav</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}

export default Navbar;



