<template>
  <div class="posts">
    <h2>Posts View</h2>
    <post-comp/>
  </div>
</template>

<script>
import PostComp from "@/components/PostComp.vue";

export default {
  name: "PostsView",
  components: {PostComp},
  methods: {},
};
</script>

<style scoped></style>
