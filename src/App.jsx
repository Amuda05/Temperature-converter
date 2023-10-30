import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TemperatureConverter from './Component/TemperatureConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TemperatureConverter/>
    
    </>
  )
}

export default App
