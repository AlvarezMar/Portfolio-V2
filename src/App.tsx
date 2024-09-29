import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Contact from './views/Contact'

function App() {

  return (
    <>
    <div className='grid grid-cols-[auto_1fr]'>
      <Sidebar/>
      <div>
        <main>
          <Topbar/>
          <Contact/>
        </main>
          <Footer/>
      </div>

    </div>
    </>
  )
}

export default App
