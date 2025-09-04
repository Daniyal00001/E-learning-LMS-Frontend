
import './App.css'
import Navbar from './components/ui/navbar';
import Login from './pages/login'
import { Toaster } from "react-hot-toast"; 


function App() {
  return (
    <>
      <main>
        navbar
        <Navbar />
        <Login />
      </main>



      {/* ======================= toaster globally added =================================== */}
       <Toaster position="top-right" />
    </>
  )
}

export default App
