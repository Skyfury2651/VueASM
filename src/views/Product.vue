<template>
  <div>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
    <tr v-if="products" v-for="product in products">
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
    </tr>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "Product",
  computed: {
    ...mapState('product', [
      'products'
    ])
  },
  methods: {
    ...mapActions({
      loadProducts: 'product/loadProducts'
    })
  },
  mounted() {
    this.loadProducts()
  }
}
</script>

<style scoped>

</style>