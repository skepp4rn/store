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
                <p class="text-muted font-weight-light ml-3 mb-5">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                   non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                </p>
                <ul class="fa-ul mb-5 text-muted font-weight-light">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-check green-text"></i></span>Built in GPS</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-check green-text"></i></span>Heart Rate Sensor</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-check green-text"></i></span>Water Resistant 50 Meters</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-check green-text"></i></span>Comprehensive Workout App</li>
                </ul>
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