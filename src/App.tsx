import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ShoppingCartContextProvider>
          <Router />
        </ShoppingCartContextProvider>

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
