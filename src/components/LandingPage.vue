<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height">
      <div class="container-fluid p-0">
        <div class="row m-0 p-0">
          <div class="col-12 m-0 p-0">
            <img
              src="../assets/banner-compress.png"
              style=""
              class="background d-block"
              alt=""
            />
          </div>
        </div>
        <!-- <div class="pb-2 my-auto">
          <div class="col-lg pt-4 my-auto">
            <div class="text-center mb-3 d-block d-lg-none">
              <h1 class="display-3">{{ title }}</h1>
              <h3>find the world</h3>
            </div>
            <img id="phesant-img" src="../assets/banner-for-system.png" 
             alt=""/>
            

            <div class="text-center mb-3 d-none d-lg-block">
              <h1 class="display-3">{{ title }}</h1>

            </div>
            
          </div> -->

        <!-- <div class="col-lg-6 my-auto my-auto pt-4">
            <div class="text-center mb-3 d-none d-lg-block">
              <h1 class="display-3">{{ title }}</h1>
              <h3>find the world</h3>
            </div>

            <div class="border p-3 p-md-5 bg-white rounded shadow">
              <h2>coming soon</h2>
              <form action="">
                <div class="form-group">
                  <label for="emailsignup">reserve your account bla bla</label>
                  <input
                    id="emailsignup"
                    placeholder="enter email"
                    type="text"
                    class="form-control"
                  />
                  <button type="submit" class="btn btn-success mt-3">
                    join waiting list
                  </button>
                </div>
              </form>
            </div>
          </div> -->
        <!-- </div> -->
      </div>
    </div>

    <div id="about" class="p-4 pb-5 pt-5">
      <div class="row">
        <div class="col-lg">
          <img
            src="../assets/icons/bubble-tea (1).svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">Beverage</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 100px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent. -->
          </h6>
          <router-link to="/beverage">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>

        <div class="col-lg">
          <img
            src="../assets/icons/decoration.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">FOOD</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 100px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent. -->
          </h6>
          <router-link to="/food">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>

        <div class="col-lg">
          <img
            src="../assets/icons/building.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">HOSPITALITY</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 110px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent. -->
          </h6>
          <router-link to="/hospitality">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>
      </div>

      <div class="row">
        <div class="col-lg">
          <img
            src="../assets/icons/workout.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">SPORTS</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 100px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent. -->
          </h6>
          <router-link to="/sports">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>

        <div class="col-lg">
          <img
            src="../assets/icons/device.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">ELECTRONIC</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 120px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent. -->
          </h6>
          <router-link to="/electronic">
            <button type="button" class="btn"><a> Browse Merchants</a></button>
          </router-link>
        </div>

        <div class="col-lg">
          <img
            src="../assets/icons/map-pin.svg"
            height="120"
            class="m-4"
            alt=""
          />
          <h6 class="text-uppercase font-weight-bold">Coming Soon</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            style="width: 120px; height: 2px"
          />
          <h6 class="ml-md-4 mr-md-4">

          </h6>
          <button type="button" class="btn">
            &nbsp; &nbsp;&nbsp;Collaborate !&nbsp; &nbsp;&nbsp;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Digitalize Your Business And Make It Fast And Easy",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span.desc {
  padding-left: 34px;
}
hr {
  background-color: #f16500;
}
#home-page {
  background-color: #92d2f2;
  background: url("../assets/light-1282314_1920.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#footer {
  background-color: #252223;
}

.container-fluid.m-0.p-0 {
  overflow-x: hidden;
}

.background {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

body {
  overflow-x: hidden;
}
h1 {
  color: #f16500;
}
.footer-copyright p {
  text-align: center;
  margin-bottom: 0px;
}
.full-height {
  min-height: 100vh;
}
button {
  background-color: #f16500;
  color: white;
}
ul.list-unstyled li {
  font-size: 14px !important;
}
@media screen and (max-width: 759px) {
  .background {
    height: 33vh;
    width: 98vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    float: right;
  }
  #home-page {
    background-color: #92d2f2;
    background: url("../assets/light-1282314_1920.jpg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .full-height {
    min-height: 33vh;
  }
}

@media screen and (max-width: 1024px) {
  .background {
    height: 40vh;
    width: 98vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    float: right;
  }
  #home-page {
    background-color: #92d2f2;
    background: url("../assets/light-1282314_1920.jpg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .full-height {
    min-height: 40vh;
  }
}
</style>
