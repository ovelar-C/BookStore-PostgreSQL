import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import BookContext from './context/BookContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookContext>
        <UserContext>
          <App />
        </UserContext>
      </BookContext>
    </BrowserRouter>
  </StrictMode>,
)
