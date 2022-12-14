<template>
  <div class="posts">
    <HeaderBar />
    <button class="logbtn" v-on:click="resetLikes">Logout</button>
    <div class="post" v-for="post in posts" :key="post.id">
      <post-comp
        v-bind:key="post.id"
        v-bind:message="post.message"
        v-bind:date="post.date"
      ></post-comp>
    </div>
    <button v-on:click="addPost">Add Post</button>
    <button v-on:click="deleteAllPosts" class="btn2">Delete all</button>
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

    addPost() {
      this.$router.push('/api/addpost');
    },

    deleteAllPosts() {
      // using Fetch - TRUNCATE  method - removes all posts from the table
      fetch(`http://localhost:3000/api/posts/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push('/posts');
        })
        .catch((e) => {
          console.log(e);
        });
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
  background-color: #7dd9fb;
  border: none;
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
