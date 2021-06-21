<template>
  <div>
    <h1>User Profile</h1>
    <p>Id: {{ account.id }}</p>
    <p>Username: {{ account.username }}</p>
    <p>Full Name: {{ account.fullName }}</p>
    <p>Role: {{ account.role }}</p>
    <p>Status: {{ account.status }}</p>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "User",
  computed: {
    ...mapState('user', [
      'account'
    ])
  },
  methods: {
    ...mapActions({
      loadAccount: 'user/loadAccount'
    })
  },
  mounted() {
    this.loadAccount(1)
  }
}
</script>

<style scoped>

</style>