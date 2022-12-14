<template>
  <div class="addPost">
    <HeaderBar />
    <div id="form">
      <h3>Add Post</h3>
      <label for="message">Post Text: </label>
      <input
        name="message"
        type="text"
        id="message"
        required
        v-model="post.message"
      />
      <div id="buttons">
        <button v-on:click="addPost" class="addPost">Add</button>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "../components/FooterBar.vue";
</script>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        date: "",
        message: "",
      },
    };
  },
  methods: {
    addPost() {
      this.post.date = new Date();
      console.log(this.post.date);
      fetch(`http://localhost:3000/auth/posts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", //  Don't forget to specify this if you need cookies
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
#form {
  max-width: 420px;
  margin: 100px auto;
  margin-bottom: 10px;
  background: #ccc5b9;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: black;
}
label {
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: black;
}

button {
  background: #7dd9fb;
  border: 0;
  padding: 10px 30px;
  margin-top: 30px;
  margin-left: 70px;
  color: black;

  border-radius: 20px;
}
</style>