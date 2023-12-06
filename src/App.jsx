import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const params = new URLSearchParams(window.location.search); // Get query params
  const sessionToken = params.get('token') || '';

  return (
    <>
      <h1>Vite + React CMP Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => {
          console.log('calling parent method');
          window.parent.postMessage('callParentMethod'); 
        }}>Call parent method</button>
      </div>
      <div>
        {JSON.stringify(sessionToken)}
      </div>
    </>
  )
}

export default App
