import styles from './Form.module.css'

import { PlusCircle } from 'lucide-react'

import { ITask } from '../App'

interface FormTypes {
  tasks: ITask[]
  setTasks: (value: ITask[]) => void
  inputValue: string
  setInputValue: (value: string) => void
}

export function Form({
  setTasks,
  tasks,
  inputValue,
  setInputValue,
}: FormTypes) {
  function handleNewTask(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (inputValue.length === 0) {
      return alert('Por favor, preencha o campo de tarefa.')
    }

    const newTask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }
    setTasks([...tasks, newTask])
    setInputValue('')
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleNewTask}>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
