<template>
  <div>
   
    <!-- <h2>Index- Index - app</h2> -->
    <router-view></router-view>
    <!-- <Foot></Foot> -->
    <VFoot></VFoot>
  </div>
</template>

<script>
import Foot from "@/components/Foot.vue";
import VFoot from "@/components/VFoot.vue";
export default {
  components: {
    Foot,
    VFoot
  }
};
</script>

<style scoped>
</style>