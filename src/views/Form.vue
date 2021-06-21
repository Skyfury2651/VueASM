<template>
  <div class="form">
    <form>
      <label>
        <input id="fname" type="text" placeholder="username">
        <span>Name</span>
      </label>

      <label>
        <input type="password" placeholder="password">
        <span>Email</span>
      </label>

      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
       credential: {
         userName: '',
         password: ''
       }
    }
  },
  methods: {
    login(){

    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background: #35dc9b;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  margin: 0 auto 40px;
  color: #fff;
  font: 20px Helvetica;
  text-transform: uppercase;
  letter-spacing: 3px;
}

form {
  label {
    position: relative;
    display: block;

    input {
      font: 18px Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      display: block;
      border: none;
      padding: 20px;
      width: 300px;
      margin-bottom: 20px;
      font-size: 18px;
      outline: none;
      transition: all 0.2s ease-in-out;

      &::placeholder {
        transition: all 0.2s ease-in-out;
        color: #999;
        font: 18px Helvetica, Arial, sans-serif;
      }

      &:focus, &.populated {
        padding-top: 28px;
        padding-bottom: 12px;

        &::placeholder {
          color: transparent;
        }

        & + span {
          opacity: 1;
          top: 10px;
        }
      }
    }

    span {
      color: #35dc9b;
      font: 13px Helvetica, Arial, sans-serif;
      position: absolute;
      top: 0px;
      left: 20px;
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }
  }

  input[type="submit"] {
    transition: all 0.2s ease-in-out;
    font: 18px Helvetica, Arial, sans-serif;
    border: none;
    background: #1aaf75;
    color: #fff;
    padding: 16px 40px;

    &:hover {
      background: #109f67;
    }
  }
}
</style>