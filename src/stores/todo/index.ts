import { defineStore } from 'pinia'
import { STORE_DEFINE } from '@/stores/constant'
import { todoApi } from '@/api/todo'
import { uuid } from '@/utils'

export interface TodoListItem {
  key: string
  value: string
}

export interface TodoStateTree {
  todoList: TodoListItem[]
}

export interface TodoActionsTree {
  fetchTodoList(): Promise<void>
  addTodo(value: string): void
  delTodo(key: string): void
}

export const useTodoStore = defineStore<
  string,
  TodoStateTree,
  {},
  TodoActionsTree
>(STORE_DEFINE.TODO, {
  state: () => {
    return {
      todoList: [],
    }
  },
  actions: {
    async fetchTodoList() {
      try {
        const { records } = await todoApi.getList()
        this.todoList = records
      } catch (error) {
        console.log('error', error)
      }
    },
    addTodo(value: string) {
      this.todoList.push({
        key: uuid(),
        value,
      })
    },
    delTodo(key: string) {
      this.todoList = this.todoList.filter(item => item.key != key)
    },
  },
})
