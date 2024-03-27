<script setup lang="ts">

import { reactive} from 'vue';
import NewTaskComponent from '@/components/NewTaskComponent.vue';
import TaskListComponent from '@/components/TaskListComponent.vue';
import InfoTaskComponent from '@/components/InfoTaskComponent.vue';
import type MyTask from '@/core/task';


const tasks = reactive(new Array<MyTask>);

tasks.push(
  { id: 0, name: 'Create the most awesome todo application', completed: true },
  { id: 1, name: 'Add some computed info', completed: false },
  { id: 2, name: 'Publish in github pages', completed: false}
)

function addNewTask(value: string) {
  tasks.push(
    {id: nextId(tasks), name: value, completed: false}
  )
}

function nextId(list: Array<MyTask>) { 
  let nextId = 0;
  list.forEach(element => {
    if (element.id>nextId) {
      nextId = element.id
    }
  });
  return nextId+1;
}

function onTaskCompleted(id: number) {
  tasks[id].completed = !tasks[id].completed;
}

function deleteTask(idTask: number) {
  let index = tasks.findIndex((task) => task.id === idTask);
  tasks.splice(index, 1);
}

</script>

<template>
  <header>
    <h1>My Todos</h1>
  </header>

  <main>
    <NewTaskComponent @new-task="addNewTask"/>
    <TaskListComponent :tasks = 'tasks' @task-completed="onTaskCompleted" @delete-task="deleteTask"/>
    <InfoTaskComponent :tasks = 'tasks'/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
