import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import App from './App'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-T95TJRG',
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
