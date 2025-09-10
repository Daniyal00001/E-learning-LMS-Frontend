
import './App.css'
import Navbar from './components/ui/navbar';
import Login from './pages/login'
import { Toaster } from "react-hot-toast"; 
import { ThemeProvider } from "@/components/ui/theme-provider"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Navbar />
        <Login />
      </main>
      </ThemeProvider>

      {/* ======================= toaster globally added =================================== */}
       <Toaster position="top-right" />
    </>
  )
}

export default App
