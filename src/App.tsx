import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeColor } from "./utils/ColorsConstant"
import ScrollToTopButton from "./components/ScrollToTopButton"
import MessengerButton from "./components/MessengerButton"
import { useTranslation } from "react-i18next"
import PhoneButton from "./components/PhoneButton"


const App = () => {
  const {t} = useTranslation();
  return (
    <div className={`${ThemeColor.background} pt-[72px] w-full h-full`}>
      <Header/>
      <Outlet/>
      <MessengerButton facebookPageId="trinh.hoa.900085" label={t('messengerLabel')}/>
      <PhoneButton phoneNumber="0935900023" label={`${t('phoneLabel')} 📞`}/>
      <ScrollToTopButton/>
      <Footer/>
    </div>
  )
}

export default App
