import { useState } from 'react'
import './App.css'
import AuthForm from './components/AuthForm.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>My React App 🚀</h1>
      <AuthForm />
    </div>
     
    </>
  )
}

export default App
