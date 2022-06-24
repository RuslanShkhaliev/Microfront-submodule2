import React from 'react'
import {
  createRoot,
  Root,
} from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

let root: Root | null = null
// @ts-ignore
window['renderAbout'] = (containerId: string, _history: any) => {
  console.log(containerId, 'APP 1')
  root = createRoot(
    document.getElementById(containerId) as HTMLElement,
  )
  root.render(<App />)
}

// @ts-ignore
window['unmountAbout'] = (containerId: string) => {
  root?.unmount()
  root = null
  console.log('unmount root ', containerId)
}
reportWebVitals()
