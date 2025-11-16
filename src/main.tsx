import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@app/App'

const CONTAINER = document.getElementById('root')!
const ROOT = createRoot(CONTAINER!)

// ===============|| MAIN - REACT DOM RENDER  ||=============== //

ROOT.render(
	<StrictMode>
		<App />
	</StrictMode>
)
