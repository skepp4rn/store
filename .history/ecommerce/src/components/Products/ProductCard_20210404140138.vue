<template>
<div>

  <!-- Section: Block Content -->
  <section>


      <!-- New Products -->
      <div class="col-lg-4 col-md-12">

        <h4 class="text-center font-weight-bold dark-grey-text mb-5">
        </h4>

        <!-- Card -->
        <div class="card hoverable mb-4">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-6 px-0">
                <a>
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                    class="img-fluid">
                </a>
              </div>
              <div class="col-6">
                <a>
                  <strong>{{product.name}}</strong>
                </a>
                
                <h6 class="h6-responsive font-weight-bold dark-grey-text">
                  <strong>{{product.price}}kr</strong>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <!-- Card -->

      
       

    </div>

  </section>
  <!-- Section: Block Content -->

</div>

</template>

<script>
export default {
    props: ['product']

}
</script>

<style>

</style>