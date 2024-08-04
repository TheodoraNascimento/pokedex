
import GlobalStyled from './styles/globalStyled';
import { ThemeProvider } from './components/contexts/theme-context'
import { AppRoutes } from './components/server/pages/routes';


function App() {
  return (
    <>
      <GlobalStyled/>
      <ThemeProvider>
      
      <AppRoutes/>
      </ThemeProvider>
     
     
    </>
  )
}



export default App
