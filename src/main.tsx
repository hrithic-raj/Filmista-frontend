import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { persistor } from './redux/persistor.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "";
console.log(CLIENT_ID)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GoogleOAuthProvider clientId={CLIENT_ID}>
            <App />
          </GoogleOAuthProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
