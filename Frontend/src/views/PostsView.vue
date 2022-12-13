<template>
  <div class="main-div">
    <HeaderBar />
    <button class="logbtn" v-on:click="resetLikes">Logout</button>
    <post-comp
      v-for="post in posts"
      v-bind:key="post.postId"
      v-bind:post="post.post"
      v-bind:userId="post.userId"
    ></post-comp>
    <button v-on:click="resetLikes">Add Post</button>
    <button class="btn2" v-on:click="resetLikes">Delete all</button>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "../components/FooterBar.vue";
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
.main-div button {
  flex-direction: column;
  font-family: "Monospace", Monaco;
  background-color: #3fb984;
  width: 11%;
  height: 40px;
  border-radius: 15px;
}
.btn2 {
  margin-left: 10%;
}
.logbtn {
  margin-top: 100px;
}
</style>
