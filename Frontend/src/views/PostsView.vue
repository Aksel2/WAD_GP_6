<template>
  <div class="posts">
    <HeaderBar />
    <button class="logbtn" v-on:click="resetLikes">Logout</button>
    <post-comp
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:body="post.body"
      v-bind:date="post.date"
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
  data() {
    return {
      posts: [],
    };
  },
  components: { PostComp },
  methods: {
    resetLikes: function () {
      this.$store.dispatch("resetLikesAct");
    },
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    // call fetchPosts() when this element (AllPosts) mounts
    this.fetchPosts();
    console.log(this.posts);
    console.log("mounted");
  },
};
</script>

<style scoped>
.posts button {
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
