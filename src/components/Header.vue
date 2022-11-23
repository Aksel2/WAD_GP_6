<template>
  <div class="header1">
    <router-link to="/">Posts</router-link>
    <router-link to="/signUp">Sign up</router-link>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style>
.header1 {
  top: 0;
  right: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  padding: 5px 10px;
  position: fixed;

  background: rgba(196, 171, 133, 0.5);
  border: 1px solid black;
}

.header1 a {
  color: black;
  padding: 16px;
  border-radius: 5px;
  text-align: center;
  font-size: 22px;
  text-decoration: none;
}

.header1 a:hover {
  background: #b8a990;
  color: #333;
}
</style>
