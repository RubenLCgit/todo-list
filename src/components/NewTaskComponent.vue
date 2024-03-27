<script setup lang="ts">
import { ref, computed } from 'vue'

const emits = defineEmits(['new-task'])

const taskName = ref('')

function addTask() {
  emits('new-task', taskName.value)
  taskName.value = "";
}

const nameIsEmpty = computed(() => {
  return taskName.value.trim().length === 0;
})

</script>

<template>
  <div class="container">
    <div class="container__input">
      <v-text-field v-model="taskName" placeholder="New task name"></v-text-field>
    </div>
    <div class="container__btn">
      <v-btn id="saveButton" color="green" @click="addTask()" :disabled="nameIsEmpty">Save</v-btn>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

.container__input {
  flex-grow: 1;
  margin-right: 20px;
  color: rgb(171, 171, 171);
}

.container__btn {
  margin-top: 10px;
}
</style>
