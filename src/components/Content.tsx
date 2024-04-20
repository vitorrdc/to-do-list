import styles from './Content.module.css'

import ClipBoard from '../assets/clipboard.png'

export function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.countTasks}>
        <div className={styles.createdTasks}>
          <span className={styles.createdTasksTitle}>Tarefas criadas</span>
          <span className={styles.countCreatedTasks}>0</span>
        </div>
        <div className={styles.doneTasks}>
          <span className={styles.doneTasksTitle}>Concluídas</span>
          <span className={styles.countDoneTasks}>0</span>
        </div>
      </div>
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
    </div>
  )
}
