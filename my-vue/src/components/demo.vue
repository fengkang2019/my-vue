
<template>
  <div>
    <h2>demo - demo - demo</h2>
    <h2 id="box">num == {{num}}</h2>
    <h2>{{word|upper}}</h2>
    <h2>{{keys}}</h2>
    <p v-for="(student,i) in students" :key="i">{{student}}</p>
    <button @click="add">点我</button>
  </div>
</template>

<script>
import { word, msg } from "@/utils/es6";

import { keys, students, add } from "@/utils/model";
console.log(keys, students, add);
console.log(word, msg);

export default {
  name: "demo",
  data() {
    return {
      num: 1906,
      word: "good good study , day day up",
      keys,
      students
    };
  },
  methods: {
    add
  }
};
</script>

<style scoped>
h2 {
  color: red;
  background: plum;
}
</style>