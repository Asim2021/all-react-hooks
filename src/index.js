import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Reducer from './hooks/Reducer'
import Context from './hooks/Context'
import Ref from './hooks/Ref'
import Callback from './hooks/Callback'
import Memo from './hooks/Memo'
import LayoutEffect from './hooks/LayoutEffect'
import ImperativeHandle from './hooks/ImperativeHandle'
import DebugValue from './hooks/DebugValue'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='reducer' element={<Reducer />} />
        <Route path='context' element={<Context />} />
        <Route path='ref' element={<Ref />} />
        <Route path='callback' element={<Callback />} />
        <Route path='memo' element={<Memo />} />
        <Route path='layout' element={<LayoutEffect />} />
        <Route path='imperative' element={<ImperativeHandle />} />
        <Route path='debug' element={<DebugValue />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
