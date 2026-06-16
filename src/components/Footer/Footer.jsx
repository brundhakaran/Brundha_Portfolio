import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://Brundha.in" className="logo">
        
      </a>
      <div>
        <p>This Website was made with <img src={reactIcon} alt="React" /></p>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/brundha-karan-b20345267" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/Brundha" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=8946056833" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="https://t.me/Bindhukrish2201" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="https://www.instagram.com/minidha_krish" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
