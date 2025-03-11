import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Allservice from './components/pages/Allservice'
import Consistent from './components/pages/Consistent'
import Home from './components/pages/Home'
import Reviews from './components/pages/Reviews'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Consistent></Consistent>
    <Reviews></Reviews>
    <Footer></Footer>
    </>
  )
}

export default App
