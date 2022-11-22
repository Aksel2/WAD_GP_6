<template>
  <div class="container" v-for="post in posts" :key="post.userId">
    <div class="card">
      <div class="card-heading">
        <div class="box">
          <img v-bind:src="users[post.userId - 1].picture" />
          <div class="right">
            <span>{{ post.post.date }}</span>
          </div>
        </div>
      </div>
      <img v-bind:src="post.post.img" />
      <p>{{ post.post.message }}</p>
      <div class="card-footer">
        <img v-bind:src="'https://cdn.worldvectorlogo.com/logos/thumbs-up-facebook.svg'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComp",
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
};
</script>


<style scoped>
#posts {
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  justify-content: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 10px;
}

.container-footer {
  display: flex;
  background: #a2ccea;;
  width: 100%;
  border-radius: 10px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.footer-end {
  height: 300px;
}

.card {
  background: #a2ccea;;
  width: 700px;
  height: auto;
  margin: 10px;
  padding: 7px;
  border-radius: 8px;
}
.card p {
  color: black;
  text-align: left;
}

.card img {
  width: 100%;
  height: auto;
  max-height: 500px;
}

.card-heading {
  padding-bottom: 7px;
}

.card-heading img {
  vertical-align: middle;
  width: 60px;
  height: 40px;
  border-radius: 10%;
}

.card-footer {
  padding-bottom: 7px;
}
.card-footer img {
  vertical-align: middle;
  width: 30px;
  height: 30px;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: flex;
}

.right {
  width: 100%;
  text-align: right;
}

.box {
  display: flex;
  align-items: center;
}
</style>