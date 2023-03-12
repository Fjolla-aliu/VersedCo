<template>
    <main class="contact">
        <br><br>
        <section>
      <div class="container mb-5">
          <section class="mb-4">
              <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
              <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate
                  to contact us directly. Our team will come back to you within
                  a matter of hours to help you.</p>

              <div class="row">

                  <div class="col-md-6 mb-md-0 mb-5">
   
                          <div class="row">

                              <div class="col-md-6">
                                  <div class="md-form mb-0">
                                      <input type="text" id="name" name="name" class="form-control">
                                      <label for="name" class="">Your name</label>
                                  </div>
                              </div>
                        
                              <div class="col-md-6">
                                  <div class="md-form mb-0">
                                      <input type="text" id="email" name="email" class="form-control">
                                      <label for="email" class="">Your email</label>
                                  </div>
                              </div>
                          </div>
                       
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="md-form mb-0">
                                      <input type="text" id="subject" name="subject" class="form-control">
                                      <label for="subject" class="">Subject</label>
                                  </div>
                              </div>
                          </div>
                       
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="md-form">
                                      <textarea type="text" id="message" name="message" rows="4"
                                          class="form-control md-textarea"></textarea>
                                      <label for="message">Your message</label>
                                  </div>

                              </div>
                          </div>

                      <div class="text-center text-md-left">
                          <a class="btn btn-dark w-100"
                              onclick="document.getElementById('contact-form').submit();">Send</a>
                      </div>
                      <div class="status"></div>
                  </div>
                  <div class="col-md-6 text-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d187761.0805452718!2d21.01898662628147!3d42.666295177858274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1672740854621!5m2!1sen!2srs" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
              </div>
          </section>
      </div>
  </section>
    </main>
         <!-- Footer -->
         <footer class="text-center text-lg-start bg-dark py-3 text-white">
          
          <!-- Section: Social media -->

          <!-- Section: Links  -->
          <section class="">
              <div class="container text-center text-md-start mt-5">
                  <!-- Grid row -->
                  <div class="row mt-3">
                      <!-- Grid column -->
                      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                          <!-- Content -->
                          <h2 class="text-uppercase fw-bold mb-4">
                              <i class="bi bi-gem me-3"></i>VersedCo
                          </h2>
                          <p>
                              Here you can use rows and columns to organize your footer content. Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                          </p>
                      </div>
                      <!-- Grid column -->

                      <!-- Grid column -->
                      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                          <!-- Links -->
                          <h6 class="text-uppercase fw-bold mb-4">
                              Products
                          </h6>
                          <p>
                              <a href="#!" class="text-reset">By Corner</a>
                          </p>
                          <p>
                              <a href="#!" class="text-reset">By Category</a>
                          </p>
                          <p>
                              <a href="#!" class="text-reset">By Ingredient</a>
                          </p>
                      </div>
                      <!-- Grid column -->

                      <!-- Grid column -->
                      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                          <!-- Links -->
                          <h6 class="text-uppercase fw-bold mb-4">
                              Useful links
                          </h6>
                          <p>
                              <a href="#!" class="text-reset">Pricing</a>
                          </p>
                          <p>
                              <a href="#!" class="text-reset">Settings</a>
                          </p>
                          <p>
                              <a href="#!" class="text-reset">Orders</a>
                          </p>
                          <p>
                              <a href="#!" class="text-reset">Help</a>
                          </p>
                      </div>
                      <!-- Grid column -->

                      <!-- Grid column -->
                      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                          <!-- Links -->
                          <h6 class="text-uppercase fw-bold mb-4">
                              Contact
                          </h6>
                          <p><i class="bi bi-location me-3"></i> New York, NY 10012, US</p>
                          <p>
                              <i class="bi bi-envelope me-3"></i>
                              info@example.com
                          </p>
                          <p><i class="bi bi-phone me-3"></i> + 01 234 567 88</p>
                          <p><i class="bi bi-print me-3"></i> + 01 234 567 89</p>
                      </div>
                      <!-- Grid column -->
                  </div>
                  <!-- Grid row -->
              </div>
          </section>
          <!-- Section: Links  -->

          <!-- Copyright -->
          <div class="text-center py-4" style="background-color: rgba(0, 0, 0, 0.05);">
              © 2021 Copyright:
              <a class="text-reset fw-bold" href="/">VersedCo.com</a>
          </div>
          <!-- Copyright -->
      </footer>
  </template>