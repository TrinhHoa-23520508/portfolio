
import { createRoot } from "react-dom/client"
import App from "@/App.tsx"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StrictMode } from "react"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ProjectPage from "./pages/Project"
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from "./context/LanguageContext"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="projects" element={<ProjectPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider> 
    </ThemeProvider>
  </StrictMode>
)
