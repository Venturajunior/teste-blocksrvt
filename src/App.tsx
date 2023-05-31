import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './components/Router'
import { GlobalStyles } from './styles/global'
import { FamiliesProvider } from './contexts/FamiliesContext'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <FamiliesProvider>
        <RoutesApp />
      </FamiliesProvider>
    </BrowserRouter>
  )
}

export default App
