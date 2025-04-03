import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TodoList from './TodoList.tsx'

import { Provider } from 'react-redux'
import store from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <TodoList />
    </Provider>
  </StrictMode>,
)
