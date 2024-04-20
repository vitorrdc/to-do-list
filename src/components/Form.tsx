import styles from './Form.module.css'

import { PlusCircle } from 'lucide-react'

export function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
