import { useEffect } from 'react'

import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import About from './views/About'
import Contact from './views/Contact'
import Experience from './views/Experience'
import Home from './views/Home'
import Projects from './views/Projects'

function App() {

  useEffect(() => {
    const handleScroll = (e, targetId) => {
      e?.preventDefault();
      
      const targetElement = document.getElementById(targetId);
  
      if (!targetElement) return;
  
      const navHeight = document.getElementById('topbar').offsetHeight;
      const targetPosition = targetElement.offsetTop - navHeight;
  
      window.scrollTo({
        top: targetPosition,
      });
  
      history.pushState(null, '', `#${targetId}`);
    };
  
    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href').substring(1);
  
      if (targetId === '') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
        });
  
        history.pushState(null, '', '#');
      } else {
        handleScroll(e, targetId);
      }
    };
  
    const anchors = document.querySelectorAll('#links a');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
  
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
    <div className='grid grid-cols-[auto_1fr]'>
      <Sidebar/>
      <div>
        <main>
          <Topbar/>
          {/* <Home/>
          <Experience/> */}
          <Projects/>
          <About/>
          <Contact/>
        </main>
          <Footer/>
      </div>

    </div>
    </>
  )
}

export default App
