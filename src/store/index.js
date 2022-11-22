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
  mutations: {},
  actions: {},
});
