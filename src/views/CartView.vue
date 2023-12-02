<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-3">Shopping cart</h3>
        </div>
      </div>

      <!-- Loop over the cart items and display -->
      <div class="row mt-2 pt-3" v-for="(item, index) in cartItems" :key="index">
        <div class="col-2"></div>
        <div class="col-md-3">
          <img :src="item.imageSrc" :alt="item.name" class="w-100 card-image-top embed-responsive embed-responsive-16by9"
            style="object-fit: cover" />
        </div>

        <!-- Display product name, quantity, and price -->
        <div class="col-md-5 px-3">
          <div class="card-block px-3">
            <h6 class="card-title">{{ item.name }}</h6>
            <br />
            <p class="mb-0 font-weight-bold" id="item-price">{{ item.description }}</p>
            <br />
            <p class="mb-0">Quantity: {{ item.quantity }}</p>
            <br />
            <p class="mb-0">Price: {{ item.price }}</p>
          </div>
        </div>
        <div class="col-2"></div>

        <div class="col-12">
          <hr />
        </div>
      </div>

      <!-- Display the total cost -->
      <div class="total-cost pt-2 text-right">
        <h5>Total {{ calculateTotal() }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        {
          name: "EXFOLIATE + RENEW BODY DUO",
          imageSrc: "./img/top2.png",
          description: "TOTAL TRANSFORMATION",
          quantity: 1,
          price: 50.0, 
        },
        
      ],
    };
  },
  methods: {
    calculateTotal() {
      // Calculate the total cost of items in the cart
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
};
</script>

