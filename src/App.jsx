import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}



export default App
