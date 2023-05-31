import { HashRouter } from 'react-router-dom'
import { RoutesApp } from './components/Router'
import { GlobalStyles } from './styles/global'
import { FamiliesProvider } from './contexts/FamiliesContext'

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <FamiliesProvider>
        <RoutesApp />
      </FamiliesProvider>
    </HashRouter>
  )
}

export default App
