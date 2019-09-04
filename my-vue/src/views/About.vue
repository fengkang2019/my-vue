<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Demo></Demo>
  </div>
</template>


<script>
import Demo from "../components/demo.vue";
export default {
  name: "about",
  components: {
    Demo
  }
};
</script>