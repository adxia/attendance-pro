import { BrowserRouter,Routes,Route } from "react-router-dom"
import RootLayout from "./RootLayout"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Setting from './pages/Setting'
import './App.css'
function App() {
  

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="Setting"  element={<Setting/>}/>

            </Route>
            <Route path='*' element={<NotFound/>}/>

          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
