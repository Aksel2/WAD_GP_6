<template>
  <post-comp v-for="post in posts" v-bind:key="post.userId" v-bind:post="post.post" v-bind:userId="post.userId" ></post-comp>
</template>

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
  components: {PostComp},
  methods: {},

};
</script>

<style scoped></style>
