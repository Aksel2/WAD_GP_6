import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogInView from "../views/LogInView.vue";
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
    component: LogInView,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostsView,
  },
  {
    path: "/auth/apost/:id",
    name: "APost",
    component: APost,
  },
  {
    path: "/auth/addpost",
    name: "AddPost",
    component: AddPost,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUpView,
  },
  {
    path: "/logIn",
    name: "logIn",
    component: LogInView,
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
