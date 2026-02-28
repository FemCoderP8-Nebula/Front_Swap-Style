import { useState } from 'react'
import HangerLoading from "./components/organisms/Loading/HangerLoading"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HangerLoading/>

        </div>
    </>
  )
}

export default App
