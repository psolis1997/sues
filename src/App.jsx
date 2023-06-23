import {HashRouter} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Links from './Links'

import './App.css'

function App() {

  return (
    <HashRouter>
      <Header />
      <Links />
      <Footer/>
    </HashRouter>
  )
}

export default App
