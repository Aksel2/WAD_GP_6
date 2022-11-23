import { createStore } from "vuex";
import postinfo from "@/assets/posts.json"
import userinfo from "@/assets/users.json"

export default createStore({
  strict: true,
  state: {
    posts: postinfo,
    users: userinfo
  },
  getters: {},
  mutations: {
    resetLikes: state => {
      state.posts.forEach(post => {
          post.post.like = 0;
      })
  }
  },
  actions: {
    resetLikesAct: act => {
      act.commit("resetLikes")
    }
  },
});
