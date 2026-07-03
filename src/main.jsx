import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import RTK_STORE from './RTK_Store/Store.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={RTK_STORE}>
    <App />
</Provider>
  </StrictMode>,
)
