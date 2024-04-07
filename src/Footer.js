import React from 'react';
// Importowanie komponentu Font Awesome i konkretnych ikon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="text-center p-4" style={{backgroundColor: "#4e342e", color: "#d8dec5"}}>
            <div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
            <p>© 2024 PWI. Wszelkie prawa zastrzeżone.</p>
        </footer>
    );
}

export default Footer;
