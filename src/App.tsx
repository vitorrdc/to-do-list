import { Form } from './components/Form'
import { Header } from './components/Header'

import styles from './App.module.css'
import { Content } from './components/Content'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Form />
        <Content />
      </div>
    </div>
  )
}

export default App
