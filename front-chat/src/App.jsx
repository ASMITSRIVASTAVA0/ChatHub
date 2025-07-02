import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import toast, { Toaster } from 'react-hot-toast';
import JoinCreateChat from './components/JoinCreateChat';
const notify = () => toast.success('Here is your toast.');



function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
      <JoinCreateChat/>
    // </>
  )
}

export default App;
