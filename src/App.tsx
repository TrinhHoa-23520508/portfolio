import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeColor } from "./utils/ColorsConstant"


const App = () => {
  return (
    <div className={ThemeColor.background}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
