<template>
    <main>
        <br><br>
        <section>
            <div class="container course pb-5 ">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Product</h2>
                <br>
                <!--Section description-->
                <div class="row">
                    <div class="col-md-3">
                        <div class="card box">
                            
                            <div v-for="product in shop" class="bg-image hover-overlay ripple" data-mdb-ripple-color="light" v-bind:key="product.id">
                                <a href="/product"><img v-bind:src="product.imageUrl" class="img-fluid" /></a>
                                <a href="#!">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
                            <div class="card-body">
                                
                              <p class="card-text text-secondary">TOTAL TRANSFORMATION <span class="price1">${{product.price}}</span></p>
                                <h6 class="card-title">EXFOLIATE + RENEW BODY DUO</h6>
                                <RouterLink v-bind:to="'/products' + product.id">
                                <button  class="btn-shop">Add</button></RouterLink>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card box">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                              <img src="./img/top2.png"  class="img-fluid" />
                                <a href="#!">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
                            <div class="card-body">
                              <p class="card-text text-secondary">MOOD LIGHTING <span class="price2">$30</span></p>
                                <h6 class="card-title">LUMINIZING GLOW DROPS</h6>
                                <button  class="btn-shop">Add</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card box">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                              <img src="./img/top3.png"  class="img-fluid" />
                                <a href="#!">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
                            <div class="card-body">
                              <p class="card-text text-secondary">SMOOTH OPERATORS<span class="price3">$25</span></p>
                                <h6 class="card-title">GENTLE RETINOL TRIO</h6>
                                <button  class="btn-shop">Add</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card box">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                              <img src="./img/top4.png"  class="img-fluid" />
                                <a href="#!">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
                            <div class="card-body">
                              <p class="card-text text-secondary">DOCTOR'S VISIT <span class="price2">$30</span></p>
                                <h6 class="card-title">INSTANT RESURFACING MASK</h6>
                                <button  class="btn-shop">Add</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    </main>
</template>

<style>


.btn-shop{
  margin-top: 20px;
  background: black;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  width: 100%;
  border: none;  
  border-radius: 5px;
   
}

.price1{
  padding-left: 110px;
  color: black;
}

.price2{
  padding-left: 150px;
  color: black;
}
.price3{
  padding-left: 140px;
  color: black;
}

</style>