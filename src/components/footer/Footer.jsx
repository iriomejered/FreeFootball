import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="#">Sobre nosotros</a></li>
                            <li><a href="#">Nuestros servicios</a></li>
                            <li><a href="#">Política de privacidad</a></li>
                            <li><a href="#">Programa de afiliados</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ayuda</h4>
                        <ul>
                            <li><a href="#">Preguntas frecuentes</a></li>
                            <li><a href="#">Envíos</a></li>
                            <li><a href="#">Devoluciones</a></li>
                            <li><a href="#">Estado de pedido</a></li>
                            <li><a href="#">Opciones de pago</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Tienda online</h4>
                        <ul>
                            <li><a href="#">Camisetas</a></li>
                            <li><a href="#">Zapatos</a></li>
                            <li><a href="#">Balones</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Síguenos</h4>
                        <div className="social-links">
                            <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="title-col">
                    <h4>©2025 FreeFootball. Todos los derechos reservados</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;