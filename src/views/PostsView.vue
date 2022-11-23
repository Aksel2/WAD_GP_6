<template>
  <div><Header /></div>
  <post-comp
    v-for="post in posts"
    v-bind:key="post.postId"
    v-bind:post="post.post"
    v-bind:userId="post.userId"
  ></post-comp>
  <div class="resetButton">
    <button v-on:click="resetLikes">Reset likes</button>
  </div>
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

.resetButton button {
  font-family: "Monospace", Monaco;
  background-color: #3fb984;
  width: 11%;
  height: 40px;
  border-radius: 15px;
}

</style>
