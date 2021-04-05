<template>
  <div>
      <div class="container mt-5">


  <!--Section: Content-->
  <section class="mb-5">

    <!-- Section heading -->
    <h3 class="text-center font-weight-bold mb-5">Product Details</h3>

    <div class="row">

      <!--Grid column-->
      <div class="col-md-12">
        <!--News card-->
        <div class="card">
          <div class="card-body">
            <div class="row h-100 d-flex align-items-center">
              <div class="col-lg-6">
                <p class="text-muted font-weight-light ml-3 mb-5">{{product.desc}}
                </p>
 
                <div class="d-flex justify-content-between ml-3">
                  <button type="button" class="btn btn-primary mx-0">Purchase</button>
                  <div class="text-center">
                    <h4 class="mb-0">{{product.price}}</h4>
                    <small class="grey-text">+ $10 shipping fees</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">

                

                  <!--Slides-->
                  
                   
                    <div>
                      <img :src="product.image">
                    </div>
                  </div>
                  <!--/.Slides-->

            </div>
          </div>
        </div>
      </div>
      <!--Grid column-->

    </div>
  </section>
  <!--Section: Content-->


</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['id'],

computed: {
    ...mapGetters(['product'])
},
methods: {
    ...mapActions(['getProduct'])
},
created() {
    this.getProduct(this.id)
    }
}
</script>

<style>

</style>