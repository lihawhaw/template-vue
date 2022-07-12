<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
const iptRef = ref('')

function onEnter(payload: KeyboardEvent) {
  if (!iptRef.value) return
  store.addTodo(iptRef.value)
  iptRef.value = ''
}

onMounted(() => {
  store.fetchTodoList()
})
</script>

<template>
  <div class="container mx-auto w-1/2 min-w-sm max-w-2xl shadow-xl">
    <div class="mt-20">
      <input class="h-40px w-full rounded-6px border border-gray-500 border-solid" v-model.trim="iptRef"
        @keyup.enter="onEnter" placeholder="enter to add" />
    </div>
    <div class="m-1">
      <div class="h-40px p-2px flex items-center justify-between shadow shadow-gray-500 cursor-pointer mt-6"
        v-for="(item) in store.todoList" :key="item.key">
        <div>{{ item.value }}</div>
        <div class="w-20px h-20px text-red-900 text-center border border-red-700 border-solid rounded-full leading-4"
          @click="store.delTodo(item.key)">-</div>
      </div>
    </div>
  </div>
</template>