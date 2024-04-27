import { ITask } from '../App'

import styles from './Content.module.css'

import { Check, Trash2 } from 'lucide-react'

interface ContentType {
  tasks: ITask[]
  setTasks: (value: ITask[]) => void
}

export function Content({ tasks, setTasks }: ContentType) {
  function handleCheckedTask(id: number, taskChecked: boolean) {
    const updateData = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: !taskChecked }
      }
      return task
    })
    setTasks(updateData)
  }

  function handleDeleteTask(id: number) {
    const deletedTask = tasks.filter((task) => task.id !== id)
    setTasks(deletedTask)
  }

  const doneTask = tasks.reduce((acc, currentTask) => {
    if (currentTask.isChecked) {
      return acc + 1
    }
    return acc
  }, 0)

  return (
    <div className={styles.content}>
      <div className={styles.countTasks}>
        <div className={styles.createdTasks}>
          <span className={styles.createdTasksTitle}>Tarefas criadas</span>
          <span className={styles.countCreatedTasks}>{tasks.length}</span>
        </div>
        <div className={styles.doneTasks}>
          <span className={styles.doneTasksTitle}>Concluídas</span>
          <span
            className={styles.countDoneTasks}
          >{`${doneTask} de ${tasks.length}`}</span>
        </div>
      </div>
      {tasks.map((task) => {
        return (
          <div key={task.id} className={styles.taskContent}>
            <label
              htmlFor="checkbox"
              onClick={() => handleCheckedTask(task.id, task.isChecked)}
            >
              <input readOnly type="checkbox" checked={task.isChecked} />
              <span
                className={
                  task.isChecked
                    ? styles.checkboxChecked
                    : styles.checkboxUnchecked
                }
              >
                {task.isChecked && <Check size={15} color="white" />}
              </span>
              <div
                className={
                  task.isChecked ? styles.paragraphChecked : styles.paragraph
                }
              >
                {task.text}
              </div>
            </label>
            <button onClick={() => handleDeleteTask(task.id)}>
              <Trash2 size={20} color="#808080" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
