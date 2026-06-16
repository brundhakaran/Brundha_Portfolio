import { Container } from "./styles";
import Brundha from "../../assets/Brundha.jpeg";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import mongodb from "../../assets/mongodb.svg";
export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>Hi there! I'm Brundha, an enthusiastic Software Engineer with expertise in web development, Angular, and the MERN Stack, focused on building scalable and user-friendly software solutions.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>I build responsive web applications, develop scalable backend services, and create user-friendly digital experiences using Angular and the MERN Stack</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          {/* <p>I also work with CMS platforms like WordPress and Shopify to streamline content management.</p> */}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor of Information Technology </h4>
            <p>Annai college of engineering and Technology, Coimbatore | August 2016 - 2020</p>
            <p>7.06 CGPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3><h4>Software Developer</h4>
            <p>Femtosoft Technology | October 2022 - 2025</p>
            <p>Chennai, India</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}><img src={python} alt="python" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}><img src={java} alt="java" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}><img src={jsIcon} alt="JavaScript" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}><img src={reactIcon} alt="React" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}><img src={typescriptIcon} alt="Typescript" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}><img src={vueIcon} alt="Vue" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}><img src={wordpress} alt="Wordpress" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}><img src={shopify} alt="shopify" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}><img src={htmlIcon} alt="Html" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}><img src={cssIcon} alt="Css" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}><img src={boostrapIcon} alt="bootstrap" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}><img src={mongodb} alt="mongodb" /></ScrollAnimation></div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
     <img src={Brundha} alt="Brundha" style={{ borderRadius: "50px" }}/>
        </ScrollAnimation>
      </div>

      
    </Container>
  )
}
