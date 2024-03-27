<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  id: number,
  name: string,
  completed: boolean
}>()

defineEmits(['taskCompleted', 'delete-task']);

const taskCompleted = ref(props.completed);

const nameLineThrough = computed(() => props.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' });
</script>

<template>
  <div class="taskListItem">
    <div class="taskListItem__checkbox">
      <v-checkbox @click="$emit('taskCompleted', id)" v-model="taskCompleted"></v-checkbox>
    </div>
    <div class="taskListItem__nameTask" :style="nameLineThrough">{{name}}</div>
    <v-btn color="warning" @click="$emit('delete-task', id)">Remove</v-btn>
  </div>
</template>

<style scoped>

.taskListItem{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  background-color: aliceblue;
}

.taskListItem__nameTask{
  flex-grow: 1;
  padding: 20px;
}

</style>