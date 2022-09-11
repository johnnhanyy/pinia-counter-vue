<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useCounterStore1 } from "./store/use_counter";
import { storeToRefs ,mapActions } from "pinia";

defineProps<{
  msg: string;
}>();

const main = useCounterStore1();
const { counter, name } = storeToRefs(main) ;
const {addOne}=main;
function add(value:number){
  main.$patch({
    counter:counter.value+value
  });
}
function add1(value:number){
  main.$patch(state=>(state.counter+=value));
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with john
      <h4>{{counter}}</h4>
      <button @click="main.addOne"> + </button>
      <br>
      <button @click="addOne"> + </button>
      <br>
      <button @click="main.minusOne"> - </button>
      <br>
      <button @click="add(5)"> add 5</button>
      <br>
      <button @click="add1(10)"> add 10</button>
      <br>
      <button @click="main.reset"> reset</button>
      
      
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
