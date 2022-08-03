import React from 'react'
import { useDarkMode } from '../../../hooks'

interface ITask {
  title: string
  description: string
}

const Task:React.FC<ITask> = ({ title, description }) => {

  const [darkMode] = useDarkMode()

  return (
    <section className={`task-preview ${darkMode ? 'dark': ''}`}>
      <h4>{title}</h4>
      <p>{description}</p>
    </section>
  )
}

export default Task