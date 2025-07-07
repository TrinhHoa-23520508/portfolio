import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeColor } from "./utils/ColorsConstant"
import ScrollToTopButton from "./components/ScrollToTopButton"
import MessengerButton from "./components/MessengerButton"
import { useTranslation } from "react-i18next"


const App = () => {
  const {t} = useTranslation();
  return (
    <div className={`${ThemeColor.background} pt-[72px]`}>
      <Header/>
      <Outlet/>
      <MessengerButton facebookPageId="phong.86250" label={t('messengerLabel')}/>
      <ScrollToTopButton/>
      <Footer/>
    </div>
  )
}

export default App
