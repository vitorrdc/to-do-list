import { Form } from './components/Form'
import { Header } from './components/Header'
import { EmpityTasksMessage } from './components/EmpityTasksMessage'
import { Content } from './components/Content'

import styles from './App.module.css'

import { useState } from 'react'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export interface InputValueType {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          tasks={tasks}
          setTasks={setTasks}
        />
        {tasks.length > 0 ? (
          <Content tasks={tasks} setTasks={setTasks} />
        ) : (
          <EmpityTasksMessage />
        )}
      </div>
    </div>
  )
}

export default App
