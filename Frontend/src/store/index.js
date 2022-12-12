import { createStore } from "vuex";
import postinfo from "@/assets/posts.json";
import userinfo from "@/assets/users.json";

export default createStore({
  strict: true,
  state: {
    posts: postinfo,
    users: userinfo,
  },

  getters: {},
  mutations: {
    IncreaseLike: (state, { id }) => {
      state.posts.forEach((postData) => {
        if (postData.postId === id) {
          postData.post.like += 1;
        }
      });
    },

    resetLikes: (state) => {
      state.posts.forEach((post) => {
        post.post.like = 0;
      });
    },
  },

  actions: {
    IncreaseLikeAct: (act, payload) => {
      setTimeout(function () {
        act.commit("IncreaseLike", payload); // Vuex uses payload as second argument to pass data.
      }, 1000);
    },

    resetLikesAct: (act) => {
      act.commit("resetLikes");
    },
  },
});
