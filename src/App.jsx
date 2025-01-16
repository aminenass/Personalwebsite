import Navbar from './navbar'
import './index.css'
import Heropage from './heropage'
import Contact from './contactus'
import Aboutme from './aboutme'
import Footer from './footer'
import Skills from './skills'
import { useRef } from 'react'






function App() {



  const homeRef = useRef(null)
  const contactRef = useRef(null)
  const aboutmeRef = useRef(null)
  const skillsRef = useRef(null)
  

  const scroll = (ref) =>{
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth",block: "start" });
    } else {
      console.error("Reference is not defined or accessible");
    }
    }

  return (
    <>
     
      <Navbar scroll={scroll} aboutmeRef={aboutmeRef} homeRef={homeRef}  skillsRef={skillsRef} contactRef={contactRef}/>
      <Heropage scroll={scroll} homeRef={homeRef} contactRef={contactRef}/>
      {/* <Projects/>   */}
      <Aboutme aboutmeRef={aboutmeRef}/>
      <Skills skillsRef={skillsRef}/>
      <Contact contactRef={contactRef}/>
  
      <Footer/> 
    
    </>
  )
}

export default App
