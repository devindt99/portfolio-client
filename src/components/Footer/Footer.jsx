import './Footer.scss';
import linkedInLogo from "../../assets/LinkedInLogo.png"
import gitHubLogo from "../../assets/ghwhite.png"
const Footer = () => {

    return (
        <footer className="footer">
        <div className="footer__item">
            <h4>Devin Dellazizzo Toth</h4>
            <a href= "mailto: name@email.com">devindt99@gmail.com</a>
        </div>
        <div className="footer__item">
        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/devin-dellazizzo-toth-40314644/">
                <img className="footer__image" src={linkedInLogo} alt="LinkedIn Logo"/>
            </a>
            <a href="https://github.com/devindt99/">
                <img className="footer__image" src={gitHubLogo} alt="GitHub Logo"/>
            </a>     
        </div>
        </div>
        <div className="footer__item">
            © Devin Dellazizzo Toth <br/>All rights reserved
            
        </div>
    </footer>
    );
};

export default Footer;