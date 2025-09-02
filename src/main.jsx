import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { Provider } from 'react-redux'
import appStore from './store/appStore';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={appStore}>
     <App />
   </Provider>
  </StrictMode>,
)
