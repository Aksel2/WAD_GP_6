<template>
  <div id="posts">
    <div class="container">
        <div class="card border-shadowed" v-on:click="editPost('/api/apost/' + Id)">
          <div class="card-heading">
            <div class="box">
              <div class="right">
                <span>{{ dateFormatter(date) }}</span>
              </div>
            </div>
          </div>
          <p>{{ message }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComp",
  data: function () {
    return {
      Id: this.$.vnode.key,
    };
  },

  computed: {},

  props: ["message", "date"],

  methods: {
    editPost(route) {
      this.$router.push(route);
    },

    dateFormatter: function (date) {
      const newDate = new Date(date);

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const day = newDate.getDate();
      console.log(day);
      const month = monthNames[newDate.getMonth()];
      const year = newDate.getFullYear();

      return day + " " + month + ", " + year;
    },
    IncreaseLike: function () {
      this.$store.dispatch("IncreaseLikeAct", { id: this.postId });
    },
  },
};
</script>

<style scoped>
#posts {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}
.container {
  min-width: 0;
  display: flex;
  flex-shrink: 1;
  justify-content: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 5px;
}
span {
  min-width: 0;
}

a {
  min-width: 0;
}
.container-footer {
  display: flex;
  background: #ccc5b9;
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
  background: #ccc5b9;
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
  display: flex;
  align-items: center;
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

.likebox {
  display: flex;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
}

.invisible-button {
  background: transparent;
  border: none !important;
  font-size: 0;
}
.right {
  width: 100%;
  text-align: right;
  color: black;
}

.box {
  display: flex;
  align-items: center;
}

.border-shadowed {
  border: 1px solid #646174;
}
</style>
