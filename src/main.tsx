import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.tsx'
import { ThemeProvider } from './Provider/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
