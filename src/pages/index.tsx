import React from 'react'
import { Menu } from '../components/organism'
import { Task } from '../components/molecules'
const Homepage = () => {

  return (
    <main>
      <Menu />
      <main className="main-container">
          <Task title="Simple task" description="7 out of 15 subtasks" />
      </main>
    </main>
  )
}

export default Homepage