import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

function App() {

  return (
    <>
    <div className='grid grid-cols-[auto_1fr]'>
      <Sidebar/>
      <main>
        <Topbar/>
      </main>

    </div>
    </>
  )
}

export default App
