<template>
  <div class="main">404: Page not found error.</div>
</template>

<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "../components/FooterBar.vue";
</script>
<script>
export default {
  name: "PageNotFound",
};
</script>
<style scoped>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>
