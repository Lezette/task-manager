export type Task = {
  title: string
  description: string
  subTask: SubTask[]
  status: status
}

export type SubTask = {
  name: string
  status: boolean
}

export type status = 'Todo' | 'Doing' | 'Done'

export type Board = {
  name: string
}

export type mode = 'light' | 'dark'