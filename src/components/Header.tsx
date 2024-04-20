import ToDoListLogo from '../assets/logo.png'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ToDoListLogo} alt="To do list logo" />
    </header>
  )
}
