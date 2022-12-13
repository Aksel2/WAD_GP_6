<template>
  <div class="aPost">
    <HeaderBar />
    <div id="form">
      <h3>Edit Post</h3>
      <label for="body">Post Text: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <div id="buttons">
        <button v-on:click="updatePost" class="updatePost">Update</button>
        <button v-on:click="deletePost" class="deletePost">Delete</button>
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
  name: "APost",
  data() {
    return {
      post: {
        id: "",
        body: "",
        date: "",
      },
    };
  },
  methods: {
    getDate: function () {
      let today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + "/" + mm + "/" + yyyy;
      console.log(today);
      return today;
    },
    fetchAPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
      this.post.date = this.getDate();
      // using Fetch - put method - updates a specific post based on the passed id and the specified body
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
        date: JSON.stringify(this.date),
      })
        .then((response) => {
          console.log(response.data);
          //this.$router.push("/apost/" + this.post.id);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/posts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePost() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/posts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
};
</script>

<style scoped>
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
  letter-spacing: 1px;
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
