<template>
  <div id="guide">
    <h2>guide - -guide - guide</h2>
    <SwiperDemo id="swiperone" :options="swiperOptions">
      <SwiperItem v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt class="g-img" />
      </SwiperItem>
    </SwiperDemo>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        require("@/assets/images/img1.jpg"),
        require("@/assets/images/img2.jpg"),
        require("@/assets/images/img3.jpg"),
        require("@/assets/images/img4.jpg")
      ],
      swiperOptions: {
        loop: false,
        autoplay: {
          delay: 1500
        }
      }
    };
  },
  mounted() {
    if (localStorage.pcount) {
      localStorage.pcount++;
      if (localStorage.pcount > 6) {
        this.$router.push({ name: "home" });
      }
    } else {
      localStorage = 1;
    }
  }
};
</script>

<style scoped>
#guide,
#swiperone,
.g-img {
  width: 100%;
  height: 100%;
}
</style>