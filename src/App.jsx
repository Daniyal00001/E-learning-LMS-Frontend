
import './App.css'
import Login from './pages/login'
import { Toaster } from "react-hot-toast"; 


function App() {
  return (
    <>
      <main>
        <Login />
      </main>



      {/* ======================= toaster globally added =================================== */}
       <Toaster position="top-right" />
    </>
  )
}

export default App
