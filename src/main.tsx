import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import './style.scss'

const root = createRoot(document.getElementById('app')!)
root.render(<App />)
