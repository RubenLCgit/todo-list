<script setup lang="ts">
import type MyTask from '@/core/task'
import { computed } from 'vue';


const props = defineProps<{
  tasks: MyTask[]
}>()

const totalTasks = computed(() => props.tasks.length);

const completedTasks = computed(() => props.tasks.filter((t) => t.completed).length);
</script>

<template>
  <div class="cardContainer">
    <v-card class="cardContainer__card" text="Registered Tasks">
      <h1 class="cardContainer__totalTasks">{{ totalTasks }}</h1>
    </v-card>
    <v-card class="cardContainer__card" text="Complete Tasks">
      <h1 class="cardContainer__taskCompleted">{{ completedTasks }}</h1>
    </v-card>
  </div>
</template>

<style scoped>
.cardContainer {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}

.cardContainer__card {
  text-align: center;
  font-size: 20px;
  border: solid black 1px;
}

.cardContainer__taskCompleted {
  color: green;
}

.cardContainer__totalTasks {
  color: #fb8c00;
}
</style>
