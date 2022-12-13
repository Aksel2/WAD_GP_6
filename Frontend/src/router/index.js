import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import PostsView from "../views/PostsView.vue";
import ContactView from "../views/ContactView.vue";
import APost from "../views/APost.vue";

const routes = [
  {
    path: "/",
    name: "posts",
    component: () => import("../views/PostsView.vue"),
  },

  {
    path: "/posts",
    name: "posts",
    component: PostsView,
  },
  {
    path: "/api/apost/:id",
    name: "APost",
    component: APost,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUpView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
