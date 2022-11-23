<template>
  <div><Header /></div>
  <post-comp
    v-for="post in posts"
    v-bind:key="post.postId"
    v-bind:post="post.post"
    v-bind:userId="post.userId"
  ></post-comp>
  <button v-on:click="resetLikes">Reset likes</button>
  <div><Footer /></div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<script>
import PostComp from "@/components/PostComp.vue";

export default {
  name: "PostsView",
  data: function () {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
  },
  components: { PostComp },
  methods: {
    resetLikes: function () {
      this.$store.dispatch("resetLikesAct");
    },
  },
};
</script>

<style scoped>
</style>
