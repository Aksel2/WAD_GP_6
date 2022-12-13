<template>
  <div class="main-div">
    <HeaderBar />
    <div class="sign-up">
      <form @sumbit.prevent="index.html">
        <div class="form">
          <div class="window border-shadowed">
            <h2 class="heading">Sign Up</h2>
            <strong>Welcome to PostIt!</strong>
            <div class="input-field">
              <span>Email</span>
              <input
                v-model="email"
                type="text"
                id="email"
                placeholder="Email"
                required="required"
              />
            </div>

            <div class="input-field">
              <span>Password</span>
              <input
                v-model="password"
                type="text"
                id="password"
                placeholder="Password"
                required="required"
              />
            </div>

            <div v-if="passwordError" class="error">{{ passwordError }}</div>
            <!-- <router-link :is="passwordError == ''" :to="{ path: '/' }"> -->
            <button
              v-on:click="registerUser"
              type="submit"
              class="button"
              required="required"
            >
              Sing Up
            </button>
            <!-- </router-link> -->
          </div>
        </div>
      </form>
      <!-- <p>Email: {{ email }} | password: {{ password }}</p> -->
      <FooterBar />
    </div>
  </div>
</template>

<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "../components/FooterBar.vue";
</script>
<script>
export default {
  name: "SignUpView",
  components: {},

  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
    };
  },

  methods: {
    registerUser() {
      console.log(this.email, this.password);

      this.passwordError =
        this.password.length < 8
          ? "Password must to be at least 8 characters long"
          : this.password.length > 15
          ? "Password must be less than 15 characters long"
          : !/[A-Z]/.test(this.password)
          ? "Password must contain an uppercase letter"
          : !/[a-z]{2}/.test(this.password)
          ? "Password must contain at least two lowercase letters "
          : !/[1-9]/.test(this.password)
          ? "Password must contain at least one numberic value "
          : !/[A-Z]/.test(this.password[0])
          ? "Password must start with an uppercase letter"
          : !/_/.test(this.password)
          ? "Password must contain the character '_' "
          : "";
    },
  },
};
</script>

<style scoped>
.heading {
  margin-bottom: 0px;
}
.sign-up {
  margin-top: 80px;
}

div form {
  display: flex;
  justify-content: center;
}

.window {
  width: 400px;
  margin-top: 1000px;
  background-color: #ccc5b9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 1em;
  height: 400px;
}
.border-shadowed {
  border: 1px solid #646174;
}

.input-field {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input-field span {
  text-align: justify;
  padding-left: 1px;
  margin-bottom: 5px;
}
.button,
#upload::-webkit-file-upload-button {
  width: fit-content;
  height: 2em;
  border-radius: 5px;
  border: solid 1px gray;

  background: #fff;
  outline: none;
  transition: 0.5s linear 0.1s, color 0.5s linear 0s;
}

button:hover {
  background: #333;
  color: #fff;
}
</style>
