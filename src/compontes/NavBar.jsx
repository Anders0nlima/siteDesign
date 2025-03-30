import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

import styles from './NavBar.module.css';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Animação do logo
    const logo = logoRef.current;
    if (!logo) return;

    const originalText = 'Mekpool';
    const letters = originalText.split('');

    const animateLogo = () => {
      const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1
      });

      for (let i = letters.length; i > 1; i--) {
        timeline.to(logo, {
          text: {
            value: letters.slice(0, i).join('') + '|',
            delimiter: ''
          },
          duration: 0.2,
          ease: 'power2.inOut'
        });
      }

      timeline.to(logo, {
        text: { value: 'M|', delimiter: '' },
        duration: 0.5
      });

      for (let i = 2; i <= letters.length; i++) {
        timeline.to(logo, {
          text: {
            value: letters.slice(0, i).join('') + (i < letters.length ? '|' : ''),
            delimiter: ''
          },
          duration: 0.2,
          ease: 'power2.inOut'
        });
      }

      timeline.to(logo, {
        text: { value: originalText, delimiter: '' },
        duration: 0.2
      });
    };

    animateLogo();

    // Efeito de scroll no navbar
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;

      const scrollPosition = window.scrollY;
      const opacity = Math.min(scrollPosition / 200, 1);
      const backgroundColor = `rgba(0, 0, 0, ${opacity})`;
      
      navbar.style.backgroundColor = backgroundColor;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      gsap.killTweensOf(logo);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`} ref={navbarRef}>
        <button className={styles.menu_icon} onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <h1 className={styles.logo} ref={logoRef}>Mekpool</h1>
        <button className={styles.search_icon}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.menu_overlay}>
          <ul className={styles.menu_list}>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/bibliotecas">Bibliotecas</Link></li>
            <li><Link to="/junte-se">Junte-se</Link></li>
            <li><Link to="/">Mekpool</Link></li>
          </ul>

          {/* Footer dentro do menu */}
          <footer className={styles.menu_footer}>
            <div className={styles.footer_left}>
              <span>Sobre</span>
              <span>Bibliotecas</span>
              <span>Junte-se</span>
              <span>Mekpool</span>
            </div>
            <div className={styles.footer_right}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default NavBar;