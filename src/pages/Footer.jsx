import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className="main-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Sobre Nós</h3>
              <p>Mekpool é uma plataforma dedicada a criadores de conteúdo multimídia.</p>
            </div>
            <div className="footer-section">
              <h3>Links Rápidos</h3>
              <ul>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/bibliotecas">Bibliotecas</Link></li>
                <li><Link to="/junte-se">Junte-se</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Redes Sociais</h3>
              <div className="social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Mekpool. Todos os direitos reservados.</p>
          </div>
        </footer>
    )
}

export default Footer