import styles from './EmpityTasksMessage.module.css'

import ClipBoard from '../assets/clipboard.png'

export function EmpityTasksMessage() {
  return (
    <div className={styles.taskArea}>
      <img src={ClipBoard} alt="ClipBoard Image" />
      <div className={styles.withoutTasks}>
        <div className={styles.messageBold}>
          Você ainda não tem tarefas cadastradas
        </div>
        <div className={styles.messageWithoutBold}>
          Crie tarefas e organize seus itens a fazer
        </div>
      </div>
    </div>
  )
}
