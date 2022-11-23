<template>
<div class="header1">
  <router-link to="/posts">Posts</router-link> 
  <router-link to="/signUp">Sign up</router-link>
</div>
</template>

<script>
export default {
  name: 'header'
};
</script>

<style>
.header1{
  margin-top: 10px;
}
.header1 a{
  color: black;
  padding: 16px;
  text-align: center;
  font-size: 22px;
  text-decoration: none;
}

.header1 a:hover{
  background: #b8a990;
  color: #333;
}
</style>