<template>
  <div class="sign-up">
    <h2>Sign Up View</h2>
    <form @sumbit.prevent="index.html">
      <div class="form">
        <div class="window border-shadowed">
          <strong>Welcome to PostIt</strong>
          <a href="">Create an account</a>
          <p><span>or</span> <span>Please log in</span></p>
          <input v-model="email" type="text" id="email" placeholder="Email" required="required" />
          <input v-model="password" type="text" id="password" placeholder="Password" required="required" />
          <div v-if="passwordError" class="error">{{ passwordError }}</div>
          <button v-on:click="registerUser" type="submit" class="button" required="required">Sing Up</button>
          <a href="">Forget password</a>
        </div>
      </div>
    </form>
    <p>Email: {{ email }} | password: {{ password }}</p>
  </div>
</template>

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
div form {
  display: flex;
  justify-content: center;
}

.window {
  width: 400px;
  background-color: #ccc5b9;
  /* border-radius: 5px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 1em;
  height: 400px;
  /* flex-grow: 0.3; */
  /* flex-shrink: 0.3; */
}
.border-shadowed {
  border: 1px solid #646174;
  /* border-radius: 5px; */
  /* box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75); */
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
