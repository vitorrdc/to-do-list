import { useState } from 'react'
import { ITask } from '../App'
import styles from './Content.module.css'
import { Check, Trash2 } from 'lucide-react'

interface ContentType {
  createdTasks: number
  doneTasks: number
  tasks: ITask[]
  setTasks: (value: ITask[]) => void
}

export function Content({ doneTasks, tasks, setTasks }: ContentType) {
  const [fillOfTrashIcon, setFillOfTrashIcon] = useState<string>('transparent')

  function handleCheckedTask(id: number, taskChecked: boolean) {
    const updateData = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: !taskChecked }
      }
      return task
    })
    setTasks(updateData)
  }

  return (
    <div className={styles.content}>
      <div className={styles.countTasks}>
        <div className={styles.createdTasks}>
          <span className={styles.createdTasksTitle}>Tarefas criadas</span>
          <span className={styles.countCreatedTasks}>{tasks.length}</span>
        </div>
        <div className={styles.doneTasks}>
          <span className={styles.doneTasksTitle}>Concluídas</span>
          <span className={styles.countDoneTasks}>{doneTasks}</span>
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
            <button>
              <Trash2
                size={20}
                color="#808080"
                onMouseEnter={() => setFillOfTrashIcon('#E25858')}
                onMouseLeave={() => setFillOfTrashIcon('transparent')}
                fill={fillOfTrashIcon}
              />
            </button>
          </div>
        )
      })}
    </div>
  )
}
