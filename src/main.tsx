import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Note: StrictMode removed to prevent WebGL double-initialization issues with React Three Fiber
createRoot(document.getElementById('root')!).render(<App />)
