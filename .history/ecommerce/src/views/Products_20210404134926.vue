<template>
  <div>
      <product-list />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import productList from '../components/Products/ProductList'
export default {
    components: {
        productList
    },
    methods: {
        ...mapActions(['getProducts'])
    },
    created(){
        this.getProducts()
    }

}

</script>

<style>

</style>