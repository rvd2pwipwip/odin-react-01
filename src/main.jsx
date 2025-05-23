import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './Greeting.jsx'
import Syntax from './Syntax.jsx'
import TodoList from './TodoList.jsx'
import Bio from './Bio.jsx'
import PackingList from './PackingList.jsx'
import List from './rendering-lists/Scientists.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
  </StrictMode>,
)
