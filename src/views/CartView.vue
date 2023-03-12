<template>
  <br>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">
          Shopping cart
        </h3>
      </div>
    </div>

    <!-- loop over the cart items and display -->
    <br>
    <div class="row mt-2 pt-3">
      <div class="col-2"></div>
      <div class="col-md-3">
        <img src="./img/top2.png" alt=""
          class="w-100 card-image-top embed-responsive embed-responsive-16by9"
          style="object-fit: cover"
        />
      </div>

      <!-- display product name, quantity -->
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            EXFOLIATE + RENEW BODY DUO
          </h6>
          <br>
          <p class="mb-0 font-weight-bold" id="item-price">
            TOTAL TRANSFORMATION 
          </p>
          <br>
          <p class="mb-0">Quantity:1</p>
          <br>
          <p class="mb-0">Price:</p>
        </div>
      </div>
      <div class="col-2"></div>
      
      <div class="col-12"><hr /></div>

    </div>
    

    <!-- display the price -->
    <div class="total-cost pt-2 text-right">
      <h5>Total </h5>
    </div>
  </div>
</template>

