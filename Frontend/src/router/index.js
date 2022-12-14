import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import PostsView from "../views/PostsView.vue";
import ContactView from "../views/ContactView.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "enter",
    // component: () => import("../views/.vue"),
    component: SignUpView,
  },

  {
    path: "/posts",
    name: "posts",
    component: PostsView,
  },
  {
    path: "/apost/",
    name: "APost",
    component: APost,
  },
  {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
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
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
