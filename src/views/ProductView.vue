<template>
    <main>
        
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-1"></div>

                <div class="col-md-4 col-12">
                    <img src="./img/top1.png" class="img-fluid" />
                </div>
                <div class="col-md-6 col-12 pt-3 pt-md-0">
                    <h4>EXFOLIATE + RENEW BODY DUO</h4>
                    <h6 class="category font-italic">TOTAL TRANSFORMATION</h6>
                    <h6 class="font-weight-bold">$45</h6>
                    <p>Use if you want smooth, glowy skin from shoulders to toes.</p>
                    <div class="d-flex flex-row justify-content-between">
                      <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                          <span class="input-group-text">Quantity</span>
                        </div>
                        <input type="number" v-model="quantity" class="form-control" />

                      </div>

                      <div class="input-group col-md-3 col-4 p-0">
                        <button class="btn" id="add-to-cart-button" @click="addToCart">
                         Add to Cart
                        </button>

                      </div>
                    </div>
                    <div class="features pt-3">
                        <h5><strong>Features</strong></h5>
                        <ul>
                            <li>This smoothing body duo works in the shower and afterwards to visibly transform rough, dull, uneven skin.</li>
                            <li>Complete with our best-selling retinol-infused body lotion</li>
                            <li>The pair helps treat body breakouts, chicken skin, strawberry legs, and more for smooth-as-glass skin that looks and feels healthier than ever before.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            quantity: 1, // Default quantity
        };
    },
    methods: {
        addToCart() {
            // Implement your cart logic here
            const product = {
                name: "EXFOLIATE + RENEW BODY DUO",
                price: 45,
                quantity: this.quantity,
            };
            axios.post('/api/add-to-cart', product)
                .then(response => {
                    // Handle the response from the backend
                    console.log(response.data);
                    // You can update your frontend UI based on the response if needed
                })
                .catch(error => {
                    // Handle errors
                    console.error(error);
                });
        },
    },
};
</script>


<style scoped>
    #form{
       margin-right: 500px;
       
    }
    .btn{
        background: black;
        width: 100px;
        color: white;
        right: 50%;
    
    }
    .input-group-text{
        background: black;
        color: white;
        height: 40px;
    }
</style>