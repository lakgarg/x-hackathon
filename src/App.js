import './App.css';
import logo1 from './components/x-hack/X-earth logo.webp'
import logo2 from './components/x-hack/1 (1).webp'
import logo3 from './components/x-hack/2 (1).webp'
import logo4 from './components/x-hack/3 (1).webp'
import logo5 from './components/x-hack/4 (1).webp'
import logo6 from './components/x-hack/5 (1).webp'
import logo7 from './components/x-hack/6.webp'
import logo8 from './components/x-hack/8.webp'
import logo9 from './components/x-hack/9.webp'
import logo10 from './components/x-hack/X-earth website.png'
import logo11 from './components/x-hack/q.webp'
import logo12 from './components/x-hack/w.webp'
import logo13 from './components/x-hack/e.webp'
import logo14 from './components/x-hack/r.webp'
import logo15 from './components/x-hack/t.webp'
import logo16 from './components/x-hack/y.webp'
import logo17 from './components/x-hack/16.webp'
import logo18 from './components/x-hack/17.webp'
import logo19 from './components/x-hack/19.webp'
import logo20 from './components/x-hack/20.webp'
import logo21 from './components/x-hack/prizes.webp'
import logo22 from './components/x-hack/22.webp'
import logo23 from './components/x-hack/23.webp'
import logo24 from './components/x-hack/24.webp'
import logo25 from './components/x-hack/25.webp'
import logo26 from './components/x-hack/26.webp'
import logo27 from './components/x-hack/timeline.webp'

function App() {
  return (
    <div className="App">
      <div className='navb'>
        <div>
          <img className='navimg1' src={logo1}/>
        </div>
        <div className='navb2'>
          <img className='navimg2'  src={logo2}/>
          <img className='navimg2'  src={logo3}/>
        </div>
      </div>
      <img className='navimg3' src={logo4} />
      <p className='text1'>Harnessing <b className='text2'>Artificial Intelligence </b>for a</p>
      <p className='text3'>Sustainable Future</p>
      <div className='tagdiv'>
        <img src={logo5}/>
        <img src={logo6} />
      </div>
      <div className='pdiv'>
        <p className='p1'>Sustainability is a global concern, and harnessing the power of AI to address environmental, social, and economic challenges is<br/> paramount. Are you passionate about both cutting-edge technology and a greener, more sustainable world? This hackathon aims to<br/> bring together the brightest minds to develop AI solutions for sustainability.</p>
        <p className='p2'>Look no further! Our upcoming hackathon X-Earth is the perfect opportunity to bring<br/> these two passions together. </p>
      </div>
     <img className='img1' src={logo7} />
     <p className='p3'>X-Earth welcomes the participation of School Students from the 9th to 12th class, college students. Industry participants and startups & <br/> MSMEs from all across the country to contribute to the nation-building initiative. The teams can fill out the application against various<br/> pre-defined themes available on the official website of X-Earth.</p>
     <div className='register'>
       <h1>How to <br/> Register ?</h1>
       <div className='register1'>
         <p>If you are a participant, visit <a href='https://devfolio.com'>https://devfolio.com </a>for<br/> registration. However, you need to have the authorization<br/> letter from your respective institution (valid for schools and <br/> colleges) in case your team is selected for the final round.</p>
         <span><strong>There is NO registeration fee</strong></span>
         <a href='/'><img src={logo6} /></a>
       </div>
     </div>
     <div className='pdiv1'>
       <p>Each team would mandatorily comprise 2-6 members,<br></br> 
       including the team leader. Members from different <br/>
       branches/interests are encouraged to form a team.<br/>
      <br></br>
       We encourage gender equity and therefore teams having <br></br> 
       at least one Female Member,  will score  extra 5 points in<br></br> 
       each round of the Hackathon.</p>
       <h1>Team<br></br> Formation</h1>
     </div>

     <div className='pdiv3'>
      <h1>Tracks</h1>
       <p>Our hackathon is an effort to bridge the gap between<br/>
       technological innovation and environmental conservation. <br/>
       Join us as we explore how AI can drive positive change and<br/>
       contribute to a more sustainable future for the generations <br/>
       to come through the following tracks:</p>
     </div>

     <div className='sector'>
       <img src={logo8}/>
       <img src={logo9}/>
     </div>

    <h3 className='tech-track'>Technology Tracks</h3>

    <div className='tech'>
      <div>
        <p>Artificial Intelligence and <br></br>Machine Learning</p>
      </div>
      <div>
       <p>Data Science, Big Data <br></br>Analytics and Data curation</p>
      </div>
      <div>
        <p>Sensors, Networking, <br></br>Actuator & controls</p>
      </div>
      <div>
        <p>Positioning and Precision <br></br>Technologies</p>
      </div>
      <div>
        <p>Cyber Security & Cyber Security <br></br>for Physical Infrastructure</p>
      </div>
      <div>
        <p>Robotics & Autonomous <br></br>Systems</p>
      </div>
    </div>

    <img className='mode-img' src={logo10} />
    <div className='mode-hack'>
      <img src={logo11}/>
      <img src={logo12}/>
      <img src={logo13}/>
    </div>
    <div className='mode-hack'>
      <img src={logo14}/>
      <img src={logo15}/>
      <img src={logo16}/>
    </div>
    <h1 className='finale'>Grand FINALE</h1>
    <h1 className='offline'>offline mode at</h1>
    <div className='off-logo'>
      <img src={logo18}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='dates'>
      <img src={logo19}/>
      <div className='dates1'>
        <h1>28th-29th April 2024</h1>
      </div>
    </div>
  <img className='img-fluid' src={logo27}/>
  <div className='money'>
    <h1>Prizes Upto 5,00,00</h1>
  </div>
  <img className='img-fluid' src={logo20} />
  <div className='prize'>
    <img src={logo21}/>
  </div>

  <div className='buttons-down'>
    <div className='down1'>
      <p>Idea-Presentation-Format</p>
      <p><i class="fa-solid fa-arrow-down" style={{color:'white'}}></i></p>
    </div>
    <div className='down1'>
      <p>Guidelines</p>
      <p><i class="fa-solid fa-arrow-down" style={{color:'white'}}></i></p>
    </div>
    <div className='down1'>
      <p>Project-Submission-Format</p>
      <p><i class="fa-solid fa-arrow-down" style={{color:'white'}}></i></p>
    </div>
  </div>

  <div className='logo5'>
    <img src={logo5}/>    
  </div>  
  <div>

  <div className='footer'>
    <div className='footer-1'>
      <div className='footer-left'>
        <a href=''>About Us</a>
        <a href=''>Sponsor</a>
        <a href=''>Challenges</a>
        <a></a>
        <br/>
        <p className='contact'>Contact:</p>
        <p className='contact-links'>Mohit@Buzzonearth.com</p>
        <p className='contact-links'>Manoj@Amrita.com</p>
        <p className='contact-links'>+91 6307946504</p>
      </div>
      <div className='footer-right'>
        <img src={logo25}></img>
        <img src={logo26}></img>
      </div>
    </div>
    <img src={logo24} className='footer-img'/>
    <div className='footer-2'>
      <p>Ai and SustainabilitY</p>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
