<template>
  <div class="main-div">
    <HeaderBar />
    <div class="content">
      <p>Information here</p>
    </div>
  </div>
</template>


<script setup>
import HeaderBar from "../components/HeaderBar.vue";
</script>

<script>
export default {
  name: "ContactView",
};
</script>

<style>
.content {
  margin-top: 100px;
}
</style>