<script setup lang="ts">
import type MyTask from '@/core/task';
import TaskListItem from './TaskListItem.vue';

defineProps<{
  tasks: MyTask[]
}>()

defineEmits(['taskCompleted','delete-task']);
</script>

<template>
  <TaskListItem v-for="task in tasks" :key="task.id" :id="task.id" :name="task.name" :completed="task.completed" @task-completed="$emit('taskCompleted', task.id)" @delete-task="$emit('delete-task', task.id)"/>
</template>