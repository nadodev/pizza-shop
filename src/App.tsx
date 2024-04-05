import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { routes } from './pages/routes'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.show" />
      <RouterProvider router={routes} />
    </HelmetProvider>
  )
}

export default App
