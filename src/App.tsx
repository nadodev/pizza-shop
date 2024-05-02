import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { routes } from './pages/routes'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.show" />
      <Toaster richColors position="top-right" />
      <RouterProvider router={routes} />
    </HelmetProvider>
  )
}

export default App
