import './App.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

function App() {

  return (
    <>
    <div className='grid grid-cols-[auto_1fr]'>
      <Sidebar/>
      <main>
        <Topbar/>
        <Footer/>
      </main>

    </div>
    </>
  )
}

export default App
