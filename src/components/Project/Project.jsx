import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";




export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Courier Order Booking System</h3>
              <p>  A full-stack courier order booking application where users can book parcels, 
        enter sender & receiver details, select delivery type, and track order status in real time.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>

          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                  <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
{/*                      
    <GlassCard
      displacementScale={120}
      blurAmount={0.02}
      cornerRadius={30}
    > */}
      <div style={{ padding: "30px" }}>
        <h3>Courier Delivery Tracking System</h3>
        <p>A delivery management system that allows delivery agents to update parcel status, 
        mark deliveries as completed</p>
      </div>
    {/* </GlassCard> */}
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
  
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
               <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
               
              </div>
            </header>
            <div className="body">
              <h3>Enterprise Resource Planning (ERP) System</h3>
              <p> A comprehensive ERP system to manage business operations including inventory, 
        employee management, payroll, sales, and reporting — all in one unified platform.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>Node.js</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                 <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
               
              </div>
            </header>
            <div className="body">
  <h3>Courier Management Platform</h3>
  <p>
    Developed a secure courier management platform with CRUD functionality, 
    role-based access control for admin, sender & delivery agent, and a robust 
    MySQL database with normalized schema design for efficient shipment tracking.
  </p>
</div>
<footer>
  <ul className="tech-list">
    <li>React</li>
    <li>Node.js</li>
    <li>MySQL</li>
  </ul>
</footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
   <a href="https://github.com/" target="_blank" rel="noreferrer">                  <img src={githubIcon} alt="Visit site" />
                </a>
              
              </div>
            </header>
            <div className="body">
             <h3>Courier Delivery Tracking System</h3>
        <p>A delivery management system that allows delivery agents to update parcel status, 
        mark deliveries as completed</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>mongodb</li>
                <li>express.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
   <a href="https://github.com/" target="_blank" rel="noreferrer">
                     <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
               <h3>Courier Delivery Tracking System</h3>
              <p> A delivery management system that allows delivery agents to update parcel status, 
        mark deliveries as completed, and enables customers to track their shipment live.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>


            
          </div>


          
          <div>

</div>
      

        </ScrollAnimation>



      </div>





    </Container>
  );
}
