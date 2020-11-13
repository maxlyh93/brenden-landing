<template>
  <div class="container-fluid m-0 p-0">
      <div id="home-page" class="full-height p-4">
          <div class="container pt-3">

            <div class="row pb-5 my-auto">

              <div class="col-lg-6 pt-5 my-auto">
                <div class="text-center mb-3 d-block d-lg-none">
                  <h1 class="display-3">{{title}}</h1>
                  <h3>find the world</h3>
                </div>
                <img id="phesant-img" src="../assets/logo.png" class="img-fluid">
              </div>

              <div class="col-lg-6 my-auto my-auto pt-4">
                <div class="text-center mb-3 d-none d-lg-block">
                  <h1 class="display-3">{{title}}</h1>
                  <h3>find the world</h3>
                </div>

                <div class="border p-3 p-md-5 bg-white rounded shadow">
                  <h2>coming soon</h2>
                  <form action="">
                    <div class="form-group">
                      <label for="emailsignup">reserve your account bla bla</label>
                      <input id="emailsignup" 
                             placeholder="enter email" 
                             type="text"
                             class="form-control"
                      >
                      <button type="submit" class="btn btn-success mt-3">join waiting list</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>

          </div>
      </div>

      <div id="about" class="bg-warning p-4">
          <div class="row">
            
            <div class="col-lg">
              <img src="../assets/icons/passport.svg" height="120" class="m-4" alt="">
              <h5 class="ml-md-4 mr-md-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
              </h5>
              <button type="button" class="btn btn-primary">
                click me
              </button>
            </div>

            <div class="col-lg">
              <img src="../assets/icons/piggy-bank.svg" height="120" class="m-4" alt="">
              <h5 class="ml-md-4 mr-md-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
              </h5>
              <button type="button" class="btn btn-primary">
                click me
              </button>
            </div>

            <div class="col-lg">
              <img src="../assets/icons/mobile-app.svg" height="120" class="m-4" alt="">
              <h5 class="ml-md-4 mr-md-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
              </h5>
              <button type="button" class="btn btn-primary">
                click me
              </button>
            </div>
          </div>
      </div>

      <div id="contact" class="bg-info p-4">
          
      </div>

      <div id="footer" class="p-4">
          <footer class="text-light p-4">
            <a href="https://www.youtube.com" target="_blank" class="text-warning">testing</a> |
            <a href="#" class="text-warning">privacy policy</a>
            <br>
            <small>&copy; 2020, laksdjflksajdf</small>
          </footer>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      title:'the title'
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-page{
  background-color:#92D2F2;
  background: url('../assets/chalkboard-1337809_1920.jpg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size:cover;
  background-size:cover;
}

.phesant-img{
  max-height: 80vh;
}

#footer{
  background-color: #252223;
}
</style>
