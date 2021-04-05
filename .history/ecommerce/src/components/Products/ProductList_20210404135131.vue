<template>
  <div class="container">
      <div class="row">
          <product />

      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import product from './ProductCard'
export default {
    components: {
        product
    },
    computed: {
        ...mapGetters(['products'])
    }

}
</script>

<style>

</style>