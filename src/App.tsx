import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import About from './views/About'
import Contact from './views/Contact'
import Experience from './views/Experience'

function App() {

  return (
    <>
    <div className='grid grid-cols-[auto_1fr]'>
      <Sidebar/>
      <div>
        <main>
          <Topbar/>
          <Experience/>
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
