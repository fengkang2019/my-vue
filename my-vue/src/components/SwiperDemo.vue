<template>
  <div class="swiper-container" :id="id">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "options"],
  mounted() {
    let myswiper = new Swiper("#" + this.id, this.options);
  }
};
</script>