import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import PostsView from "../views/PostsView.vue";

const routes = [
  {
    path: "/",
    name: "posts",
    component: PostsView,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUpView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
