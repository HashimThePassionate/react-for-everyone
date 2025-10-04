import { useState } from 'react'
import './App.css'
import AuthForm from './components/AuthForm.jsx';
import GoalList from './components/GoalList.jsx';
import Header from './components/Header.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div>
      <h1>My React App 🚀</h1>
      <AuthForm />
    </div>
     <main>
        <GoalList />
      </main>
     
    </>
  )
}

export default App
